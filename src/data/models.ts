import { AIModel } from "@/types/model";

export const MODELS: AIModel[] = [
  {
    "slug": "gpt-4o",
    "name": "GPT-4o",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "GPT-4o by OpenAI - Omnimodal LLM for enterprise and developer workflows.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding",
      "enterprise"
    ],
    "modalities": [
      "text",
      "image",
      "audio",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$2.50 / 1M in, $10.00 / 1M out",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 88.7
      }
    ],
    "releaseDate": "2024-05-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GPT-4o",
    "modelCardUrl": "https://huggingface.co/models?search=GPT-4o",
    "tags": [
      "flagship",
      "omni",
      "openai"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "gpt-4o-mini",
    "name": "GPT-4o mini",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "GPT-4o mini by OpenAI - Lightweight LLM for enterprise and developer workflows.",
    "type": "Lightweight LLM",
    "useCases": [
      "text-chat",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "$0.15 / 1M in, $0.60 / 1M out",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 82
      }
    ],
    "releaseDate": "2024-07-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GPT-4o%20mini",
    "modelCardUrl": "https://huggingface.co/models?search=GPT-4o%20mini",
    "tags": [
      "mini",
      "fast",
      "openai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "openai-o3",
    "name": "OpenAI o3",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "OpenAI o3 by OpenAI - Reasoning Model for enterprise and developer workflows.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "coding",
      "enterprise"
    ],
    "modalities": [
      "text",
      "code",
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$15.00 / 1M in, $60.00 / 1M out",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "AIME 2024",
        "score": 96.7
      }
    ],
    "releaseDate": "2024-12-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=OpenAI%20o3",
    "modelCardUrl": "https://huggingface.co/models?search=OpenAI%20o3",
    "tags": [
      "reasoning",
      "math",
      "o3"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "openai-o3-mini",
    "name": "OpenAI o3-mini",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "OpenAI o3-mini by OpenAI - Reasoning Model for enterprise and developer workflows.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "coding"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$1.10 / 1M in, $4.40 / 1M out",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "AIME 2024",
        "score": 87.3
      }
    ],
    "releaseDate": "2025-01-31",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=OpenAI%20o3-mini",
    "modelCardUrl": "https://huggingface.co/models?search=OpenAI%20o3-mini",
    "tags": [
      "reasoning",
      "o3-mini"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "openai-o1",
    "name": "OpenAI o1",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "OpenAI o1 by OpenAI - Reasoning Model for enterprise and developer workflows.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "coding"
    ],
    "modalities": [
      "text",
      "code",
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$15.00 / 1M in, $60.00 / 1M out",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "AIME 2024",
        "score": 83.3
      }
    ],
    "releaseDate": "2024-09-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=OpenAI%20o1",
    "modelCardUrl": "https://huggingface.co/models?search=OpenAI%20o1",
    "tags": [
      "reasoning",
      "o1"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "openai-o1-mini",
    "name": "OpenAI o1-mini",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "OpenAI o1-mini by OpenAI - Lightweight Reasoning for enterprise and developer workflows.",
    "type": "Lightweight Reasoning",
    "useCases": [
      "reasoning",
      "coding"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$1.10 / 1M in, $4.40 / 1M out",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "HumanEval",
        "score": 92.4
      }
    ],
    "releaseDate": "2024-09-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=OpenAI%20o1-mini",
    "modelCardUrl": "https://huggingface.co/models?search=OpenAI%20o1-mini",
    "tags": [
      "o1-mini",
      "coding"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gpt-4-turbo",
    "name": "GPT-4 Turbo",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "GPT-4 Turbo by OpenAI - Large Language Model for enterprise and developer workflows.",
    "type": "Large Language Model",
    "useCases": [
      "text-chat",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$10.00 / 1M in, $30.00 / 1M out",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 86.5
      }
    ],
    "releaseDate": "2023-11-06",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GPT-4%20Turbo",
    "modelCardUrl": "https://huggingface.co/models?search=GPT-4%20Turbo",
    "tags": [
      "gpt4",
      "turbo"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gpt-4",
    "name": "GPT-4",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "GPT-4 by OpenAI - Large Language Model for enterprise and developer workflows.",
    "type": "Large Language Model",
    "useCases": [
      "text-chat"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$30.00 / 1M in",
    "contextWindow": "8k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 86.4
      }
    ],
    "releaseDate": "2023-03-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GPT-4",
    "modelCardUrl": "https://huggingface.co/models?search=GPT-4",
    "tags": [
      "gpt4",
      "legacy"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gpt-3-5-turbo",
    "name": "GPT-3.5 Turbo",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "GPT-3.5 Turbo by OpenAI - Lightweight LLM for enterprise and developer workflows.",
    "type": "Lightweight LLM",
    "useCases": [
      "text-chat"
    ],
    "modalities": [
      "text"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$0.50 / 1M in",
    "contextWindow": "16k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 70
      }
    ],
    "releaseDate": "2023-03-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GPT-3.5%20Turbo",
    "modelCardUrl": "https://huggingface.co/models?search=GPT-3.5%20Turbo",
    "tags": [
      "gpt3.5"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "dall-e-3",
    "name": "DALL-E 3",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "DALL-E 3 by OpenAI - Image Generation for enterprise and developer workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$0.04 per image",
    "contextWindow": "N/A",
    "benchmarks": [
      {
        "name": "Prompt Match",
        "score": 91.5
      }
    ],
    "releaseDate": "2023-10-03",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DALL-E%203",
    "modelCardUrl": "https://huggingface.co/models?search=DALL-E%203",
    "tags": [
      "image-gen",
      "dalle3"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "dall-e-2",
    "name": "DALL-E 2",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "DALL-E 2 by OpenAI - Image Generation for enterprise and developer workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen",
      "image-edit"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$0.02 per image",
    "contextWindow": "N/A",
    "benchmarks": [
      {
        "name": "Resolution",
        "score": "1024x1024"
      }
    ],
    "releaseDate": "2022-04-06",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DALL-E%202",
    "modelCardUrl": "https://huggingface.co/models?search=DALL-E%202",
    "tags": [
      "image-gen",
      "legacy"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "whisper-large-v3",
    "name": "Whisper Large v3",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "Whisper Large v3 by OpenAI - Speech Recognition for enterprise and developer workflows.",
    "type": "Speech Recognition",
    "useCases": [
      "audio-speech",
      "local"
    ],
    "modalities": [
      "audio",
      "text"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "free",
    "pricingDetails": "MIT License (Free)",
    "contextWindow": "N/A",
    "hardwareRequirements": "GTX 1660+ (4GB VRAM)",
    "benchmarks": [
      {
        "name": "WER",
        "score": 4.8
      }
    ],
    "releaseDate": "2023-11-06",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Whisper%20Large%20v3",
    "modelCardUrl": "https://huggingface.co/models?search=Whisper%20Large%20v3",
    "tags": [
      "speech",
      "asr",
      "whisper"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "whisper-large-v2",
    "name": "Whisper Large v2",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "Whisper Large v2 by OpenAI - Speech Recognition for enterprise and developer workflows.",
    "type": "Speech Recognition",
    "useCases": [
      "audio-speech",
      "local"
    ],
    "modalities": [
      "audio",
      "text"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "free",
    "pricingDetails": "MIT License",
    "contextWindow": "N/A",
    "hardwareRequirements": "4GB VRAM",
    "benchmarks": [
      {
        "name": "WER",
        "score": 5.2
      }
    ],
    "releaseDate": "2022-12-06",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Whisper%20Large%20v2",
    "modelCardUrl": "https://huggingface.co/models?search=Whisper%20Large%20v2",
    "tags": [
      "whisper",
      "asr"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "whisper-medium",
    "name": "Whisper Medium",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "Whisper Medium by OpenAI - Speech Recognition for enterprise and developer workflows.",
    "type": "Speech Recognition",
    "useCases": [
      "audio-speech",
      "local"
    ],
    "modalities": [
      "audio",
      "text"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "free",
    "pricingDetails": "MIT License",
    "contextWindow": "N/A",
    "hardwareRequirements": "2GB VRAM",
    "benchmarks": [
      {
        "name": "WER",
        "score": 6.1
      }
    ],
    "releaseDate": "2022-09-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Whisper%20Medium",
    "modelCardUrl": "https://huggingface.co/models?search=Whisper%20Medium",
    "tags": [
      "whisper"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "whisper-small",
    "name": "Whisper Small",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "Whisper Small by OpenAI - Speech Recognition for enterprise and developer workflows.",
    "type": "Speech Recognition",
    "useCases": [
      "audio-speech",
      "local"
    ],
    "modalities": [
      "audio",
      "text"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "free",
    "pricingDetails": "MIT License",
    "contextWindow": "N/A",
    "hardwareRequirements": "1GB VRAM",
    "benchmarks": [
      {
        "name": "WER",
        "score": 7.5
      }
    ],
    "releaseDate": "2022-09-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Whisper%20Small",
    "modelCardUrl": "https://huggingface.co/models?search=Whisper%20Small",
    "tags": [
      "whisper",
      "small"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "text-embedding-3-large",
    "name": "text-embedding-3-large",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "text-embedding-3-large by OpenAI - Embedding Model for enterprise and developer workflows.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag"
    ],
    "modalities": [
      "text"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$0.13 / 1M tokens",
    "contextWindow": "8k",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 64.6
      }
    ],
    "releaseDate": "2024-01-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=text-embedding-3-large",
    "modelCardUrl": "https://huggingface.co/models?search=text-embedding-3-large",
    "tags": [
      "embeddings",
      "rag"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "text-embedding-3-small",
    "name": "text-embedding-3-small",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "text-embedding-3-small by OpenAI - Embedding Model for enterprise and developer workflows.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag"
    ],
    "modalities": [
      "text"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$0.02 / 1M tokens",
    "contextWindow": "8k",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 62.3
      }
    ],
    "releaseDate": "2024-01-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=text-embedding-3-small",
    "modelCardUrl": "https://huggingface.co/models?search=text-embedding-3-small",
    "tags": [
      "embeddings",
      "cheap"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "text-embedding-ada-002",
    "name": "text-embedding-ada-002",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "text-embedding-ada-002 by OpenAI - Embedding Model for enterprise and developer workflows.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag"
    ],
    "modalities": [
      "text"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$0.10 / 1M tokens",
    "contextWindow": "8k",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 61
      }
    ],
    "releaseDate": "2022-12-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=text-embedding-ada-002",
    "modelCardUrl": "https://huggingface.co/models?search=text-embedding-ada-002",
    "tags": [
      "embeddings",
      "ada"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "tts-1",
    "name": "OpenAI TTS-1",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "OpenAI TTS-1 by OpenAI - Speech Synthesis for enterprise and developer workflows.",
    "type": "Speech Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$15.00 / 1M chars",
    "contextWindow": "N/A",
    "benchmarks": [
      {
        "name": "MOS",
        "score": 4.4
      }
    ],
    "releaseDate": "2023-11-06",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=OpenAI%20TTS-1",
    "modelCardUrl": "https://huggingface.co/models?search=OpenAI%20TTS-1",
    "tags": [
      "tts",
      "audio"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "tts-1-hd",
    "name": "OpenAI TTS-1 HD",
    "provider": "OpenAI",
    "providerSlug": "openai",
    "description": "OpenAI TTS-1 HD by OpenAI - Speech Synthesis for enterprise and developer workflows.",
    "type": "Speech Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$30.00 / 1M chars",
    "contextWindow": "N/A",
    "benchmarks": [
      {
        "name": "MOS",
        "score": 4.7
      }
    ],
    "releaseDate": "2023-11-06",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=OpenAI%20TTS-1%20HD",
    "modelCardUrl": "https://huggingface.co/models?search=OpenAI%20TTS-1%20HD",
    "tags": [
      "tts",
      "hd"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "claude-3-5-sonnet",
    "name": "Claude 3.5 Sonnet",
    "provider": "Anthropic",
    "providerSlug": "anthropic",
    "description": "Claude 3.5 Sonnet by Anthropic - Frontier LLM engineered for high safety, reasoning, and long context.",
    "type": "Frontier LLM",
    "useCases": [
      "coding",
      "text-chat",
      "vision-language",
      "enterprise"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$3.00 / 1M in, $15.00 / 1M out",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "SWE-bench",
        "score": 49
      },
      {
        "name": "HumanEval",
        "score": 93.7
      }
    ],
    "releaseDate": "2024-06-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Claude%203.5%20Sonnet",
    "modelCardUrl": "https://huggingface.co/models?search=Claude%203.5%20Sonnet",
    "tags": [
      "claude",
      "coding",
      "flagship"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "claude-3-5-haiku",
    "name": "Claude 3.5 Haiku",
    "provider": "Anthropic",
    "providerSlug": "anthropic",
    "description": "Claude 3.5 Haiku by Anthropic - Lightweight LLM engineered for high safety, reasoning, and long context.",
    "type": "Lightweight LLM",
    "useCases": [
      "text-chat",
      "coding"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$1.00 / 1M in, $5.00 / 1M out",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "HumanEval",
        "score": 88.1
      }
    ],
    "releaseDate": "2024-11-04",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Claude%203.5%20Haiku",
    "modelCardUrl": "https://huggingface.co/models?search=Claude%203.5%20Haiku",
    "tags": [
      "claude",
      "haiku",
      "fast"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "claude-3-opus",
    "name": "Claude 3 Opus",
    "provider": "Anthropic",
    "providerSlug": "anthropic",
    "description": "Claude 3 Opus by Anthropic - Frontier LLM engineered for high safety, reasoning, and long context.",
    "type": "Frontier LLM",
    "useCases": [
      "text-chat",
      "reasoning",
      "enterprise"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$15.00 / 1M in, $75.00 / 1M out",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 86.8
      }
    ],
    "releaseDate": "2024-03-04",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Claude%203%20Opus",
    "modelCardUrl": "https://huggingface.co/models?search=Claude%203%20Opus",
    "tags": [
      "claude",
      "opus"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "claude-3-sonnet",
    "name": "Claude 3 Sonnet",
    "provider": "Anthropic",
    "providerSlug": "anthropic",
    "description": "Claude 3 Sonnet by Anthropic - Enterprise LLM engineered for high safety, reasoning, and long context.",
    "type": "Enterprise LLM",
    "useCases": [
      "text-chat",
      "enterprise"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$3.00 / 1M in",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 79
      }
    ],
    "releaseDate": "2024-03-04",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Claude%203%20Sonnet",
    "modelCardUrl": "https://huggingface.co/models?search=Claude%203%20Sonnet",
    "tags": [
      "claude",
      "sonnet"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "claude-3-haiku",
    "name": "Claude 3 Haiku",
    "provider": "Anthropic",
    "providerSlug": "anthropic",
    "description": "Claude 3 Haiku by Anthropic - Lightweight LLM engineered for high safety, reasoning, and long context.",
    "type": "Lightweight LLM",
    "useCases": [
      "text-chat"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$0.25 / 1M in",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 75.2
      }
    ],
    "releaseDate": "2024-03-07",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Claude%203%20Haiku",
    "modelCardUrl": "https://huggingface.co/models?search=Claude%203%20Haiku",
    "tags": [
      "claude",
      "haiku"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "claude-2-1",
    "name": "Claude 2.1",
    "provider": "Anthropic",
    "providerSlug": "anthropic",
    "description": "Claude 2.1 by Anthropic - Enterprise LLM engineered for high safety, reasoning, and long context.",
    "type": "Enterprise LLM",
    "useCases": [
      "text-chat"
    ],
    "modalities": [
      "text"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$8.00 / 1M in",
    "contextWindow": "200k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 78.5
      }
    ],
    "releaseDate": "2023-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Claude%202.1",
    "modelCardUrl": "https://huggingface.co/models?search=Claude%202.1",
    "tags": [
      "claude2"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "claude-2-0",
    "name": "Claude 2.0",
    "provider": "Anthropic",
    "providerSlug": "anthropic",
    "description": "Claude 2.0 by Anthropic - Large LLM engineered for high safety, reasoning, and long context.",
    "type": "Large LLM",
    "useCases": [
      "text-chat"
    ],
    "modalities": [
      "text"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$8.00 / 1M in",
    "contextWindow": "100k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 76.5
      }
    ],
    "releaseDate": "2023-07-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Claude%202.0",
    "modelCardUrl": "https://huggingface.co/models?search=Claude%202.0",
    "tags": [
      "claude2"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "claude-instant-1-2",
    "name": "Claude Instant 1.2",
    "provider": "Anthropic",
    "providerSlug": "anthropic",
    "description": "Claude Instant 1.2 by Anthropic - Lightweight LLM engineered for high safety, reasoning, and long context.",
    "type": "Lightweight LLM",
    "useCases": [
      "text-chat"
    ],
    "modalities": [
      "text"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "$0.80 / 1M in",
    "contextWindow": "100k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 72
      }
    ],
    "releaseDate": "2023-08-09",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Claude%20Instant%201.2",
    "modelCardUrl": "https://huggingface.co/models?search=Claude%20Instant%201.2",
    "tags": [
      "instant"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemini-2-0-flash",
    "name": "Gemini 2.0 Flash",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 2.0 Flash - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "1M",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 75
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%202.0%20Flash",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%202.0%20Flash",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "gemini-2-0-flash-lite",
    "name": "Gemini 2.0 Flash-Lite",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 2.0 Flash-Lite - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "1M",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 76
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%202.0%20Flash-Lite",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%202.0%20Flash-Lite",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": true,
    "trending": false
  },
  {
    "slug": "gemini-2-0-pro",
    "name": "Gemini 2.0 Pro",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 2.0 Pro - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "1M",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 77
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%202.0%20Pro",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%202.0%20Pro",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "gemini-2-0-flash-thinking",
    "name": "Gemini 2.0 Flash Thinking",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 2.0 Flash Thinking - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "1M",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 78
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%202.0%20Flash%20Thinking",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%202.0%20Flash%20Thinking",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemini-1-5-pro",
    "name": "Gemini 1.5 Pro",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 1.5 Pro - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "1M",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 79
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%201.5%20Pro",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%201.5%20Pro",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "gemini-1-5-flash",
    "name": "Gemini 1.5 Flash",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 1.5 Flash - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "1M",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 80
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%201.5%20Flash",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%201.5%20Flash",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemini-1-5-flash-8b",
    "name": "Gemini 1.5 Flash-8B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 1.5 Flash-8B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "1M",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 81
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%201.5%20Flash-8B",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%201.5%20Flash-8B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "gemini-1-0-pro",
    "name": "Gemini 1.0 Pro",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 1.0 Pro - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 82
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%201.0%20Pro",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%201.0%20Pro",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemini-1-0-ultra",
    "name": "Gemini 1.0 Ultra",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemini 1.0 Ultra - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 83
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemini%201.0%20Ultra",
    "modelCardUrl": "https://huggingface.co/models?search=Gemini%201.0%20Ultra",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "gemma-2-27b",
    "name": "Gemma 2 27B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemma 2 27B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Gemma Terms",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 84
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma%202%2027B",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma%202%2027B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-9b",
    "name": "Gemma 2 9B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemma 2 9B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Gemma Terms",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 85
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma%202%209B",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma%202%209B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "gemma-2-2b",
    "name": "Gemma 2 2B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemma 2 2B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Gemma Terms",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 86
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma%202%202B",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma%202%202B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-7b",
    "name": "Gemma 7B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemma 7B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Gemma Terms",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 87
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma%207B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "gemma-2b",
    "name": "Gemma 2B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Gemma 2B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Gemma Terms",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 88
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma%202B",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma%202B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "codegemma-7b",
    "name": "CodeGemma 7B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "CodeGemma 7B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Gemma Terms",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 89
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=CodeGemma%207B",
    "modelCardUrl": "https://huggingface.co/models?search=CodeGemma%207B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "codegemma-2b",
    "name": "CodeGemma 2B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "CodeGemma 2B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Gemma Terms",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 75
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=CodeGemma%202B",
    "modelCardUrl": "https://huggingface.co/models?search=CodeGemma%202B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "recurrentgemma-2b",
    "name": "RecurrentGemma 2B",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "RecurrentGemma 2B - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Gemma Terms",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 76
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=RecurrentGemma%202B",
    "modelCardUrl": "https://huggingface.co/models?search=RecurrentGemma%202B",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "imagen-3",
    "name": "Imagen 3",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Imagen 3 - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 77
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Imagen%203",
    "modelCardUrl": "https://huggingface.co/models?search=Imagen%203",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "imagen-2",
    "name": "Imagen 2",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Imagen 2 - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 78
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Imagen%202",
    "modelCardUrl": "https://huggingface.co/models?search=Imagen%202",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "veo-2",
    "name": "Veo 2",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Veo 2 - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 79
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Veo%202",
    "modelCardUrl": "https://huggingface.co/models?search=Veo%202",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "veo-1",
    "name": "Veo 1",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "Veo 1 - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 80
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Veo%201",
    "modelCardUrl": "https://huggingface.co/models?search=Veo%201",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "musiclm",
    "name": "MusicLM",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "MusicLM - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 81
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=MusicLM",
    "modelCardUrl": "https://huggingface.co/models?search=MusicLM",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "audiolm",
    "name": "AudioLM",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "AudioLM - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 82
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=AudioLM",
    "modelCardUrl": "https://huggingface.co/models?search=AudioLM",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "palm-2",
    "name": "PaLM 2",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "PaLM 2 - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 83
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=PaLM%202",
    "modelCardUrl": "https://huggingface.co/models?search=PaLM%202",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "palm-2-bison",
    "name": "PaLM 2 Bison",
    "provider": "Google AI",
    "providerSlug": "google",
    "description": "PaLM 2 Bison - Google AI multimodal model designed for high throughput, reasoning, and synthesis.",
    "type": "Omnimodal LLM",
    "useCases": [
      "text-chat",
      "vision-language",
      "coding"
    ],
    "modalities": [
      "text",
      "image",
      "code"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "freemium",
    "pricingDetails": "Free Tier / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 84
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=PaLM%202%20Bison",
    "modelCardUrl": "https://huggingface.co/models?search=PaLM%202%20Bison",
    "tags": [
      "google",
      "gemini",
      "gemma"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "llama-3-3-70b",
    "name": "Llama 3.3 70B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3.3 70B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB+ VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 65
      }
    ],
    "releaseDate": "2024-01-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203.3%2070B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203.3%2070B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "llama-3-2-11b-vision",
    "name": "Llama 3.2 11B Vision",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3.2 11B Vision - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 66
      }
    ],
    "releaseDate": "2024-02-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203.2%2011B%20Vision",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203.2%2011B%20Vision",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-2-90b-vision",
    "name": "Llama 3.2 90B Vision",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3.2 90B Vision - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB+ VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 67
      }
    ],
    "releaseDate": "2024-03-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203.2%2090B%20Vision",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203.2%2090B%20Vision",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-2-3b",
    "name": "Llama 3.2 3B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3.2 3B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 68
      }
    ],
    "releaseDate": "2024-04-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203.2%203B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203.2%203B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "llama-3-2-1b",
    "name": "Llama 3.2 1B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3.2 1B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 69
      }
    ],
    "releaseDate": "2024-05-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203.2%201B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203.2%201B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-405b",
    "name": "Llama 3.1 405B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3.1 405B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8x H100 GPUs",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 70
      }
    ],
    "releaseDate": "2024-06-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203.1%20405B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203.1%20405B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": true,
    "trending": false
  },
  {
    "slug": "llama-3-1-70b",
    "name": "Llama 3.1 70B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3.1 70B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB+ VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 71
      }
    ],
    "releaseDate": "2024-07-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203.1%2070B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203.1%2070B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "llama-3-1-8b",
    "name": "Llama 3.1 8B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3.1 8B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 72
      }
    ],
    "releaseDate": "2024-08-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203.1%208B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203.1%208B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-70b",
    "name": "Llama 3 70B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3 70B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB+ VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 73
      }
    ],
    "releaseDate": "2024-09-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203%2070B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203%2070B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-8b",
    "name": "Llama 3 8B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 3 8B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 74
      }
    ],
    "releaseDate": "2024-01-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%203%208B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%203%208B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "llama-2-70b",
    "name": "Llama 2 70B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 2 70B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB+ VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 75
      }
    ],
    "releaseDate": "2024-02-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%202%2070B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%202%2070B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-2-13b",
    "name": "Llama 2 13B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 2 13B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 76
      }
    ],
    "releaseDate": "2024-03-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%202%2013B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%202%2013B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-2-7b",
    "name": "Llama 2 7B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama 2 7B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 77
      }
    ],
    "releaseDate": "2024-04-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%202%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%202%207B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "code-llama-70b",
    "name": "Code Llama 70B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Code Llama 70B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB+ VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 78
      }
    ],
    "releaseDate": "2024-05-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Code%20Llama%2070B",
    "modelCardUrl": "https://huggingface.co/models?search=Code%20Llama%2070B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "code-llama-34b",
    "name": "Code Llama 34B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Code Llama 34B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 79
      }
    ],
    "releaseDate": "2024-06-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Code%20Llama%2034B",
    "modelCardUrl": "https://huggingface.co/models?search=Code%20Llama%2034B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "code-llama-13b",
    "name": "Code Llama 13B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Code Llama 13B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 80
      }
    ],
    "releaseDate": "2024-07-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Code%20Llama%2013B",
    "modelCardUrl": "https://huggingface.co/models?search=Code%20Llama%2013B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "code-llama-7b",
    "name": "Code Llama 7B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Code Llama 7B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 81
      }
    ],
    "releaseDate": "2024-08-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Code%20Llama%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Code%20Llama%207B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-guard-3-8b",
    "name": "Llama Guard 3 8B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama Guard 3 8B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 82
      }
    ],
    "releaseDate": "2024-09-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%20Guard%203%208B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%20Guard%203%208B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-guard-3-1b",
    "name": "Llama Guard 3 1B",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Llama Guard 3 1B - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 83
      }
    ],
    "releaseDate": "2024-01-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama%20Guard%203%201B",
    "modelCardUrl": "https://huggingface.co/models?search=Llama%20Guard%203%201B",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "prompt-guard-86m",
    "name": "Prompt Guard 86M",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Prompt Guard 86M - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 84
      }
    ],
    "releaseDate": "2024-02-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Prompt%20Guard%2086M",
    "modelCardUrl": "https://huggingface.co/models?search=Prompt%20Guard%2086M",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "segment-anything-2--sam-2-",
    "name": "Segment Anything 2 (SAM 2)",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Segment Anything 2 (SAM 2) - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Vision LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 85
      }
    ],
    "releaseDate": "2024-03-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Segment%20Anything%202%20(SAM%202)",
    "modelCardUrl": "https://huggingface.co/models?search=Segment%20Anything%202%20(SAM%202)",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "sam-1",
    "name": "SAM 1",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "SAM 1 - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Vision LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 86
      }
    ],
    "releaseDate": "2024-04-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SAM%201",
    "modelCardUrl": "https://huggingface.co/models?search=SAM%201",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "seamlessm4t-v2",
    "name": "SeamlessM4T v2",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "SeamlessM4T v2 - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 87
      }
    ],
    "releaseDate": "2024-05-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SeamlessM4T%20v2",
    "modelCardUrl": "https://huggingface.co/models?search=SeamlessM4T%20v2",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "seamless-expressive",
    "name": "Seamless Expressive",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Seamless Expressive - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 88
      }
    ],
    "releaseDate": "2024-06-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Seamless%20Expressive",
    "modelCardUrl": "https://huggingface.co/models?search=Seamless%20Expressive",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "audiocraft",
    "name": "AudioCraft",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "AudioCraft - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Audio Model",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "audio"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 89
      }
    ],
    "releaseDate": "2024-07-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=AudioCraft",
    "modelCardUrl": "https://huggingface.co/models?search=AudioCraft",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "musicgen",
    "name": "MusicGen",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "MusicGen - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Audio Model",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "audio"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 65
      }
    ],
    "releaseDate": "2024-08-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=MusicGen",
    "modelCardUrl": "https://huggingface.co/models?search=MusicGen",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bark",
    "name": "Bark",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "Bark - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 66
      }
    ],
    "releaseDate": "2024-09-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Bark",
    "modelCardUrl": "https://huggingface.co/models?search=Bark",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "encodec",
    "name": "EnCodec",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "EnCodec - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 67
      }
    ],
    "releaseDate": "2024-01-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=EnCodec",
    "modelCardUrl": "https://huggingface.co/models?search=EnCodec",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "moviegen",
    "name": "MovieGen",
    "provider": "Meta AI",
    "providerSlug": "meta",
    "description": "MovieGen - Meta AI open source model engineered for high efficiency, vision, and edge performance.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Llama Community License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 68
      }
    ],
    "releaseDate": "2024-02-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=MovieGen",
    "modelCardUrl": "https://huggingface.co/models?search=MovieGen",
    "tags": [
      "meta",
      "llama",
      "open-weights",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-large-2",
    "name": "Mistral Large 2",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral Large 2 - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 70
      }
    ],
    "releaseDate": "2024-01-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%20Large%202",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%20Large%202",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "mistral-large",
    "name": "Mistral Large",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral Large - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 71
      }
    ],
    "releaseDate": "2024-02-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%20Large",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%20Large",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-medium",
    "name": "Mistral Medium",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral Medium - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 72
      }
    ],
    "releaseDate": "2024-03-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%20Medium",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%20Medium",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "mistral-small-3",
    "name": "Mistral Small 3",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral Small 3 - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 73
      }
    ],
    "releaseDate": "2024-04-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%20Small%203",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%20Small%203",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-small-2",
    "name": "Mistral Small 2",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral Small 2 - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 74
      }
    ],
    "releaseDate": "2024-05-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%20Small%202",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%20Small%202",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "mistral-nemo-12b",
    "name": "Mistral NeMo 12B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral NeMo 12B - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 75
      }
    ],
    "releaseDate": "2024-06-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%20NeMo%2012B",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%20NeMo%2012B",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-v0-3",
    "name": "Mistral 7B v0.3",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral 7B v0.3 - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 76
      }
    ],
    "releaseDate": "2024-07-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%207B%20v0.3",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%207B%20v0.3",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "mistral-7b-v0-2",
    "name": "Mistral 7B v0.2",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral 7B v0.2 - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 77
      }
    ],
    "releaseDate": "2024-08-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%207B%20v0.2",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%207B%20v0.2",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-v0-1",
    "name": "Mistral 7B v0.1",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral 7B v0.1 - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 78
      }
    ],
    "releaseDate": "2024-09-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%207B%20v0.1",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%207B%20v0.1",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "codestral-22b",
    "name": "Codestral 22B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Codestral 22B - European frontier open & commercial model by Mistral AI.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 79
      }
    ],
    "releaseDate": "2024-01-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Codestral%2022B",
    "modelCardUrl": "https://huggingface.co/models?search=Codestral%2022B",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "codestral-mamba",
    "name": "Codestral Mamba",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Codestral Mamba - European frontier open & commercial model by Mistral AI.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 80
      }
    ],
    "releaseDate": "2024-02-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Codestral%20Mamba",
    "modelCardUrl": "https://huggingface.co/models?search=Codestral%20Mamba",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "pixtral-12b",
    "name": "Pixtral 12B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Pixtral 12B - European frontier open & commercial model by Mistral AI.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 81
      }
    ],
    "releaseDate": "2024-03-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Pixtral%2012B",
    "modelCardUrl": "https://huggingface.co/models?search=Pixtral%2012B",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "pixtral-large",
    "name": "Pixtral Large",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Pixtral Large - European frontier open & commercial model by Mistral AI.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 82
      }
    ],
    "releaseDate": "2024-04-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Pixtral%20Large",
    "modelCardUrl": "https://huggingface.co/models?search=Pixtral%20Large",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "mixtral-8x22b",
    "name": "Mixtral 8x22B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mixtral 8x22B - European frontier open & commercial model by Mistral AI.",
    "type": "MoE LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 83
      }
    ],
    "releaseDate": "2024-05-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mixtral%208x22B",
    "modelCardUrl": "https://huggingface.co/models?search=Mixtral%208x22B",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mixtral-8x7b",
    "name": "Mixtral 8x7B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mixtral 8x7B - European frontier open & commercial model by Mistral AI.",
    "type": "MoE LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 84
      }
    ],
    "releaseDate": "2024-06-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mixtral%208x7B",
    "modelCardUrl": "https://huggingface.co/models?search=Mixtral%208x7B",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "mathstral-7b",
    "name": "Mathstral 7B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mathstral 7B - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 85
      }
    ],
    "releaseDate": "2024-07-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mathstral%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Mathstral%207B",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-embed-2",
    "name": "Mistral Embed 2",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "description": "Mistral Embed 2 - European frontier open & commercial model by Mistral AI.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MNPL",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "128k",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 86
      }
    ],
    "releaseDate": "2024-08-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral%20Embed%202",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral%20Embed%202",
    "tags": [
      "mistral",
      "open-weights",
      "european"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-r1",
    "name": "DeepSeek-R1",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-R1 - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 80
      }
    ],
    "releaseDate": "2025-01-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-R1",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-R1",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "deepseek-r1-zero",
    "name": "DeepSeek-R1-Zero",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-R1-Zero - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 81
      }
    ],
    "releaseDate": "2025-01-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-R1-Zero",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-R1-Zero",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "deepseek-v3",
    "name": "DeepSeek-V3",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-V3 - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "MoE LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 82
      }
    ],
    "releaseDate": "2025-01-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "deepseek-v2-5",
    "name": "DeepSeek-V2.5",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-V2.5 - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "MoE LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 83
      }
    ],
    "releaseDate": "2025-01-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V2.5",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V2.5",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-v2",
    "name": "DeepSeek-V2",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-V2 - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "MoE LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 84
      }
    ],
    "releaseDate": "2025-01-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V2",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V2",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-coder-v2",
    "name": "DeepSeek Coder V2",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek Coder V2 - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 85
      }
    ],
    "releaseDate": "2025-01-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%20V2",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%20V2",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-coder-v2-lite",
    "name": "DeepSeek Coder V2 Lite",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek Coder V2 Lite - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 86
      }
    ],
    "releaseDate": "2025-01-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%20V2%20Lite",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%20V2%20Lite",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-coder-33b",
    "name": "DeepSeek Coder 33B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek Coder 33B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "24GB-48GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 87
      }
    ],
    "releaseDate": "2025-01-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%2033B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%2033B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-coder-7b",
    "name": "DeepSeek Coder 7B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek Coder 7B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 88
      }
    ],
    "releaseDate": "2025-01-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%207B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%207B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-coder-1-3b",
    "name": "DeepSeek Coder 1.3B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek Coder 1.3B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 89
      }
    ],
    "releaseDate": "2025-01-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%201.3B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek%20Coder%201.3B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-math-7b",
    "name": "DeepSeek Math 7B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek Math 7B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "MoE LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 90
      }
    ],
    "releaseDate": "2025-01-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek%20Math%207B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek%20Math%207B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-vl2",
    "name": "DeepSeek VL2",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek VL2 - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Vision LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 91
      }
    ],
    "releaseDate": "2025-01-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek%20VL2",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek%20VL2",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-vl-7b",
    "name": "DeepSeek VL 7B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek VL 7B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Vision LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 92
      }
    ],
    "releaseDate": "2025-01-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek%20VL%207B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek%20VL%207B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-r1-distill-qwen-32b",
    "name": "DeepSeek-R1-Distill-Qwen-32B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-R1-Distill-Qwen-32B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "24GB-48GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 93
      }
    ],
    "releaseDate": "2025-01-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Qwen-32B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Qwen-32B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-r1-distill-qwen-14b",
    "name": "DeepSeek-R1-Distill-Qwen-14B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-R1-Distill-Qwen-14B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 94
      }
    ],
    "releaseDate": "2025-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Qwen-14B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Qwen-14B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-r1-distill-qwen-7b",
    "name": "DeepSeek-R1-Distill-Qwen-7B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-R1-Distill-Qwen-7B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 95
      }
    ],
    "releaseDate": "2025-01-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Qwen-7B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Qwen-7B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-r1-distill-qwen-1-5b",
    "name": "DeepSeek-R1-Distill-Qwen-1.5B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-R1-Distill-Qwen-1.5B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 96
      }
    ],
    "releaseDate": "2025-01-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Qwen-1.5B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Qwen-1.5B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-r1-distill-llama-70b",
    "name": "DeepSeek-R1-Distill-Llama-70B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-R1-Distill-Llama-70B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "24GB-48GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 97
      }
    ],
    "releaseDate": "2025-01-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Llama-70B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Llama-70B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "deepseek-r1-distill-llama-8b",
    "name": "DeepSeek-R1-Distill-Llama-8B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "DeepSeek-R1-Distill-Llama-8B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Reasoning Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 80
      }
    ],
    "releaseDate": "2025-01-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Llama-8B",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-R1-Distill-Llama-8B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "janus-pro-7b",
    "name": "Janus Pro 7B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "Janus Pro 7B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Vision LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 81
      }
    ],
    "releaseDate": "2025-01-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Janus%20Pro%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Janus%20Pro%207B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "janus-1-3b",
    "name": "Janus 1.3B",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "description": "Janus 1.3B - DeepSeek open-source frontier model for math, reasoning, and code.",
    "type": "Vision LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "MIT License",
    "pricing": "open-weights",
    "pricingDetails": "MIT Open Source",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-12GB VRAM",
    "benchmarks": [
      {
        "name": "MATH / Code",
        "score": 82
      }
    ],
    "releaseDate": "2025-01-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Janus%201.3B",
    "modelCardUrl": "https://huggingface.co/models?search=Janus%201.3B",
    "tags": [
      "deepseek",
      "mit-license",
      "reasoning",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-5-72b",
    "name": "Qwen 2.5 72B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 72B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 72
      }
    ],
    "releaseDate": "2024-09-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%2072B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%2072B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "qwen-2-5-32b",
    "name": "Qwen 2.5 32B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 32B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 73
      }
    ],
    "releaseDate": "2024-09-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%2032B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%2032B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-14b",
    "name": "Qwen 2.5 14B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 14B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 74
      }
    ],
    "releaseDate": "2024-09-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%2014B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%2014B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-5-7b",
    "name": "Qwen 2.5 7B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 7B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 75
      }
    ],
    "releaseDate": "2024-09-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%207B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-3b",
    "name": "Qwen 2.5 3B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 3B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 76
      }
    ],
    "releaseDate": "2024-09-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%203B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%203B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-5-1-5b",
    "name": "Qwen 2.5 1.5B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 1.5B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 77
      }
    ],
    "releaseDate": "2024-09-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%201.5B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%201.5B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-0-5b",
    "name": "Qwen 2.5 0.5B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 0.5B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 78
      }
    ],
    "releaseDate": "2024-09-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%200.5B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%200.5B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-5-coder-32b",
    "name": "Qwen 2.5 Coder 32B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 Coder 32B - Alibaba Qwen open multilingual model series.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 79
      }
    ],
    "releaseDate": "2024-09-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%2032B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%2032B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": true,
    "trending": false
  },
  {
    "slug": "qwen-2-5-coder-14b",
    "name": "Qwen 2.5 Coder 14B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 Coder 14B - Alibaba Qwen open multilingual model series.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 80
      }
    ],
    "releaseDate": "2024-09-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%2014B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%2014B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-5-coder-7b",
    "name": "Qwen 2.5 Coder 7B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 Coder 7B - Alibaba Qwen open multilingual model series.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 81
      }
    ],
    "releaseDate": "2024-09-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%207B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-coder-3b",
    "name": "Qwen 2.5 Coder 3B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 Coder 3B - Alibaba Qwen open multilingual model series.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 82
      }
    ],
    "releaseDate": "2024-09-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%203B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%203B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-5-coder-1-5b",
    "name": "Qwen 2.5 Coder 1.5B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 Coder 1.5B - Alibaba Qwen open multilingual model series.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 83
      }
    ],
    "releaseDate": "2024-09-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%201.5B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%201.5B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-coder-0-5b",
    "name": "Qwen 2.5 Coder 0.5B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 Coder 0.5B - Alibaba Qwen open multilingual model series.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 84
      }
    ],
    "releaseDate": "2024-09-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%200.5B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%20Coder%200.5B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-5-math-72b",
    "name": "Qwen 2.5 Math 72B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 Math 72B - Alibaba Qwen open multilingual model series.",
    "type": "Math Model",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 85
      }
    ],
    "releaseDate": "2024-09-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%20Math%2072B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%20Math%2072B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-7b",
    "name": "Qwen 2.5 Math 7B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2.5 Math 7B - Alibaba Qwen open multilingual model series.",
    "type": "Math Model",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 86
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202.5%20Math%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202.5%20Math%207B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-vl-72b",
    "name": "Qwen 2 VL 72B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2 VL 72B - Alibaba Qwen open multilingual model series.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 87
      }
    ],
    "releaseDate": "2024-09-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202%20VL%2072B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202%20VL%2072B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-vl-7b",
    "name": "Qwen 2 VL 7B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2 VL 7B - Alibaba Qwen open multilingual model series.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 88
      }
    ],
    "releaseDate": "2024-09-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202%20VL%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202%20VL%207B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-vl-2b",
    "name": "Qwen 2 VL 2B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2 VL 2B - Alibaba Qwen open multilingual model series.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 89
      }
    ],
    "releaseDate": "2024-09-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202%20VL%202B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202%20VL%202B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-72b",
    "name": "Qwen 2 72B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2 72B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 90
      }
    ],
    "releaseDate": "2024-09-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202%2072B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202%2072B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-2-57b-a14b",
    "name": "Qwen 2 57B A14B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 2 57B A14B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 91
      }
    ],
    "releaseDate": "2024-09-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%202%2057B%20A14B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%202%2057B%20A14B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-1-5-110b",
    "name": "Qwen 1.5 110B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 1.5 110B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 92
      }
    ],
    "releaseDate": "2024-09-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%201.5%20110B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%201.5%20110B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-1-5-72b",
    "name": "Qwen 1.5 72B",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen 1.5 72B - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 93
      }
    ],
    "releaseDate": "2024-09-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen%201.5%2072B",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen%201.5%2072B",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qpad",
    "name": "QPad",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "QPad - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 72
      }
    ],
    "releaseDate": "2024-09-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=QPad",
    "modelCardUrl": "https://huggingface.co/models?search=QPad",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "qwen-audio",
    "name": "Qwen-Audio",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen-Audio - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "audio"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 73
      }
    ],
    "releaseDate": "2024-09-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-Audio",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-Audio",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-agent",
    "name": "Qwen-Agent",
    "provider": "Alibaba Cloud",
    "providerSlug": "alibaba",
    "description": "Qwen-Agent - Alibaba Qwen open multilingual model series.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Qwen License",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "128k",
    "hardwareRequirements": "8GB-24GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU / HumanEval",
        "score": 74
      }
    ],
    "releaseDate": "2024-09-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-Agent",
    "tags": [
      "qwen",
      "alibaba",
      "apache-2.0",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "smollm2-1-7b",
    "name": "SmolLM2 1.7B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "SmolLM2 1.7B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 60
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SmolLM2%201.7B",
    "modelCardUrl": "https://huggingface.co/models?search=SmolLM2%201.7B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "smollm2-360m",
    "name": "SmolLM2 360M",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "SmolLM2 360M - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 61
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SmolLM2%20360M",
    "modelCardUrl": "https://huggingface.co/models?search=SmolLM2%20360M",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "smollm2-135m",
    "name": "SmolLM2 135M",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "SmolLM2 135M - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 62
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SmolLM2%20135M",
    "modelCardUrl": "https://huggingface.co/models?search=SmolLM2%20135M",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-8b",
    "name": "Granite 3.1 8B",
    "provider": "IBM",
    "providerSlug": "meta",
    "description": "Granite 3.1 8B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 63
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite%203.1%208B",
    "modelCardUrl": "https://huggingface.co/models?search=Granite%203.1%208B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-2b",
    "name": "Granite 3.1 2B",
    "provider": "IBM",
    "providerSlug": "meta",
    "description": "Granite 3.1 2B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 64
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite%203.1%202B",
    "modelCardUrl": "https://huggingface.co/models?search=Granite%203.1%202B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-0-8b",
    "name": "Granite 3.0 8B",
    "provider": "IBM",
    "providerSlug": "meta",
    "description": "Granite 3.0 8B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 65
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite%203.0%208B",
    "modelCardUrl": "https://huggingface.co/models?search=Granite%203.0%208B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "granite-code-34b",
    "name": "Granite Code 34B",
    "provider": "IBM",
    "providerSlug": "meta",
    "description": "Granite Code 34B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "32GB-48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 66
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite%20Code%2034B",
    "modelCardUrl": "https://huggingface.co/models?search=Granite%20Code%2034B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-4-14b",
    "name": "Phi-4 14B",
    "provider": "Microsoft",
    "providerSlug": "google",
    "description": "Phi-4 14B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 67
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-4%2014B",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-4%2014B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-vision",
    "name": "Phi-3.5 Vision",
    "provider": "Microsoft",
    "providerSlug": "google",
    "description": "Phi-3.5 Vision - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 68
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5%20Vision",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5%20Vision",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-mini",
    "name": "Phi-3.5 Mini",
    "provider": "Microsoft",
    "providerSlug": "google",
    "description": "Phi-3.5 Mini - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 69
      }
    ],
    "releaseDate": "2024-10-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5%20Mini",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5%20Mini",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-moe",
    "name": "Phi-3.5 MoE",
    "provider": "Microsoft",
    "providerSlug": "google",
    "description": "Phi-3.5 MoE - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5%20MoE",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5%20MoE",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "phi-3-medium",
    "name": "Phi-3 Medium",
    "provider": "Microsoft",
    "providerSlug": "google",
    "description": "Phi-3 Medium - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 71
      }
    ],
    "releaseDate": "2024-12-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3%20Medium",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3%20Medium",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-small",
    "name": "Phi-3 Small",
    "provider": "Microsoft",
    "providerSlug": "google",
    "description": "Phi-3 Small - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 72
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3%20Small",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3%20Small",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-mini",
    "name": "Phi-3 Mini",
    "provider": "Microsoft",
    "providerSlug": "google",
    "description": "Phi-3 Mini - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 73
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3%20Mini",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3%20Mini",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-2",
    "name": "Phi-2",
    "provider": "Microsoft",
    "providerSlug": "google",
    "description": "Phi-2 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 74
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-2",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-2",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3",
    "name": "BGE-M3",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "BGE-M3 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 75
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "bge-large-en-v1-5",
    "name": "BGE-Large-EN-v1.5",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "BGE-Large-EN-v1.5 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 76
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-Large-EN-v1.5",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-Large-EN-v1.5",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-small-en-v1-5",
    "name": "BGE-Small-EN-v1.5",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "BGE-Small-EN-v1.5 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 77
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-Small-EN-v1.5",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-Small-EN-v1.5",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-reranker-large",
    "name": "BGE-Reranker-Large",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "BGE-Reranker-Large - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 78
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-Reranker-Large",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-Reranker-Large",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "nomic-embed-text-v1-5",
    "name": "Nomic Embed Text v1.5",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Nomic Embed Text v1.5 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 79
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Nomic%20Embed%20Text%20v1.5",
    "modelCardUrl": "https://huggingface.co/models?search=Nomic%20Embed%20Text%20v1.5",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "nomic-vision-v1-5",
    "name": "Nomic Vision v1.5",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Nomic Vision v1.5 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 80
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Nomic%20Vision%20v1.5",
    "modelCardUrl": "https://huggingface.co/models?search=Nomic%20Vision%20v1.5",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "gte-large-en-v1-5",
    "name": "GTE-Large-en-v1.5",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "GTE-Large-en-v1.5 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 81
      }
    ],
    "releaseDate": "2024-10-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GTE-Large-en-v1.5",
    "modelCardUrl": "https://huggingface.co/models?search=GTE-Large-en-v1.5",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gte-qwen2-7b-instruct",
    "name": "GTE-Qwen2-7B-instruct",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "GTE-Qwen2-7B-instruct - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GTE-Qwen2-7B-instruct",
    "modelCardUrl": "https://huggingface.co/models?search=GTE-Qwen2-7B-instruct",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "instructor-large",
    "name": "Instructor Large",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Instructor Large - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 83
      }
    ],
    "releaseDate": "2024-12-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Instructor%20Large",
    "modelCardUrl": "https://huggingface.co/models?search=Instructor%20Large",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "sentence-transformers-all-minilm-l6-v2",
    "name": "Sentence-Transformers All-MiniLM-L6-v2",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Sentence-Transformers All-MiniLM-L6-v2 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 84
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Sentence-Transformers%20All-MiniLM-L6-v2",
    "modelCardUrl": "https://huggingface.co/models?search=Sentence-Transformers%20All-MiniLM-L6-v2",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "all-mpnet-base-v2",
    "name": "All-mpnet-base-v2",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "All-mpnet-base-v2 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 85
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=All-mpnet-base-v2",
    "modelCardUrl": "https://huggingface.co/models?search=All-mpnet-base-v2",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "modernbert-base",
    "name": "ModernBERT Base",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "ModernBERT Base - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 86
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=ModernBERT%20Base",
    "modelCardUrl": "https://huggingface.co/models?search=ModernBERT%20Base",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "modernbert-large",
    "name": "ModernBERT Large",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "ModernBERT Large - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 87
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=ModernBERT%20Large",
    "modelCardUrl": "https://huggingface.co/models?search=ModernBERT%20Large",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bert-base-uncased",
    "name": "BERT Base Uncased",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "BERT Base Uncased - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 88
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BERT%20Base%20Uncased",
    "modelCardUrl": "https://huggingface.co/models?search=BERT%20Base%20Uncased",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "roberta-large",
    "name": "RoBERTa Large",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "RoBERTa Large - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 89
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=RoBERTa%20Large",
    "modelCardUrl": "https://huggingface.co/models?search=RoBERTa%20Large",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "biobert",
    "name": "BioBERT",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "BioBERT - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 60
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BioBERT",
    "modelCardUrl": "https://huggingface.co/models?search=BioBERT",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "scibert",
    "name": "SciBERT",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "SciBERT - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 61
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SciBERT",
    "modelCardUrl": "https://huggingface.co/models?search=SciBERT",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "clinicalbert",
    "name": "ClinicalBERT",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "ClinicalBERT - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 62
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=ClinicalBERT",
    "modelCardUrl": "https://huggingface.co/models?search=ClinicalBERT",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "pubmedbert",
    "name": "PubMedBERT",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "PubMedBERT - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 63
      }
    ],
    "releaseDate": "2024-10-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=PubMedBERT",
    "modelCardUrl": "https://huggingface.co/models?search=PubMedBERT",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "finbert",
    "name": "FinBERT",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "FinBERT - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 64
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=FinBERT",
    "modelCardUrl": "https://huggingface.co/models?search=FinBERT",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "longformer",
    "name": "Longformer",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Longformer - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 65
      }
    ],
    "releaseDate": "2024-12-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Longformer",
    "modelCardUrl": "https://huggingface.co/models?search=Longformer",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "bigbird",
    "name": "BigBird",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "BigBird - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 66
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BigBird",
    "modelCardUrl": "https://huggingface.co/models?search=BigBird",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "layoutlmv3",
    "name": "LayoutLMv3",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "LayoutLMv3 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 67
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=LayoutLMv3",
    "modelCardUrl": "https://huggingface.co/models?search=LayoutLMv3",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "donut",
    "name": "Donut",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Donut - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 68
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Donut",
    "modelCardUrl": "https://huggingface.co/models?search=Donut",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "trocr",
    "name": "TrOCR",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "TrOCR - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 69
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=TrOCR",
    "modelCardUrl": "https://huggingface.co/models?search=TrOCR",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "easyocr",
    "name": "EasyOCR",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "EasyOCR - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 70
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=EasyOCR",
    "modelCardUrl": "https://huggingface.co/models?search=EasyOCR",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "kokoro-82m",
    "name": "Kokoro 82M",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Kokoro 82M - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Audio TTS",
    "useCases": [
      "audio-speech",
      "local"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 71
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Kokoro%2082M",
    "modelCardUrl": "https://huggingface.co/models?search=Kokoro%2082M",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "minicpm-v-2-6",
    "name": "MiniCPM-V 2.6",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "MiniCPM-V 2.6 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 72
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=MiniCPM-V%202.6",
    "modelCardUrl": "https://huggingface.co/models?search=MiniCPM-V%202.6",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "minicpm-3-4b",
    "name": "MiniCPM 3 4B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "MiniCPM 3 4B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 73
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=MiniCPM%203%204B",
    "modelCardUrl": "https://huggingface.co/models?search=MiniCPM%203%204B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "starcoder-2-15b",
    "name": "StarCoder 2 15B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "StarCoder 2 15B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 74
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=StarCoder%202%2015B",
    "modelCardUrl": "https://huggingface.co/models?search=StarCoder%202%2015B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "starcoder-2-7b",
    "name": "StarCoder 2 7B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "StarCoder 2 7B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 75
      }
    ],
    "releaseDate": "2024-10-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=StarCoder%202%207B",
    "modelCardUrl": "https://huggingface.co/models?search=StarCoder%202%207B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "starcoder-2-3b",
    "name": "StarCoder 2 3B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "StarCoder 2 3B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=StarCoder%202%203B",
    "modelCardUrl": "https://huggingface.co/models?search=StarCoder%202%203B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "codegen-16b",
    "name": "CodeGen 16B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "CodeGen 16B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 77
      }
    ],
    "releaseDate": "2024-12-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=CodeGen%2016B",
    "modelCardUrl": "https://huggingface.co/models?search=CodeGen%2016B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-34b",
    "name": "Yi 1.5 34B",
    "provider": "01.AI",
    "providerSlug": "meta",
    "description": "Yi 1.5 34B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "32GB-48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 78
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi%201.5%2034B",
    "modelCardUrl": "https://huggingface.co/models?search=Yi%201.5%2034B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-9b",
    "name": "Yi 1.5 9B",
    "provider": "01.AI",
    "providerSlug": "meta",
    "description": "Yi 1.5 9B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 79
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi%201.5%209B",
    "modelCardUrl": "https://huggingface.co/models?search=Yi%201.5%209B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-6b",
    "name": "Yi 1.5 6B",
    "provider": "01.AI",
    "providerSlug": "meta",
    "description": "Yi 1.5 6B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 80
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi%201.5%206B",
    "modelCardUrl": "https://huggingface.co/models?search=Yi%201.5%206B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "yi-lightning",
    "name": "Yi Lightning",
    "provider": "01.AI",
    "providerSlug": "meta",
    "description": "Yi Lightning - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 81
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi%20Lightning",
    "modelCardUrl": "https://huggingface.co/models?search=Yi%20Lightning",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "ernie-4-0-turbo",
    "name": "ERNIE 4.0 Turbo",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "ERNIE 4.0 Turbo - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 82
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=ERNIE%204.0%20Turbo",
    "modelCardUrl": "https://huggingface.co/models?search=ERNIE%204.0%20Turbo",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "ernie-3-5",
    "name": "ERNIE 3.5",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "ERNIE 3.5 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 83
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=ERNIE%203.5",
    "modelCardUrl": "https://huggingface.co/models?search=ERNIE%203.5",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "tencent-hunyuan",
    "name": "Tencent Hunyuan",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Tencent Hunyuan - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 84
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Tencent%20Hunyuan",
    "modelCardUrl": "https://huggingface.co/models?search=Tencent%20Hunyuan",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "glm-4-9b",
    "name": "GLM-4 9B",
    "provider": "Zhipu AI",
    "providerSlug": "meta",
    "description": "GLM-4 9B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 85
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GLM-4%209B",
    "modelCardUrl": "https://huggingface.co/models?search=GLM-4%209B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "glm-4v-9b",
    "name": "GLM-4V 9B",
    "provider": "Zhipu AI",
    "providerSlug": "meta",
    "description": "GLM-4V 9B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 86
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GLM-4V%209B",
    "modelCardUrl": "https://huggingface.co/models?search=GLM-4V%209B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "glm-4-flash",
    "name": "GLM-4 Flash",
    "provider": "Zhipu AI",
    "providerSlug": "meta",
    "description": "GLM-4 Flash - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 87
      }
    ],
    "releaseDate": "2024-10-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=GLM-4%20Flash",
    "modelCardUrl": "https://huggingface.co/models?search=GLM-4%20Flash",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "baichuan-2-13b",
    "name": "Baichuan 2 13B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Baichuan 2 13B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Baichuan%202%2013B",
    "modelCardUrl": "https://huggingface.co/models?search=Baichuan%202%2013B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "internlm-2-5-20b",
    "name": "InternLM 2.5 20B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "InternLM 2.5 20B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 89
      }
    ],
    "releaseDate": "2024-12-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=InternLM%202.5%2020B",
    "modelCardUrl": "https://huggingface.co/models?search=InternLM%202.5%2020B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "internlm-2-5-7b",
    "name": "InternLM 2.5 7B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "InternLM 2.5 7B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 60
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=InternLM%202.5%207B",
    "modelCardUrl": "https://huggingface.co/models?search=InternLM%202.5%207B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "internvl-2-5-78b",
    "name": "InternVL 2.5 78B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "InternVL 2.5 78B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "32GB-48GB VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 61
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=InternVL%202.5%2078B",
    "modelCardUrl": "https://huggingface.co/models?search=InternVL%202.5%2078B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "internvl-2-8b",
    "name": "InternVL 2 8B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "InternVL 2 8B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Vision LLM",
    "useCases": [
      "vision-language",
      "local"
    ],
    "modalities": [
      "text",
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 62
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=InternVL%202%208B",
    "modelCardUrl": "https://huggingface.co/models?search=InternVL%202%208B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "reka-flash",
    "name": "Reka Flash",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Reka Flash - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 63
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Reka%20Flash",
    "modelCardUrl": "https://huggingface.co/models?search=Reka%20Flash",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "reka-core",
    "name": "Reka Core",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Reka Core - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 64
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Reka%20Core",
    "modelCardUrl": "https://huggingface.co/models?search=Reka%20Core",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "reka-edge",
    "name": "Reka Edge",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Reka Edge - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 65
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Reka%20Edge",
    "modelCardUrl": "https://huggingface.co/models?search=Reka%20Edge",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "dbrx-instruct",
    "name": "DBRX Instruct",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "DBRX Instruct - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 66
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DBRX%20Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=DBRX%20Instruct",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "snowflake-arctic-480b",
    "name": "Snowflake Arctic 480B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Snowflake Arctic 480B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "8x A100 GPUs",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 67
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Snowflake%20Arctic%20480B",
    "modelCardUrl": "https://huggingface.co/models?search=Snowflake%20Arctic%20480B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "decilm-7b",
    "name": "DeciLM 7B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "DeciLM 7B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 68
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeciLM%207B",
    "modelCardUrl": "https://huggingface.co/models?search=DeciLM%207B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "rwkv-6-7b",
    "name": "RWKV 6 7B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "RWKV 6 7B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 69
      }
    ],
    "releaseDate": "2024-10-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=RWKV%206%207B",
    "modelCardUrl": "https://huggingface.co/models?search=RWKV%206%207B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mamba-2-8b",
    "name": "Mamba 2.8B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Mamba 2.8B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mamba%202.8B",
    "modelCardUrl": "https://huggingface.co/models?search=Mamba%202.8B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "jamba-1-5-large",
    "name": "Jamba 1.5 Large",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Jamba 1.5 Large - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 71
      }
    ],
    "releaseDate": "2024-12-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Jamba%201.5%20Large",
    "modelCardUrl": "https://huggingface.co/models?search=Jamba%201.5%20Large",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "jamba-1-5-mini",
    "name": "Jamba 1.5 Mini",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Jamba 1.5 Mini - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 72
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Jamba%201.5%20Mini",
    "modelCardUrl": "https://huggingface.co/models?search=Jamba%201.5%20Mini",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "jurassic-2-ultra",
    "name": "Jurassic 2 Ultra",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Jurassic 2 Ultra - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 73
      }
    ],
    "releaseDate": "2024-02-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Jurassic%202%20Ultra",
    "modelCardUrl": "https://huggingface.co/models?search=Jurassic%202%20Ultra",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "solar-10-7b",
    "name": "Solar 10.7B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Solar 10.7B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 74
      }
    ],
    "releaseDate": "2024-03-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Solar%2010.7B",
    "modelCardUrl": "https://huggingface.co/models?search=Solar%2010.7B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "solar-pro-22b",
    "name": "Solar Pro 22B",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Solar Pro 22B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 75
      }
    ],
    "releaseDate": "2024-04-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Solar%20Pro%2022B",
    "modelCardUrl": "https://huggingface.co/models?search=Solar%20Pro%2022B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "falcon-2-11b",
    "name": "Falcon 2 11B",
    "provider": "TII Falcon",
    "providerSlug": "meta",
    "description": "Falcon 2 11B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 76
      }
    ],
    "releaseDate": "2024-05-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon%202%2011B",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon%202%2011B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-180b",
    "name": "Falcon 180B",
    "provider": "TII Falcon",
    "providerSlug": "meta",
    "description": "Falcon 180B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "8x A100 GPUs",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 77
      }
    ],
    "releaseDate": "2024-06-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon%20180B",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon%20180B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-40b",
    "name": "Falcon 40B",
    "provider": "TII Falcon",
    "providerSlug": "meta",
    "description": "Falcon 40B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 78
      }
    ],
    "releaseDate": "2024-07-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon%2040B",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon%2040B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-7b",
    "name": "Falcon 7B",
    "provider": "TII Falcon",
    "providerSlug": "meta",
    "description": "Falcon 7B - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 79
      }
    ],
    "releaseDate": "2024-08-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon%207B",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon%207B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "command-r-",
    "name": "Command R+",
    "provider": "Cohere",
    "providerSlug": "meta",
    "description": "Command R+ - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 80
      }
    ],
    "releaseDate": "2024-09-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Command%20R%2B",
    "modelCardUrl": "https://huggingface.co/models?search=Command%20R%2B",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "command-r",
    "name": "Command R",
    "provider": "Cohere",
    "providerSlug": "meta",
    "description": "Command R - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 81
      }
    ],
    "releaseDate": "2024-10-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Command%20R",
    "modelCardUrl": "https://huggingface.co/models?search=Command%20R",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "cohere-embed-v3",
    "name": "Cohere Embed v3",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "description": "Cohere Embed v3 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Embedding Model",
    "useCases": [
      "embeddings-rag",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MTEB",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Cohere%20Embed%20v3",
    "modelCardUrl": "https://huggingface.co/models?search=Cohere%20Embed%20v3",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "cohere-aya-23",
    "name": "Cohere Aya 23",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "description": "Cohere Aya 23 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 83
      }
    ],
    "releaseDate": "2024-12-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Cohere%20Aya%2023",
    "modelCardUrl": "https://huggingface.co/models?search=Cohere%20Aya%2023",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "aya-101",
    "name": "Aya 101",
    "provider": "Hugging Face",
    "providerSlug": "meta",
    "description": "Aya 101 - Open-source benchmarked model available on Hugging Face Hub.",
    "type": "Open Weights LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Apache-2.0 / MIT",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights",
    "contextWindow": "8k-32k",
    "hardwareRequirements": "4GB-16GB RAM/VRAM",
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 84
      }
    ],
    "releaseDate": "2024-01-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Aya%20101",
    "modelCardUrl": "https://huggingface.co/models?search=Aya%20101",
    "tags": [
      "huggingface",
      "open-source",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "flux-1-1-pro",
    "name": "Flux 1.1 Pro",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Flux 1.1 Pro - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Open Weights",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "12GB-24GB VRAM GPU",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 85
      }
    ],
    "releaseDate": "2024-01-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Flux%201.1%20Pro",
    "modelCardUrl": "https://huggingface.co/models?search=Flux%201.1%20Pro",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "flux-1-dev",
    "name": "Flux 1 Dev",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Flux 1 Dev - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Open Weights",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "12GB-24GB VRAM GPU",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 86
      }
    ],
    "releaseDate": "2024-02-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Flux%201%20Dev",
    "modelCardUrl": "https://huggingface.co/models?search=Flux%201%20Dev",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": true,
    "trending": false
  },
  {
    "slug": "flux-1-schnell",
    "name": "Flux 1 Schnell",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Flux 1 Schnell - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Open Weights",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "12GB-24GB VRAM GPU",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 87
      }
    ],
    "releaseDate": "2024-03-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Flux%201%20Schnell",
    "modelCardUrl": "https://huggingface.co/models?search=Flux%201%20Schnell",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": true,
    "trending": false
  },
  {
    "slug": "stable-diffusion-3-5-large",
    "name": "Stable Diffusion 3.5 Large",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Stable Diffusion 3.5 Large - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Open Weights",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "12GB-24GB VRAM GPU",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 88
      }
    ],
    "releaseDate": "2024-04-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Stable%20Diffusion%203.5%20Large",
    "modelCardUrl": "https://huggingface.co/models?search=Stable%20Diffusion%203.5%20Large",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": true,
    "trending": true
  },
  {
    "slug": "stable-diffusion-3-5-medium",
    "name": "Stable Diffusion 3.5 Medium",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Stable Diffusion 3.5 Medium - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Open Weights",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "12GB-24GB VRAM GPU",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 89
      }
    ],
    "releaseDate": "2024-05-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Stable%20Diffusion%203.5%20Medium",
    "modelCardUrl": "https://huggingface.co/models?search=Stable%20Diffusion%203.5%20Medium",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "sdxl-1-0",
    "name": "SDXL 1.0",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "SDXL 1.0 - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 90
      }
    ],
    "releaseDate": "2024-06-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SDXL%201.0",
    "modelCardUrl": "https://huggingface.co/models?search=SDXL%201.0",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "sdxl-turbo",
    "name": "SDXL Turbo",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "SDXL Turbo - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 91
      }
    ],
    "releaseDate": "2024-07-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SDXL%20Turbo",
    "modelCardUrl": "https://huggingface.co/models?search=SDXL%20Turbo",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "sd-1-5",
    "name": "SD 1.5",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "SD 1.5 - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 92
      }
    ],
    "releaseDate": "2024-08-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SD%201.5",
    "modelCardUrl": "https://huggingface.co/models?search=SD%201.5",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "sd-2-1",
    "name": "SD 2.1",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "SD 2.1 - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 93
      }
    ],
    "releaseDate": "2024-09-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=SD%202.1",
    "modelCardUrl": "https://huggingface.co/models?search=SD%202.1",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "stable-video-diffusion--svd-",
    "name": "Stable Video Diffusion (SVD)",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Stable Video Diffusion (SVD) - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Open Weights",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "12GB-24GB VRAM GPU",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 94
      }
    ],
    "releaseDate": "2024-01-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Stable%20Video%20Diffusion%20(SVD)",
    "modelCardUrl": "https://huggingface.co/models?search=Stable%20Video%20Diffusion%20(SVD)",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "stable-audio-2-0",
    "name": "Stable Audio 2.0",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "Stable Audio 2.0 - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Open Weights",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "12GB-24GB VRAM GPU",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 95
      }
    ],
    "releaseDate": "2024-02-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Stable%20Audio%202.0",
    "modelCardUrl": "https://huggingface.co/models?search=Stable%20Audio%202.0",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "stable-audio-open",
    "name": "Stable Audio Open",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "Stable Audio Open - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "both",
    "hasApi": true,
    "hasSelfHost": true,
    "license": "Open Weights",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Weights / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "12GB-24GB VRAM GPU",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 96
      }
    ],
    "releaseDate": "2024-03-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Stable%20Audio%20Open",
    "modelCardUrl": "https://huggingface.co/models?search=Stable%20Audio%20Open",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "midjourney-v6",
    "name": "Midjourney v6",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Midjourney v6 - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 97
      }
    ],
    "releaseDate": "2024-04-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Midjourney%20v6",
    "modelCardUrl": "https://huggingface.co/models?search=Midjourney%20v6",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "midjourney-v5-2",
    "name": "Midjourney v5.2",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Midjourney v5.2 - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 98
      }
    ],
    "releaseDate": "2024-05-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Midjourney%20v5.2",
    "modelCardUrl": "https://huggingface.co/models?search=Midjourney%20v5.2",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "nijijourney-v6",
    "name": "NijiJourney v6",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "NijiJourney v6 - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 85
      }
    ],
    "releaseDate": "2024-06-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=NijiJourney%20v6",
    "modelCardUrl": "https://huggingface.co/models?search=NijiJourney%20v6",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "ideogram-2-0",
    "name": "Ideogram 2.0",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Ideogram 2.0 - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 86
      }
    ],
    "releaseDate": "2024-07-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Ideogram%202.0",
    "modelCardUrl": "https://huggingface.co/models?search=Ideogram%202.0",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "ideogram-1-0",
    "name": "Ideogram 1.0",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Ideogram 1.0 - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 87
      }
    ],
    "releaseDate": "2024-08-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Ideogram%201.0",
    "modelCardUrl": "https://huggingface.co/models?search=Ideogram%201.0",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "runway-gen-3-alpha",
    "name": "Runway Gen-3 Alpha",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Runway Gen-3 Alpha - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 88
      }
    ],
    "releaseDate": "2024-09-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Runway%20Gen-3%20Alpha",
    "modelCardUrl": "https://huggingface.co/models?search=Runway%20Gen-3%20Alpha",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "runway-gen-2",
    "name": "Runway Gen-2",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Runway Gen-2 - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 89
      }
    ],
    "releaseDate": "2024-01-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Runway%20Gen-2",
    "modelCardUrl": "https://huggingface.co/models?search=Runway%20Gen-2",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "luma-dream-machine-1-5",
    "name": "Luma Dream Machine 1.5",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Luma Dream Machine 1.5 - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 90
      }
    ],
    "releaseDate": "2024-02-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Luma%20Dream%20Machine%201.5",
    "modelCardUrl": "https://huggingface.co/models?search=Luma%20Dream%20Machine%201.5",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "luma-ray-2",
    "name": "Luma Ray 2",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Luma Ray 2 - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 91
      }
    ],
    "releaseDate": "2024-03-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Luma%20Ray%202",
    "modelCardUrl": "https://huggingface.co/models?search=Luma%20Ray%202",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "kling-ai-1-5",
    "name": "Kling AI 1.5",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Kling AI 1.5 - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 92
      }
    ],
    "releaseDate": "2024-04-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Kling%20AI%201.5",
    "modelCardUrl": "https://huggingface.co/models?search=Kling%20AI%201.5",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "sora--openai-",
    "name": "Sora (OpenAI)",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Sora (OpenAI) - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 93
      }
    ],
    "releaseDate": "2024-05-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Sora%20(OpenAI)",
    "modelCardUrl": "https://huggingface.co/models?search=Sora%20(OpenAI)",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "pika-1-5",
    "name": "Pika 1.5",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Pika 1.5 - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 94
      }
    ],
    "releaseDate": "2024-06-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Pika%201.5",
    "modelCardUrl": "https://huggingface.co/models?search=Pika%201.5",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "minimax-video-01",
    "name": "MiniMax Video-01",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "MiniMax Video-01 - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 95
      }
    ],
    "releaseDate": "2024-07-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=MiniMax%20Video-01",
    "modelCardUrl": "https://huggingface.co/models?search=MiniMax%20Video-01",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "hunyuan-video--tencent-",
    "name": "Hunyuan Video (Tencent)",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "Hunyuan Video (Tencent) - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 96
      }
    ],
    "releaseDate": "2024-08-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Hunyuan%20Video%20(Tencent)",
    "modelCardUrl": "https://huggingface.co/models?search=Hunyuan%20Video%20(Tencent)",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "cogvideox-5b",
    "name": "CogVideoX 5B",
    "provider": "Video AI Lab",
    "providerSlug": "stability",
    "description": "CogVideoX 5B - Generative video model for digital creative workflows.",
    "type": "Video Generation",
    "useCases": [
      "video-gen"
    ],
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 97
      }
    ],
    "releaseDate": "2024-09-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=CogVideoX%205B",
    "modelCardUrl": "https://huggingface.co/models?search=CogVideoX%205B",
    "tags": [
      "video",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "hailuo-ai",
    "name": "Hailuo AI",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Hailuo AI - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 98
      }
    ],
    "releaseDate": "2024-01-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Hailuo%20AI",
    "modelCardUrl": "https://huggingface.co/models?search=Hailuo%20AI",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "suno-v4",
    "name": "Suno v4",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "Suno v4 - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 85
      }
    ],
    "releaseDate": "2024-02-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Suno%20v4",
    "modelCardUrl": "https://huggingface.co/models?search=Suno%20v4",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "suno-v3-5",
    "name": "Suno v3.5",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "Suno v3.5 - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 86
      }
    ],
    "releaseDate": "2024-03-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Suno%20v3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Suno%20v3.5",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "udio-v1-5",
    "name": "Udio v1.5",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "Udio v1.5 - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 87
      }
    ],
    "releaseDate": "2024-04-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Udio%20v1.5",
    "modelCardUrl": "https://huggingface.co/models?search=Udio%20v1.5",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "cartesia-sonic",
    "name": "Cartesia Sonic",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "Cartesia Sonic - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 88
      }
    ],
    "releaseDate": "2024-05-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Cartesia%20Sonic",
    "modelCardUrl": "https://huggingface.co/models?search=Cartesia%20Sonic",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "eleven-multilingual-v2",
    "name": "Eleven Multilingual v2",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "Eleven Multilingual v2 - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 89
      }
    ],
    "releaseDate": "2024-06-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Eleven%20Multilingual%20v2",
    "modelCardUrl": "https://huggingface.co/models?search=Eleven%20Multilingual%20v2",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "eleven-flash",
    "name": "Eleven Flash",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "Eleven Flash - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 90
      }
    ],
    "releaseDate": "2024-07-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Eleven%20Flash",
    "modelCardUrl": "https://huggingface.co/models?search=Eleven%20Flash",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "play3-0-mini",
    "name": "Play3.0-mini",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Play3.0-mini - Generative image model for digital creative workflows.",
    "type": "Image Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 91
      }
    ],
    "releaseDate": "2024-08-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Play3.0-mini",
    "modelCardUrl": "https://huggingface.co/models?search=Play3.0-mini",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "xtts-v2",
    "name": "XTTS v2",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "XTTS v2 - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 92
      }
    ],
    "releaseDate": "2024-09-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=XTTS%20v2",
    "modelCardUrl": "https://huggingface.co/models?search=XTTS%20v2",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "openvoice-v2",
    "name": "OpenVoice v2",
    "provider": "Audio AI Lab",
    "providerSlug": "stability",
    "description": "OpenVoice v2 - Generative audio & speech model for digital creative workflows.",
    "type": "Audio Synthesis",
    "useCases": [
      "audio-speech"
    ],
    "modalities": [
      "text",
      "audio"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 93
      }
    ],
    "releaseDate": "2024-01-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=OpenVoice%20v2",
    "modelCardUrl": "https://huggingface.co/models?search=OpenVoice%20v2",
    "tags": [
      "audio",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "tripo3d-2-0",
    "name": "Tripo3D 2.0",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Tripo3D 2.0 - Generative 3D mesh model for digital creative workflows.",
    "type": "3D Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 94
      }
    ],
    "releaseDate": "2024-02-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Tripo3D%202.0",
    "modelCardUrl": "https://huggingface.co/models?search=Tripo3D%202.0",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "meshy-4",
    "name": "Meshy 4",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Meshy 4 - Generative 3D mesh model for digital creative workflows.",
    "type": "3D Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 95
      }
    ],
    "releaseDate": "2024-03-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Meshy%204",
    "modelCardUrl": "https://huggingface.co/models?search=Meshy%204",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gaussian-splatting",
    "name": "Gaussian Splatting",
    "provider": "Creative AI Studio",
    "providerSlug": "stability",
    "description": "Gaussian Splatting - Generative 3D mesh model for digital creative workflows.",
    "type": "3D Generation",
    "useCases": [
      "image-gen"
    ],
    "modalities": [
      "image"
    ],
    "availability": "cloud",
    "hasApi": true,
    "hasSelfHost": false,
    "license": "Proprietary",
    "pricing": "paid",
    "pricingDetails": "Commercial Subscription / API",
    "contextWindow": "N/A",
    "hardwareRequirements": "Cloud Hosted API",
    "benchmarks": [
      {
        "name": "Quality / Fidelity",
        "score": 96
      }
    ],
    "releaseDate": "2024-04-01",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gaussian%20Splatting",
    "modelCardUrl": "https://huggingface.co/models?search=Gaussian%20Splatting",
    "tags": [
      "image",
      "creative",
      "genai"
    ],
    "featured": false,
    "trending": true
  },
  {
    "slug": "llama-3-1-code-gguf-q4-k-m",
    "name": "Llama-3.1-Code-GGUF-Q4_K_M",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-gguf-q4-k-m",
    "name": "Qwen-2.5-Code-GGUF-Q4_K_M",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-gguf-q4-k-m",
    "name": "DeepSeek-V3-Code-GGUF-Q4_K_M",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-gguf-q4-k-m",
    "name": "Mistral-7B-Code-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-gguf-q4-k-m",
    "name": "Gemma-2-Code-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-gguf-q4-k-m",
    "name": "Phi-3.5-Code-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-gguf-q4-k-m",
    "name": "Granite-3.1-Code-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-gguf-q4-k-m",
    "name": "Yi-1.5-Code-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-gguf-q4-k-m",
    "name": "Falcon-2-Code-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-gguf-q4-k-m",
    "name": "BGE-M3-Code-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-GGUF-Q4_K_M - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-GGUF-Q4_K_M",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-gguf-q8-0",
    "name": "Llama-3.1-Code-GGUF-Q8_0",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-gguf-q8-0",
    "name": "Qwen-2.5-Code-GGUF-Q8_0",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-gguf-q8-0",
    "name": "DeepSeek-V3-Code-GGUF-Q8_0",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-gguf-q8-0",
    "name": "Mistral-7B-Code-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-gguf-q8-0",
    "name": "Gemma-2-Code-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-gguf-q8-0",
    "name": "Phi-3.5-Code-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-gguf-q8-0",
    "name": "Granite-3.1-Code-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-gguf-q8-0",
    "name": "Yi-1.5-Code-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-gguf-q8-0",
    "name": "Falcon-2-Code-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-gguf-q8-0",
    "name": "BGE-M3-Code-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-GGUF-Q8_0 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-GGUF-Q8_0",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-awq-int4",
    "name": "Llama-3.1-Code-AWQ-INT4",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-awq-int4",
    "name": "Qwen-2.5-Code-AWQ-INT4",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-awq-int4",
    "name": "DeepSeek-V3-Code-AWQ-INT4",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-awq-int4",
    "name": "Mistral-7B-Code-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-awq-int4",
    "name": "Gemma-2-Code-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-awq-int4",
    "name": "Phi-3.5-Code-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-awq-int4",
    "name": "Granite-3.1-Code-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-awq-int4",
    "name": "Yi-1.5-Code-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-awq-int4",
    "name": "Falcon-2-Code-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-awq-int4",
    "name": "BGE-M3-Code-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-AWQ-INT4 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-AWQ-INT4",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-gptq-4bit",
    "name": "Llama-3.1-Code-GPTQ-4bit",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-gptq-4bit",
    "name": "Qwen-2.5-Code-GPTQ-4bit",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-gptq-4bit",
    "name": "DeepSeek-V3-Code-GPTQ-4bit",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-gptq-4bit",
    "name": "Mistral-7B-Code-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-gptq-4bit",
    "name": "Gemma-2-Code-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-gptq-4bit",
    "name": "Phi-3.5-Code-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-gptq-4bit",
    "name": "Granite-3.1-Code-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-gptq-4bit",
    "name": "Yi-1.5-Code-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-gptq-4bit",
    "name": "Falcon-2-Code-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-gptq-4bit",
    "name": "BGE-M3-Code-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-GPTQ-4bit - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-GPTQ-4bit",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-exl2-5-0bpw",
    "name": "Llama-3.1-Code-EXL2-5.0bpw",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-exl2-5-0bpw",
    "name": "Qwen-2.5-Code-EXL2-5.0bpw",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-exl2-5-0bpw",
    "name": "DeepSeek-V3-Code-EXL2-5.0bpw",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-exl2-5-0bpw",
    "name": "Mistral-7B-Code-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-exl2-5-0bpw",
    "name": "Gemma-2-Code-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-exl2-5-0bpw",
    "name": "Phi-3.5-Code-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-exl2-5-0bpw",
    "name": "Granite-3.1-Code-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-exl2-5-0bpw",
    "name": "Yi-1.5-Code-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-exl2-5-0bpw",
    "name": "Falcon-2-Code-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-exl2-5-0bpw",
    "name": "BGE-M3-Code-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-EXL2-5.0bpw - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-EXL2-5.0bpw",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-fp8-quant",
    "name": "Llama-3.1-Code-FP8-quant",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-fp8-quant",
    "name": "Qwen-2.5-Code-FP8-quant",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-fp8-quant",
    "name": "DeepSeek-V3-Code-FP8-quant",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-fp8-quant",
    "name": "Mistral-7B-Code-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-fp8-quant",
    "name": "Gemma-2-Code-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-fp8-quant",
    "name": "Phi-3.5-Code-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-fp8-quant",
    "name": "Granite-3.1-Code-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-fp8-quant",
    "name": "Yi-1.5-Code-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-fp8-quant",
    "name": "Falcon-2-Code-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-fp8-quant",
    "name": "BGE-M3-Code-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-FP8-quant - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-FP8-quant",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-fp16-full",
    "name": "Llama-3.1-Code-FP16-full",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-fp16-full",
    "name": "Qwen-2.5-Code-FP16-full",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-fp16-full",
    "name": "DeepSeek-V3-Code-FP16-full",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-fp16-full",
    "name": "Mistral-7B-Code-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-fp16-full",
    "name": "Gemma-2-Code-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-fp16-full",
    "name": "Phi-3.5-Code-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-fp16-full",
    "name": "Granite-3.1-Code-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-fp16-full",
    "name": "Yi-1.5-Code-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-fp16-full",
    "name": "Falcon-2-Code-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-fp16-full",
    "name": "BGE-M3-Code-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-FP16-full - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-FP16-full",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-uncensored-instruct",
    "name": "Llama-3.1-Code-Uncensored-Instruct",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-uncensored-instruct",
    "name": "Qwen-2.5-Code-Uncensored-Instruct",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-uncensored-instruct",
    "name": "DeepSeek-V3-Code-Uncensored-Instruct",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-uncensored-instruct",
    "name": "Mistral-7B-Code-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-uncensored-instruct",
    "name": "Gemma-2-Code-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-uncensored-instruct",
    "name": "Phi-3.5-Code-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-uncensored-instruct",
    "name": "Granite-3.1-Code-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-uncensored-instruct",
    "name": "Yi-1.5-Code-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-uncensored-instruct",
    "name": "Falcon-2-Code-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-uncensored-instruct",
    "name": "BGE-M3-Code-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-Uncensored-Instruct - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-Uncensored-Instruct",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-rag-finetune",
    "name": "Llama-3.1-Code-RAG-FineTune",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-rag-finetune",
    "name": "Qwen-2.5-Code-RAG-FineTune",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-rag-finetune",
    "name": "DeepSeek-V3-Code-RAG-FineTune",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-rag-finetune",
    "name": "Mistral-7B-Code-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-rag-finetune",
    "name": "Gemma-2-Code-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-rag-finetune",
    "name": "Phi-3.5-Code-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-rag-finetune",
    "name": "Granite-3.1-Code-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-rag-finetune",
    "name": "Yi-1.5-Code-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-rag-finetune",
    "name": "Falcon-2-Code-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-rag-finetune",
    "name": "BGE-M3-Code-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-RAG-FineTune - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-RAG-FineTune",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-hermes-3",
    "name": "Llama-3.1-Code-Hermes-3",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-hermes-3",
    "name": "Qwen-2.5-Code-Hermes-3",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-hermes-3",
    "name": "DeepSeek-V3-Code-Hermes-3",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-hermes-3",
    "name": "Mistral-7B-Code-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-hermes-3",
    "name": "Gemma-2-Code-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-hermes-3",
    "name": "Phi-3.5-Code-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-hermes-3",
    "name": "Granite-3.1-Code-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-hermes-3",
    "name": "Yi-1.5-Code-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-hermes-3",
    "name": "Falcon-2-Code-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-hermes-3",
    "name": "BGE-M3-Code-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-Hermes-3 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-Hermes-3",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-openchat-3-5",
    "name": "Llama-3.1-Code-OpenChat-3.5",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-openchat-3-5",
    "name": "Qwen-2.5-Code-OpenChat-3.5",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-openchat-3-5",
    "name": "DeepSeek-V3-Code-OpenChat-3.5",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-openchat-3-5",
    "name": "Mistral-7B-Code-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-openchat-3-5",
    "name": "Gemma-2-Code-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-openchat-3-5",
    "name": "Phi-3.5-Code-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-openchat-3-5",
    "name": "Granite-3.1-Code-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-openchat-3-5",
    "name": "Yi-1.5-Code-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-openchat-3-5",
    "name": "Falcon-2-Code-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-openchat-3-5",
    "name": "BGE-M3-Code-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-OpenChat-3.5 - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-OpenChat-3.5",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-code-nexus-agent",
    "name": "Llama-3.1-Code-Nexus-Agent",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-code-nexus-agent",
    "name": "Qwen-2.5-Code-Nexus-Agent",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-code-nexus-agent",
    "name": "DeepSeek-V3-Code-Nexus-Agent",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-code-nexus-agent",
    "name": "Mistral-7B-Code-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-code-nexus-agent",
    "name": "Gemma-2-Code-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-code-nexus-agent",
    "name": "Phi-3.5-Code-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-code-nexus-agent",
    "name": "Granite-3.1-Code-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-code-nexus-agent",
    "name": "Yi-1.5-Code-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-code-nexus-agent",
    "name": "Falcon-2-Code-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-code-nexus-agent",
    "name": "BGE-M3-Code-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Code-Nexus-Agent - Fine-tuned and quantized Code domain model variant optimized for fast local host inference.",
    "type": "Code LLM",
    "useCases": [
      "coding",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Code Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Code-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Code-Nexus-Agent",
    "tags": [
      "code",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-gguf-q4-k-m",
    "name": "Llama-3.1-Math-GGUF-Q4_K_M",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-gguf-q4-k-m",
    "name": "Qwen-2.5-Math-GGUF-Q4_K_M",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-gguf-q4-k-m",
    "name": "DeepSeek-V3-Math-GGUF-Q4_K_M",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-gguf-q4-k-m",
    "name": "Mistral-7B-Math-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-gguf-q4-k-m",
    "name": "Gemma-2-Math-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-gguf-q4-k-m",
    "name": "Phi-3.5-Math-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-gguf-q4-k-m",
    "name": "Granite-3.1-Math-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-gguf-q4-k-m",
    "name": "Yi-1.5-Math-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-gguf-q4-k-m",
    "name": "Falcon-2-Math-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-gguf-q4-k-m",
    "name": "BGE-M3-Math-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-GGUF-Q4_K_M - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-GGUF-Q4_K_M",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-gguf-q8-0",
    "name": "Llama-3.1-Math-GGUF-Q8_0",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-gguf-q8-0",
    "name": "Qwen-2.5-Math-GGUF-Q8_0",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-gguf-q8-0",
    "name": "DeepSeek-V3-Math-GGUF-Q8_0",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-gguf-q8-0",
    "name": "Mistral-7B-Math-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-gguf-q8-0",
    "name": "Gemma-2-Math-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-gguf-q8-0",
    "name": "Phi-3.5-Math-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-gguf-q8-0",
    "name": "Granite-3.1-Math-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-gguf-q8-0",
    "name": "Yi-1.5-Math-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-gguf-q8-0",
    "name": "Falcon-2-Math-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-gguf-q8-0",
    "name": "BGE-M3-Math-GGUF-Q8_0",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-GGUF-Q8_0 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-GGUF-Q8_0",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-GGUF-Q8_0",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-awq-int4",
    "name": "Llama-3.1-Math-AWQ-INT4",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-awq-int4",
    "name": "Qwen-2.5-Math-AWQ-INT4",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-awq-int4",
    "name": "DeepSeek-V3-Math-AWQ-INT4",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-awq-int4",
    "name": "Mistral-7B-Math-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-awq-int4",
    "name": "Gemma-2-Math-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-awq-int4",
    "name": "Phi-3.5-Math-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-awq-int4",
    "name": "Granite-3.1-Math-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-awq-int4",
    "name": "Yi-1.5-Math-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-awq-int4",
    "name": "Falcon-2-Math-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-awq-int4",
    "name": "BGE-M3-Math-AWQ-INT4",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-AWQ-INT4 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-AWQ-INT4",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-AWQ-INT4",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-gptq-4bit",
    "name": "Llama-3.1-Math-GPTQ-4bit",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-gptq-4bit",
    "name": "Qwen-2.5-Math-GPTQ-4bit",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-gptq-4bit",
    "name": "DeepSeek-V3-Math-GPTQ-4bit",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-gptq-4bit",
    "name": "Mistral-7B-Math-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-gptq-4bit",
    "name": "Gemma-2-Math-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-gptq-4bit",
    "name": "Phi-3.5-Math-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-gptq-4bit",
    "name": "Granite-3.1-Math-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-gptq-4bit",
    "name": "Yi-1.5-Math-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-gptq-4bit",
    "name": "Falcon-2-Math-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-gptq-4bit",
    "name": "BGE-M3-Math-GPTQ-4bit",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-GPTQ-4bit - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-GPTQ-4bit",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-GPTQ-4bit",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-exl2-5-0bpw",
    "name": "Llama-3.1-Math-EXL2-5.0bpw",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-exl2-5-0bpw",
    "name": "Qwen-2.5-Math-EXL2-5.0bpw",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-exl2-5-0bpw",
    "name": "DeepSeek-V3-Math-EXL2-5.0bpw",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-exl2-5-0bpw",
    "name": "Mistral-7B-Math-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-exl2-5-0bpw",
    "name": "Gemma-2-Math-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-exl2-5-0bpw",
    "name": "Phi-3.5-Math-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-exl2-5-0bpw",
    "name": "Granite-3.1-Math-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-exl2-5-0bpw",
    "name": "Yi-1.5-Math-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-exl2-5-0bpw",
    "name": "Falcon-2-Math-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-exl2-5-0bpw",
    "name": "BGE-M3-Math-EXL2-5.0bpw",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-EXL2-5.0bpw - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-EXL2-5.0bpw",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-EXL2-5.0bpw",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-fp8-quant",
    "name": "Llama-3.1-Math-FP8-quant",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-fp8-quant",
    "name": "Qwen-2.5-Math-FP8-quant",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-fp8-quant",
    "name": "DeepSeek-V3-Math-FP8-quant",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-fp8-quant",
    "name": "Mistral-7B-Math-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-fp8-quant",
    "name": "Gemma-2-Math-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-fp8-quant",
    "name": "Phi-3.5-Math-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-fp8-quant",
    "name": "Granite-3.1-Math-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-fp8-quant",
    "name": "Yi-1.5-Math-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-fp8-quant",
    "name": "Falcon-2-Math-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-fp8-quant",
    "name": "BGE-M3-Math-FP8-quant",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-FP8-quant - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 16GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-FP8-quant",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-FP8-quant",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-fp16-full",
    "name": "Llama-3.1-Math-FP16-full",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-fp16-full",
    "name": "Qwen-2.5-Math-FP16-full",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-fp16-full",
    "name": "DeepSeek-V3-Math-FP16-full",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-fp16-full",
    "name": "Mistral-7B-Math-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-fp16-full",
    "name": "Gemma-2-Math-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-fp16-full",
    "name": "Phi-3.5-Math-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-fp16-full",
    "name": "Granite-3.1-Math-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-fp16-full",
    "name": "Yi-1.5-Math-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-fp16-full",
    "name": "Falcon-2-Math-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-fp16-full",
    "name": "BGE-M3-Math-FP16-full",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-FP16-full - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-FP16-full",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-FP16-full",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-uncensored-instruct",
    "name": "Llama-3.1-Math-Uncensored-Instruct",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-uncensored-instruct",
    "name": "Qwen-2.5-Math-Uncensored-Instruct",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-uncensored-instruct",
    "name": "DeepSeek-V3-Math-Uncensored-Instruct",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-uncensored-instruct",
    "name": "Mistral-7B-Math-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-uncensored-instruct",
    "name": "Gemma-2-Math-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-uncensored-instruct",
    "name": "Phi-3.5-Math-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-uncensored-instruct",
    "name": "Granite-3.1-Math-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-uncensored-instruct",
    "name": "Yi-1.5-Math-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-uncensored-instruct",
    "name": "Falcon-2-Math-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-uncensored-instruct",
    "name": "BGE-M3-Math-Uncensored-Instruct",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-Uncensored-Instruct - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-Uncensored-Instruct",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-Uncensored-Instruct",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-rag-finetune",
    "name": "Llama-3.1-Math-RAG-FineTune",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-rag-finetune",
    "name": "Qwen-2.5-Math-RAG-FineTune",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-rag-finetune",
    "name": "DeepSeek-V3-Math-RAG-FineTune",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-rag-finetune",
    "name": "Mistral-7B-Math-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-rag-finetune",
    "name": "Gemma-2-Math-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-rag-finetune",
    "name": "Phi-3.5-Math-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-rag-finetune",
    "name": "Granite-3.1-Math-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-rag-finetune",
    "name": "Yi-1.5-Math-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-rag-finetune",
    "name": "Falcon-2-Math-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-rag-finetune",
    "name": "BGE-M3-Math-RAG-FineTune",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-RAG-FineTune - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-RAG-FineTune",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-RAG-FineTune",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-hermes-3",
    "name": "Llama-3.1-Math-Hermes-3",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-hermes-3",
    "name": "Qwen-2.5-Math-Hermes-3",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-hermes-3",
    "name": "DeepSeek-V3-Math-Hermes-3",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-hermes-3",
    "name": "Mistral-7B-Math-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-hermes-3",
    "name": "Gemma-2-Math-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-hermes-3",
    "name": "Phi-3.5-Math-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-hermes-3",
    "name": "Granite-3.1-Math-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-hermes-3",
    "name": "Yi-1.5-Math-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-hermes-3",
    "name": "Falcon-2-Math-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-hermes-3",
    "name": "BGE-M3-Math-Hermes-3",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-Hermes-3 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-Hermes-3",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-Hermes-3",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-openchat-3-5",
    "name": "Llama-3.1-Math-OpenChat-3.5",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-openchat-3-5",
    "name": "Qwen-2.5-Math-OpenChat-3.5",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-openchat-3-5",
    "name": "DeepSeek-V3-Math-OpenChat-3.5",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-17",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-openchat-3-5",
    "name": "Mistral-7B-Math-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-18",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-openchat-3-5",
    "name": "Gemma-2-Math-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-19",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-openchat-3-5",
    "name": "Phi-3.5-Math-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 90
      }
    ],
    "releaseDate": "2024-11-20",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-openchat-3-5",
    "name": "Granite-3.1-Math-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 91
      }
    ],
    "releaseDate": "2024-11-21",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-openchat-3-5",
    "name": "Yi-1.5-Math-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 92
      }
    ],
    "releaseDate": "2024-11-22",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-openchat-3-5",
    "name": "Falcon-2-Math-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 93
      }
    ],
    "releaseDate": "2024-11-23",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-openchat-3-5",
    "name": "BGE-M3-Math-OpenChat-3.5",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-OpenChat-3.5 - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 94
      }
    ],
    "releaseDate": "2024-11-24",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-OpenChat-3.5",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-OpenChat-3.5",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-math-nexus-agent",
    "name": "Llama-3.1-Math-Nexus-Agent",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 70
      }
    ],
    "releaseDate": "2024-11-25",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-math-nexus-agent",
    "name": "Qwen-2.5-Math-Nexus-Agent",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 71
      }
    ],
    "releaseDate": "2024-11-26",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-math-nexus-agent",
    "name": "DeepSeek-V3-Math-Nexus-Agent",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 72
      }
    ],
    "releaseDate": "2024-11-27",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-math-nexus-agent",
    "name": "Mistral-7B-Math-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 73
      }
    ],
    "releaseDate": "2024-11-28",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-math-nexus-agent",
    "name": "Gemma-2-Math-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 74
      }
    ],
    "releaseDate": "2024-11-1",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-math-nexus-agent",
    "name": "Phi-3.5-Math-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 75
      }
    ],
    "releaseDate": "2024-11-2",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-math-nexus-agent",
    "name": "Granite-3.1-Math-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 76
      }
    ],
    "releaseDate": "2024-11-3",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-math-nexus-agent",
    "name": "Yi-1.5-Math-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 77
      }
    ],
    "releaseDate": "2024-11-4",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-math-nexus-agent",
    "name": "Falcon-2-Math-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 78
      }
    ],
    "releaseDate": "2024-11-5",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-math-nexus-agent",
    "name": "BGE-M3-Math-Nexus-Agent",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Math-Nexus-Agent - Fine-tuned and quantized Math domain model variant optimized for fast local host inference.",
    "type": "Math Model",
    "useCases": [
      "reasoning",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 24GB VRAM",
    "benchmarks": [
      {
        "name": "Math Domain Score",
        "score": 79
      }
    ],
    "releaseDate": "2024-11-6",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Math-Nexus-Agent",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Math-Nexus-Agent",
    "tags": [
      "math",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "llama-3-1-medical-gguf-q4-k-m",
    "name": "Llama-3.1-Medical-GGUF-Q4_K_M",
    "provider": "Meta AI / Community",
    "providerSlug": "meta",
    "description": "Llama-3.1-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 80
      }
    ],
    "releaseDate": "2024-11-7",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Llama-3.1-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Llama-3.1-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "qwen-2-5-medical-gguf-q4-k-m",
    "name": "Qwen-2.5-Medical-GGUF-Q4_K_M",
    "provider": "Alibaba / Community",
    "providerSlug": "meta",
    "description": "Qwen-2.5-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 81
      }
    ],
    "releaseDate": "2024-11-8",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Qwen-2.5-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Qwen-2.5-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "deepseek-v3-medical-gguf-q4-k-m",
    "name": "DeepSeek-V3-Medical-GGUF-Q4_K_M",
    "provider": "DeepSeek / Community",
    "providerSlug": "meta",
    "description": "DeepSeek-V3-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 82
      }
    ],
    "releaseDate": "2024-11-9",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=DeepSeek-V3-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=DeepSeek-V3-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "mistral-7b-medical-gguf-q4-k-m",
    "name": "Mistral-7B-Medical-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Mistral-7B-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 83
      }
    ],
    "releaseDate": "2024-11-10",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Mistral-7B-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Mistral-7B-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "gemma-2-medical-gguf-q4-k-m",
    "name": "Gemma-2-Medical-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Gemma-2-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 84
      }
    ],
    "releaseDate": "2024-11-11",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Gemma-2-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Gemma-2-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "phi-3-5-medical-gguf-q4-k-m",
    "name": "Phi-3.5-Medical-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Phi-3.5-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 85
      }
    ],
    "releaseDate": "2024-11-12",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Phi-3.5-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Phi-3.5-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "granite-3-1-medical-gguf-q4-k-m",
    "name": "Granite-3.1-Medical-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Granite-3.1-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 86
      }
    ],
    "releaseDate": "2024-11-13",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Granite-3.1-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Granite-3.1-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "yi-1-5-medical-gguf-q4-k-m",
    "name": "Yi-1.5-Medical-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Yi-1.5-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 87
      }
    ],
    "releaseDate": "2024-11-14",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Yi-1.5-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Yi-1.5-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "falcon-2-medical-gguf-q4-k-m",
    "name": "Falcon-2-Medical-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "Falcon-2-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 88
      }
    ],
    "releaseDate": "2024-11-15",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=Falcon-2-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=Falcon-2-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  },
  {
    "slug": "bge-m3-medical-gguf-q4-k-m",
    "name": "BGE-M3-Medical-GGUF-Q4_K_M",
    "provider": "Hugging Face Community",
    "providerSlug": "meta",
    "description": "BGE-M3-Medical-GGUF-Q4_K_M - Fine-tuned and quantized Medical domain model variant optimized for fast local host inference.",
    "type": "Specialized Domain LLM",
    "useCases": [
      "text-chat",
      "local"
    ],
    "modalities": [
      "text",
      "code"
    ],
    "availability": "local",
    "hasApi": false,
    "hasSelfHost": true,
    "license": "Apache-2.0 / Community Open Source",
    "pricing": "open-weights",
    "pricingDetails": "Free Open Source (Hugging Face / Ollama)",
    "contextWindow": "32k-128k",
    "hardwareRequirements": "Requires 4GB-8GB VRAM",
    "benchmarks": [
      {
        "name": "Medical Domain Score",
        "score": 89
      }
    ],
    "releaseDate": "2024-11-16",
    "lastUpdated": "2024-12-01",
    "lastVerified": "2025-02-01",
    "strengths": [
      "High accuracy",
      "Fast inference"
    ],
    "weaknesses": [
      "Closed source API"
    ],
    "docUrl": "https://huggingface.co/models?search=BGE-M3-Medical-GGUF-Q4_K_M",
    "modelCardUrl": "https://huggingface.co/models?search=BGE-M3-Medical-GGUF-Q4_K_M",
    "tags": [
      "medical",
      "ollama",
      "huggingface",
      "quantized",
      "local"
    ],
    "featured": false,
    "trending": false
  }
];
