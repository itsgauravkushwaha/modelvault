---
tags: [frontend, product, recommendation, stable]
updated: 2026-09-08
---

# Requirements-first Model Finder

## Product scope

The homepage and `/solve` now open one working model-selection surface. The old
`/tools/model-finder` view redirects to `/solve`. The initial audience is developers
building English-language text applications: coding assistance, document Q&A,
structured extraction and chat. Image, video, speech, language-specific evaluation
and automatic free-text interpretation are deliberately not claimed.

The first collection has four cloud IDs and four local Ollama packages. Existing
Supabase rows and public catalog URLs are retained. Imported models cannot enter
the finder without explicit admission to `src/data/curated-models.ts` or the reviewed
cloud snapshot. No production database mutation or mass deletion is part of this change.

## Components and data

| File | Responsibility |
| --- | --- |
| `src/views/requirements-finder.tsx` | Server view, lightweight navigation, metadata and methodology |
| `src/components/finder/Finder.tsx` | Task → requirements → shortlist, editing, reset, keyboard focus |
| `src/components/finder/Constraints.tsx` | Conditional cloud/hardware controls and workload inputs |
| `src/components/finder/Controls.tsx` | Native radio and number controls with existing design tokens |
| `src/components/finder/RecommendationCard.tsx` | Reasons, limitations, sources, cost formula and exact setup target |
| `src/data/curated-cloud.json` | Reviewed OpenRouter IDs and timestamped provider facts |
| `src/data/curated-models.ts` | Local package admission, editorial ordering and memory policy |
| `src/lib/recommendations/engine.ts` | Zod validation, exclusion rules, transparent ordering |
| `src/lib/recommendations/analytics.ts` | Consent-aware, coarse funnel events |

The finder does not load the 11,000-row directory or call a paid LLM. Requirements
are processed in the browser. Header store subscriptions were avoided on finder
routes so the bulk dataset is not needed there. Existing fonts and blue/neutral
semantic tokens are reused. Root font sizing now respects the user's browser
setting at every breakpoint instead of shrinking tablet text with viewport units.
No animation engine files or dependency versions were changed.

## Selection contract

1. Validate active requirements; irrelevant hidden inputs cannot block switching modes.
2. Consider only the selected deployment and models curated for the task.
3. Exclude stale source evidence, insufficient context/output allowances, unavailable
   pricing, missing structured-output support for cloud extraction, excessive API
   cost and insufficient local memory.
4. Order eligible candidates by task-specific editorial priority, or by estimated
   API cost / local memory when the user chooses that priority.
5. Return at most three. Never pad the result or silently relax a constraint.

Editorial ordering is a starting hypothesis, not an independently measured quality
ranking. No accuracy percentages, invented benchmarks, compliance guarantees or
universal “best model” claims are produced.

## Cost and hardware assumptions

Cloud cost is requests × (input tokens × input rate + output tokens × output rate)
÷ 1,000,000. Prices are OpenRouter USD rates, not direct-provider quotes. Reasoning
must be included in the user's output allowance; taxes, credit fees, tools, retries,
extra reasoning and other services are excluded. It is not a spending cap.
Input is limited to 200,000 tokens to stay below the currently published pricing
override thresholds. Refresh rejects a newly introduced tier within that range.

Local memory allowances are conservative editorial estimates for the linked Q4
packages, one concurrent request and <= 4,096 total tokens. They are **not measured**
VRAM benchmarks. The finder requires model/runtime allowance plus 4 GB in system
or unified RAM. Dedicated GPU mode additionally requires the full runtime allowance
in VRAM; no CPU offloading is assumed. Unified memory is not double-counted. CPU
mode explicitly warns about unmeasured speed. Runtime/GPU compatibility still needs
confirmation on the target device. No hosted API charge does not mean zero ownership cost.

Document Q&A results select the generation model, not the parsing, embeddings,
retrieval and citation stack. Local extraction requires schema validation in the app.

## Maintaining source evidence

Source checks on 2026-09-08 used the OpenRouter catalog and exact Ollama library tags:

- `https://openrouter.ai/api/v1/models`
- `https://ollama.com/library/qwen3:4b`
- `https://ollama.com/library/qwen3:8b`
- `https://ollama.com/library/qwen2.5-coder:7b`
- `https://ollama.com/library/qwen2.5-coder:14b`

Run `node scripts/refresh-curated-catalog.mjs` from the repository root to refresh
**only admitted cloud IDs**, review the diff, then commit and deploy it. The script
does not alter editorial task rankings or publish automatically. It fails without
overwriting the snapshot when an admitted ID disappears, expires, has unknown
rates/limits, loses text support or needs tier-aware pricing.

Cloud facts expire from recommendations after 14 days; local checks after 90 days,
evaluated at form submission. Refresh cloud evidence at least weekly before shipping
new snapshots; re-check local package sizes, tags, instructions and memory assumptions
manually. An elapsed date must never be renewed without a real check. The existing
bulk cron does **not** refresh or promote these curated entries.

## Validation and measurement

Run `node scripts/test-recommendations.mjs`, `npm run lint` (equivalent ESLint script
to `yarn lint`), and `npm run build`. The tests use the existing TypeScript compiler
and Node test runner; no test dependency is added. Scenarios cover strict budget,
privacy/deployment isolation, VRAM/RAM distinctions, unified memory, long prompts,
output limits, source freshness, malformed input, pricing math and no-match behavior.

GA events, only when existing analytics consent is granted:
`finder_started`, `finder_results`, `finder_no_match`, `finder_setup_opened`,
`finder_command_copied`. Payloads contain task, deployment, model ID or result count;
never raw prompts, budget or hardware values. These events show funnel progression,
not proof that an installation worked. Confirm successful use through user interviews
before claiming recommendation accuracy or demand.

## Release boundaries

This change prepares a reviewable product slice. It does not merge, change the live
domain, rewrite the source catalog, execute model inference, collect visitor API keys,
or establish that ModelVault is the best model finder. Next validation is a target-user
trial and task-level evaluation. Audit the inherited broad Supabase write policies
described in the handover before allowing production data to be treated as trusted.

Related: [[design-system]] · [[components/common]] · [[decisions-log]]
