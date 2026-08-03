// src/views/privacy.tsx
"use client";

import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";

export const PrivacyView = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
    <Header />
    <main className="flex-1 py-12">
      <div className="shell max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-600 mb-6">
          Last updated: <time dateTime="2026-07-31">July 31, 2026</time>
        </p>
        <section className="prose prose-sm max-w-none text-slate-700">
          <p>ModelVault respects your privacy. We do not collect personal data beyond what is necessary for essential functionality such as authentication, analytics, and user preferences. All data is stored securely and processed in accordance with applicable data protection laws.</p>
          <p>For detailed information on data collection, usage, and your rights, please refer to the full legal text below.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);
