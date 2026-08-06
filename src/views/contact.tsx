"use client";

import { useState } from "react";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { MailIcon, CheckCircleIcon } from "@/components/directory/icons";

export const ContactView = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "model-update", message: "" });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `[Subject: ${formData.subject}] ${formData.message}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to deliver message. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="shell max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 mb-3">
              <MailIcon className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact ModelVault
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2">
              Submit model updates, report inaccurate benchmark data, or inquire about directory listings.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-2">Message Sent</h2>
                <p className="text-xs text-slate-600 font-medium max-w-sm mx-auto">
                  Thank you for contacting ModelVault. Our indexing team will review your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-5 py-2.5 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
                <div>
                  <label htmlFor="name" className="block font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-bold text-slate-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none transition-all font-semibold"
                  >
                    <option value="model-update">Submit / Update AI Model Specs</option>
                    <option value="benchmark-fix">Report Inaccurate Benchmark / Pricing</option>
                    <option value="api-integration">API Access & Integration Inquiry</option>
                    <option value="general">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-bold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide model details, documentation links, or benchmark corrections..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-bold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-extrabold py-3 text-xs transition-all shadow-md hover:shadow-blue-500/20"
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
