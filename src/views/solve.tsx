"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { SparklesIcon, CheckIcon, CopyIcon, ArrowUpRightIcon } from "@/components/directory/icons";
import { useDirectoryStore } from "@/stores/use-directory-store";

interface SolutionPlaybook {
  modelName: string;
  provider: string;
  slug: string;
  type: string;
  vram: string;
  estimatedCost: string;
  whyThisModel: string;
  terminalCommand: string;
  promptTemplate: string;
  pythonSnippet: string;
  alternativeModel: string;
}

const PLAYBOOKS: Record<string, SolutionPlaybook> = {
  "legal-private": {
    modelName: "DeepSeek-R1 (Q4_K_M)",
    provider: "DeepSeek",
    slug: "jamescallander-deepseek-r1-distill-qwen-14b-w8a8-g128-rk3588-rkllm",
    type: "Local Open-Weights (Ollama / GGUF)",
    vram: "14GB–24GB VRAM (Mac M1/M2/M3 or RTX 4080)",
    estimatedCost: "$0.00 / month (100% Free Local Execution)",
    whyThisModel:
      "DeepSeek-R1 provides chain-of-thought reasoning comparable to o1 while executing completely offline on your hardware, ensuring zero HIPAA or client NDA data leakage.",
    terminalCommand: "ollama run deepseek-r1:14b",
    promptTemplate: `You are an expert legal compliance auditor. Analyze the following contract clause for hidden liabilities, unilateral termination rights, and indemnification caps:

[PASTE CONTRACT CLAUSE HERE]

Provide:
1. Executive Risk Level (Low/Medium/High)
2. 3 Specific Red-Flag Clauses
3. Recommended Counter-Draft Language`,
    pythonSnippet: `import requests

prompt = "Analyze contract clause for indemnification risks..."
response = requests.post("http://localhost:11434/api/generate", json={
    "model": "deepseek-r1:14b",
    "prompt": prompt,
    "stream": False
})
print(response.json()["response"])`,
    alternativeModel: "Llama-3.3-70B-Instruct (Cloud API)",
  },
  "legal-cloud": {
    modelName: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    slug: "claude-3-5-sonnet",
    type: "Cloud API (200k Context)",
    vram: "Cloud API (0 MB VRAM Required)",
    estimatedCost: "~$15.00 / month (Based on 500 contract reviews)",
    whyThisModel:
      "Claude 3.5 Sonnet offers industry-leading 200,000-token context length and unmatched document comprehension, perfect for parsing 100+ page legal agreements in seconds.",
    terminalCommand: "npm install @anthropic-ai/sdk",
    promptTemplate: `System: You are a senior legal counsel specializing in corporate governance.
Task: Summarize the key commercial terms, liability caps, and renewal dates in this agreement.

Document Text:
[PASTE DOCUMENT HERE]`,
    pythonSnippet: `import anthropic

client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=4000,
    messages=[{"role": "user", "content": "Analyze agreement liability caps..."}]
)
print(message.content[0].text)`,
    alternativeModel: "GPT-4o (OpenAI)",
  },
  "healthcare-private": {
    modelName: "Llama 3.1 8B Instruct",
    provider: "Meta AI",
    slug: "nousresearch-meta-llama-3-1-8b-instruct",
    type: "Local Open-Weights (Offline)",
    vram: "6GB–8GB VRAM (Standard Laptop / Mac M1)",
    estimatedCost: "$0.00 / month (100% Free Off-Grid)",
    whyThisModel:
      "Llama 3.1 8B runs effortlessly on consumer laptops without internet connection, enabling rural medical staff to summarize patient notes without violating privacy laws.",
    terminalCommand: "ollama run llama3.1:8b",
    promptTemplate: `You are a clinical documentation assistant. Summarize the following patient interaction into a standard SOAP note (Subjective, Objective, Assessment, Plan):

Doctor-Patient Transcript:
[PASTE TRANSCRIPT HERE]`,
    pythonSnippet: `import requests

res = requests.post("http://localhost:11434/api/chat", json={
    "model": "llama3.1:8b",
    "messages": [{"role": "user", "content": "Summarize transcript into SOAP note..."}]
})
print(res.json()["message"]["content"])`,
    alternativeModel: "Qwen 2.5 7B Instruct",
  },
  "education-budget": {
    modelName: "Qwen 2.5 3B Instruct",
    provider: "Qwen / Alibaba",
    slug: "qwen-qwen2-5-3b-instruct-awq",
    type: "Ultra-Lightweight Open Weights",
    vram: "2.5GB–4GB VRAM (Raspberry Pi 4 / Low-Cost Smartphone)",
    estimatedCost: "$0.00 / month (Zero Infrastructure Overhead)",
    whyThisModel:
      "Qwen 2.5 3B delivers astounding math and coding tutoring performance while consuming less than 3GB RAM, bringing interactive education to low-cost hardware globally.",
    terminalCommand: "ollama run qwen2.5:3b",
    promptTemplate: `You are a patient middle-school math teacher. Explain the Pythagorean Theorem using a real-world sports example, step-by-step, without using confusing jargon.`,
    pythonSnippet: `import requests

res = requests.post("http://localhost:11434/api/generate", json={
    "model": "qwen2.5:3b",
    "prompt": "Explain fractions using pizza slices for a 10-year-old.",
    "stream": False
})
print(res.json()["response"])`,
    alternativeModel: "Phi-3-Mini 3.8B (Microsoft)",
  },
  "support-chatbot": {
    modelName: "DeepSeek-V3",
    provider: "DeepSeek",
    slug: "deepseek-v3-math-gguf-q8-0",
    type: "High-Throughput Cloud API",
    vram: "Cloud API (Serverless)",
    estimatedCost: "~$2.50 / month (Ultra-Low $0.27/1M token API rate)",
    whyThisModel:
      "DeepSeek-V3 rivals GPT-4o quality at 1/10th the token cost, making high-volume customer support automation financially sustainable for small businesses.",
    terminalCommand: "curl https://api.deepseek.com/v1/chat/completions",
    promptTemplate: `You are an automated support agent for ModelVault. Answer customer queries strictly using the knowledge base context below. If unsure, respond politely and offer human escalation.

Knowledge Base Context:
[PASTE FAQ/DOCS HERE]`,
    pythonSnippet: `from openai import OpenAI

client = OpenAI(api_key="YOUR_DEEPSEEK_KEY", base_url="https://api.deepseek.com")
response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[{"role": "user", "content": "How do I reset my account password?"}]
)
print(response.choices[0].message.content)`,
    alternativeModel: "Gemini 2.0 Flash (Google)",
  },
  "code-audit": {
    modelName: "Qwen 2.5 Coder 30B",
    provider: "Qwen / Alibaba",
    slug: "stelterlab-qwen3-coder-30b-a3b-instruct-awq",
    type: "Specialized Coding Engine",
    vram: "20GB–24GB VRAM (Mac Studio / RTX 3090/4090)",
    estimatedCost: "$0.00 / month (Self-Hosted Developer Engine)",
    whyThisModel:
      "Qwen 2.5 Coder 30B matches Sonnet 3.5 coding benchmarks across Python, TypeScript, and Rust, detecting edge-case security bugs without transmitting codebase source to cloud servers.",
    terminalCommand: "ollama run qwen2.5-coder:32b",
    promptTemplate: `Act as a principal software security architect. Perform a security and performance code review on the following function:

[PASTE CODE HERE]

Identify:
1. Potential SQL Injection / XSS / Memory Leaks
2. Time Complexity O(N) Analysis
3. Optimized Refactored Code`,
    pythonSnippet: `import requests

res = requests.post("http://localhost:11434/api/generate", json={
    "model": "qwen2.5-coder:32b",
    "prompt": "Audit TypeScript function for memory leaks...",
    "stream": False
})
print(res.json()["response"])`,
    alternativeModel: "Codestral 22B (Mistral AI)",
  },
};

