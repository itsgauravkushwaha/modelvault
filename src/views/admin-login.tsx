"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminStore } from "@/stores/use-admin-store";
import { SparklesIcon } from "@/components/directory/icons";

export const AdminLoginView = () => {
  const [passcode, setPasscode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const login = useAdminStore((s) => s.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const success = await login(passcode);
    setIsSubmitting(false);

    if (success) {
      router.push("/admin");
    } else {
      setErrorMsg("Invalid passcode. Default passcode is admin123");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 font-sans text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
            <SparklesIcon className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">ModelVault Admin</h1>
          <p className="text-xs text-slate-400 font-medium">
            Enter admin secret key to manage AI models, add new releases, or edit listings.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-xs font-bold text-red-400 text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-semibold">
          <div>
            <label className="block mb-1.5 text-slate-300">Admin Passcode</label>
            <input
              type="password"
              required
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode (default: admin123)"
              className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 text-xs font-bold transition-all shadow-md disabled:opacity-50 mt-2"
          >
            {isSubmitting ? "Authenticating..." : "Access Admin Console"}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-800 text-center text-[0.7rem] text-slate-500 font-medium">
          Default admin passcode is <code className="text-blue-400 bg-slate-950 px-1.5 py-0.5 rounded">admin123</code>
        </div>
      </div>
    </div>
  );
};
