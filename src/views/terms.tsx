"use client";

import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";

export const TermsView = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="shell max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-xs text-slate-500 font-medium mb-8">
            Last updated: <time dateTime="2026-07-31">July 31, 2026</time>
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6 text-xs text-slate-700 font-medium leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-extrabold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ModelVault, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-extrabold text-slate-900">2. Use of Information</h2>
              <p>
                ModelVault provides information, metrics, pricing calculators, and specifications regarding AI models for educational and informational purposes. While we strive for accuracy, model specifications and provider pricing may change over time.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-extrabold text-slate-900">3. Intellectual Property</h2>
              <p>
                All brand names, trademarks, logos, and model designations referenced on ModelVault belong to their respective owners (e.g. OpenAI, Anthropic, Google, Meta, Mistral AI). ModelVault is an independent reference directory.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-extrabold text-slate-900">4. Limitation of Liability</h2>
              <p>
                ModelVault is provided &quot;as is&quot; without warranties of any kind. We are not liable for any decisions, financial losses, or operational issues resulting from reliance on the data or calculators provided.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