export const SolveView = () => {
  const [domain, setDomain] = useState<string>("legal");
  const [privacy, setPrivacy] = useState<string>("private");
  const [hardware, setHardware] = useState<string>("laptop");
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  // Match key
  let key = `${domain}-${privacy}`;
  if (domain === "education") key = "education-budget";
  if (domain === "support") key = "support-chatbot";
  if (domain === "coding") key = "code-audit";
  if (!PLAYBOOKS[key]) key = "legal-private";

  const playbook = PLAYBOOKS[key];

  // Robust Model Route Link Resolution
  const targetModel = allModels.find(
    (m) =>
      m.slug === playbook.slug ||
      m.slug.includes(playbook.slug) ||
      m.name.toLowerCase().includes(playbook.modelName.toLowerCase().split(" ")[0])
  );

  const modelHref = targetModel
    ? `/models/${targetModel.slug}`
    : `/models?search=${encodeURIComponent(playbook.provider)}`;

  const copyText = (text: string, isPrompt: boolean) => {
    navigator.clipboard.writeText(text);
    if (isPrompt) {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } else {
      setCopiedCmd(true);
      setTimeout(() => setCopiedCmd(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-10">
        <div className="shell max-w-5xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-blue-600 mb-3">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Real-World Solution Wizard</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              AI Problem-Solving Playbook Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
              Answer 3 quick questions about your real-world task, privacy needs, and hardware constraints. ModelVault outputs an exact model match, 1-click terminal setup commands, and tested prompt templates.
            </p>
          </div>

          {/* Interactive Wizard Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Question 1: Domain / Task */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-3">
                1. Select Real-World Task
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: "legal", label: "📄 Legal Contract & Document Review" },
                  { id: "healthcare", label: "🏥 Healthcare & Clinical Notes (SOAP)" },
                  { id: "education", label: "🎓 Universal Education & Tutoring" },
                  { id: "support", label: "💬 Customer Support & Sales RAG Bot" },
                  { id: "coding", label: "💻 Code Security Audit & Refactoring" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDomain(item.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      domain === item.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Privacy / Deployment */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-3">
                2. Privacy & Security Rule
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: "private", label: "🔒 100% Offline / Private (Self-Hosted)" },
                  { id: "cloud", label: "🌐 Cloud API (Maximum Speed & Scale)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPrivacy(item.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      privacy === item.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Hardware Budget */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-3">
                3. Target Hardware / Budget
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: "laptop", label: "💻 Standard Laptop / Mac M1-M3 (8-16GB RAM)" },
                  { id: "lowend", label: "📱 Low-Cost Device / Raspberry Pi (4GB RAM)" },
                  { id: "gpu", label: "🖥️ GPU Workstation / Server (24GB+ VRAM)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setHardware(item.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      hardware === item.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Solution Playbook Card */}
          <div className="rounded-3xl border border-blue-200/80 bg-white shadow-xl overflow-hidden mb-12">
            {/* Playbook Banner */}
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-blue-400 block mb-1">
                    Recommended Real-World Solution Playbook
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {playbook.modelName}
                  </h2>
                  <p className="text-xs font-semibold text-slate-400 mt-1">
                    Developed by {playbook.provider} • {playbook.type}
                  </p>
                </div>
                <Link
                  href={modelHref}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md shrink-0 self-start sm:self-auto"
                >
                  <span>View Model Specs</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-8">
              {/* Why This Fits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    Hardware / VRAM Match
                  </span>
                  <span className="text-xs font-extrabold text-slate-900 block">{playbook.vram}</span>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    Estimated Monthly Cost
                  </span>
                  <span className="text-xs font-extrabold text-emerald-600 block">{playbook.estimatedCost}</span>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    Alternative Model Swap
                  </span>
                  <span className="text-xs font-extrabold text-blue-600 block">{playbook.alternativeModel}</span>
                </div>
              </div>

              {/* Architectural Rationale */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-2 flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-blue-600" />
                  <span>Why This Model Solves Your Problem</span>
                </h3>
                <p className="text-xs font-medium text-slate-700 leading-relaxed">
                  {playbook.whyThisModel}
                </p>
              </div>

              {/* 1-Click Terminal Command */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Step 1: Run Terminal Setup Command
                  </span>
                  <button
                    onClick={() => copyText(playbook.terminalCommand, false)}
                    className="inline-flex items-center gap-1 text-[0.7rem] font-bold text-blue-600 hover:text-blue-800"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedCmd ? "Copied! ✓" : "Copy Command"}</span>
                  </button>
                </div>
                <pre className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-xs font-mono text-emerald-400 overflow-x-auto">
                  {playbook.terminalCommand}
                </pre>
              </div>

              {/* Tested Prompt Template */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Step 2: Tested Real-World Prompt Template
                  </span>
                  <button
                    onClick={() => copyText(playbook.promptTemplate, true)}
                    className="inline-flex items-center gap-1 text-[0.7rem] font-bold text-blue-600 hover:text-blue-800"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedPrompt ? "Copied! ✓" : "Copy Prompt"}</span>
                  </button>
                </div>
                <pre className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs font-mono text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {playbook.promptTemplate}
                </pre>
              </div>

              {/* Python Integration Snippet */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                  Step 3: Python Integration Snippet
                </span>
                <pre className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-xs font-mono text-blue-300 overflow-x-auto">
                  {playbook.pythonSnippet}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
