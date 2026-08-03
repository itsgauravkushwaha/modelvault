/**
 * Centralized AI API Pricing Architecture for ModelVault.
 * Rates specified per 1,000,000 (1M) tokens in USD.
 */

export interface ModelPricingRate {
  inputPer1M: number;         // $ per 1M input tokens
  outputPer1M: number;        // $ per 1M output tokens
  cachedInputPer1M?: number;   // $ per 1M cached input tokens (optional)
  notes?: string;
}

/**
 * Standardized pricing directory for popular commercial & cloud API models.
 */
export const MODEL_PRICING_RATES: Record<string, ModelPricingRate> = {
  // OpenAI
  "gpt-4o": { inputPer1M: 2.50, outputPer1M: 10.00, cachedInputPer1M: 1.25 },
  "gpt-4o-mini": { inputPer1M: 0.15, outputPer1M: 0.60, cachedInputPer1M: 0.075 },
  "o1": { inputPer1M: 15.00, outputPer1M: 60.00, cachedInputPer1M: 7.50 },
  "o1-mini": { inputPer1M: 3.00, outputPer1M: 12.00, cachedInputPer1M: 1.50 },
  "gpt-4-turbo": { inputPer1M: 10.00, outputPer1M: 30.00 },
  "gpt-3.5-turbo": { inputPer1M: 0.50, outputPer1M: 1.50 },

  // Anthropic
  "claude-3-5-sonnet": { inputPer1M: 3.00, outputPer1M: 15.00, cachedInputPer1M: 0.30 },
  "claude-3-5-haiku": { inputPer1M: 0.80, outputPer1M: 4.00, cachedInputPer1M: 0.08 },
  "claude-3-opus": { inputPer1M: 15.00, outputPer1M: 75.00, cachedInputPer1M: 1.50 },
  "claude-3-haiku": { inputPer1M: 0.25, outputPer1M: 1.25 },

  // DeepSeek
  "deepseek-v3": { inputPer1M: 0.14, outputPer1M: 0.28, cachedInputPer1M: 0.014 },
  "deepseek-r1": { inputPer1M: 0.55, outputPer1M: 2.19, cachedInputPer1M: 0.14 },

  // Google Gemini
  "gemini-2.0-flash": { inputPer1M: 0.10, outputPer1M: 0.40, cachedInputPer1M: 0.025 },
  "gemini-1.5-pro": { inputPer1M: 1.25, outputPer1M: 5.00, cachedInputPer1M: 0.30 },
  "gemini-1.5-flash": { inputPer1M: 0.075, outputPer1M: 0.30, cachedInputPer1M: 0.01875 },

  // Mistral AI
  "mistral-large-2": { inputPer1M: 2.00, outputPer1M: 6.00 },
  "mistral-small": { inputPer1M: 0.20, outputPer1M: 0.60 },
  "codestral": { inputPer1M: 0.20, outputPer1M: 0.60 },

  // Meta (via Cloud API Providers e.g. Together / Groq / Fireworks)
  "llama-3.3-70b": { inputPer1M: 0.60, outputPer1M: 0.60 },
  "llama-3.1-405b": { inputPer1M: 3.00, outputPer1M: 3.00 },
  "llama-3.1-70b": { inputPer1M: 0.60, outputPer1M: 0.60 },
  "llama-3.1-8b": { inputPer1M: 0.10, outputPer1M: 0.10 },

  // Qwen (via Cloud API)
  "qwen-2.5-max": { inputPer1M: 1.60, outputPer1M: 6.40 },
  "qwen-2.5-72b": { inputPer1M: 0.35, outputPer1M: 0.40 },
};

export interface CalculationInput {
  inputTokensPerReq: number;     // e.g. 1000
  outputTokensPerReq: number;    // e.g. 500
  cachedTokensPerReq: number;    // e.g. 200 (optional)
  monthlyRequests: number;       // e.g. 100,000
}

export interface CostCalculationResult {
  inputCostMonthly: number;
  outputCostMonthly: number;
  cachedSavingsMonthly: number;
  totalMonthlyCost: number;
  avgCostPerRequest: number;
  estimatedAnnualCost: number;
}

/**
 * Returns structured pricing for a model slug if available.
 */
export function getModelPricing(slug: string, pricingDetailsText?: string): ModelPricingRate | null {
  if (MODEL_PRICING_RATES[slug]) {
    return MODEL_PRICING_RATES[slug];
  }

  // Attempt dynamic parse from pricingDetails string (e.g. "$2.50 / 1M in, $10.00 / 1M out")
  if (pricingDetailsText && pricingDetailsText.includes("1M")) {
    const inMatch = pricingDetailsText.match(/\$([\d.]+)\s*\/\s*1M\s*in/i);
    const outMatch = pricingDetailsText.match(/\$([\d.]+)\s*\/\s*1M\s*out/i);

    if (inMatch && outMatch) {
      return {
        inputPer1M: parseFloat(inMatch[1]),
        outputPer1M: parseFloat(outMatch[1]),
      };
    }
  }

  return null;
}

/**
 * Calculates exact costs for a given model and workload.
 */
export function calculateCost(
  rate: ModelPricingRate,
  params: CalculationInput
): CostCalculationResult {
  const { inputTokensPerReq, outputTokensPerReq, cachedTokensPerReq, monthlyRequests } = params;

  // Regular input tokens (minus cached tokens)
  const netInputTokensPerReq = Math.max(0, inputTokensPerReq - cachedTokensPerReq);
  const totalInputTokensMonthly = (netInputTokensPerReq * monthlyRequests) / 1_000_000;
  const inputCostMonthly = totalInputTokensMonthly * rate.inputPer1M;

  // Cached input tokens
  const cachedRate = rate.cachedInputPer1M ?? rate.inputPer1M * 0.5;
  const totalCachedTokensMonthly = (cachedTokensPerReq * monthlyRequests) / 1_000_000;
  const cachedCostMonthly = totalCachedTokensMonthly * cachedRate;
  const fullPriceCachedCost = totalCachedTokensMonthly * rate.inputPer1M;
  const cachedSavingsMonthly = Math.max(0, fullPriceCachedCost - cachedCostMonthly);

  // Output tokens
  const totalOutputTokensMonthly = (outputTokensPerReq * monthlyRequests) / 1_000_000;
  const outputCostMonthly = totalOutputTokensMonthly * rate.outputPer1M;

  // Totals
  const totalMonthlyCost = inputCostMonthly + cachedCostMonthly + outputCostMonthly;
  const avgCostPerRequest = monthlyRequests > 0 ? totalMonthlyCost / monthlyRequests : 0;
  const estimatedAnnualCost = totalMonthlyCost * 12;

  return {
    inputCostMonthly,
    outputCostMonthly,
    cachedSavingsMonthly,
    totalMonthlyCost,
    avgCostPerRequest,
    estimatedAnnualCost,
  };
}
