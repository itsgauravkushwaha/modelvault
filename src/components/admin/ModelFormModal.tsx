"use client";

import { useEffect, useState } from "react";
import { useAdminStore } from "@/stores/use-admin-store";
import { AIModel, Availability, PricingType } from "@/types/model";
import { CloseIcon } from "../directory/icons";

export const ModelFormModal = () => {
  const isAddOpen = useAdminStore((s) => s.isAddModalOpen);
  const isEditOpen = useAdminStore((s) => s.isEditModalOpen);
  const selectedModel = useAdminStore((s) => s.selectedModel);
  const closeAddModal = useAdminStore((s) => s.closeAddModal);
  const closeEditModal = useAdminStore((s) => s.closeEditModal);
  const createModel = useAdminStore((s) => s.createModel);
  const updateModel = useAdminStore((s) => s.updateModel);

  const isEditing = isEditOpen && !!selectedModel;
  const isOpen = isAddOpen || isEditOpen;

  const [formData, setFormData] = useState<Partial<AIModel>>({
    slug: "",
    name: "",
    provider: "",
    providerSlug: "",
    description: "",
    type: "Large Language Model",
    useCases: ["text-chat"],
    modalities: ["text"],
    availability: "cloud",
    hasApi: true,
    hasSelfHost: false,
    license: "Proprietary",
    pricing: "paid",
    pricingDetails: "",
    contextWindow: "128k",
    hardwareRequirements: "",
    docUrl: "",
    tags: ["ai"],
    featured: false,
    trending: false,
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isEditing && selectedModel) {
      setFormData(selectedModel);
    } else {
      setFormData({
        slug: "",
        name: "",
        provider: "OpenAI",
        providerSlug: "openai",
        description: "",
        type: "Large Language Model",
        useCases: ["text-chat"],
        modalities: ["text"],
        availability: "cloud",
        hasApi: true,
        hasSelfHost: false,
        license: "Proprietary",
        pricing: "paid",
        pricingDetails: "$1.00 / 1M tokens",
        contextWindow: "128k",
        hardwareRequirements: "",
        docUrl: "https://huggingface.co",
        tags: ["ai"],
        featured: false,
        trending: false,
      });
    }
    setErrorMsg("");
  }, [isEditing, selectedModel, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const fullModel: AIModel = {
      slug: formData.slug || formData.name?.toLowerCase().replace(/[^a-z0-9]/g, "-") || "",
      name: formData.name || "",
      provider: formData.provider || "OpenAI",
      providerSlug: formData.providerSlug || formData.provider?.toLowerCase().replace(/[^a-z0-9]/g, "") || "openai",
      description: formData.description || "",
      type: formData.type || "Large Language Model",
      useCases: (formData.useCases as never) || ["text-chat"],
      modalities: (formData.modalities as never) || ["text"],
      availability: (formData.availability as Availability) || "cloud",
      hasApi: formData.hasApi ?? true,
      hasSelfHost: formData.hasSelfHost ?? false,
      license: formData.license || "Proprietary",
      pricing: (formData.pricing as PricingType) || "paid",
      pricingDetails: formData.pricingDetails || "Standard rate",
      contextWindow: formData.contextWindow || "128k",
      hardwareRequirements: formData.hardwareRequirements,
      benchmarks: formData.benchmarks || [{ name: "MMLU", score: 80.0 }],
      releaseDate: formData.releaseDate || new Date().toISOString().split("T")[0],
      lastUpdated: new Date().toISOString().split("T")[0],
      lastVerified: new Date().toISOString().split("T")[0],
      strengths: formData.strengths || ["Fast inference"],
      weaknesses: formData.weaknesses || ["Closed source"],
      docUrl: formData.docUrl || "https://huggingface.co",
      tags: formData.tags || ["ai"],
      featured: formData.featured ?? false,
      trending: formData.trending ?? false,
    };

    let result;
    if (isEditing && selectedModel) {
      result = await updateModel(selectedModel.slug, fullModel);
    } else {
      result = await createModel(fullModel);
    }

    setIsSubmitting(false);

    if (result.success) {
      if (isEditing) closeEditModal();
      else closeAddModal();
    } else {
      setErrorMsg(result.error || "Operation failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl my-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
          <h2 className="text-lg font-extrabold text-slate-900">
            {isEditing ? `Edit Model: ${selectedModel?.name}` : "Add New AI Model"}
          </h2>
          <button
            onClick={() => (isEditing ? closeEditModal() : closeAddModal())}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-bold text-red-700">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-semibold text-slate-700 max-h-[75vh] overflow-y-auto pr-1">
          {/* Name & Slug */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 font-bold text-slate-900">Model Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. GPT-4o, Llama 3.3 70B"
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-slate-900">Slug (URL Key) *</label>
              <input
                type="text"
                required
                disabled={isEditing}
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })}
                placeholder="e.g. gpt-4o, llama-3-3-70b"
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none disabled:bg-slate-100"
              />
            </div>
          </div>

          {/* Provider & Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 font-bold text-slate-900">Provider Name *</label>
              <input
                type="text"
                required
                value={formData.provider}
                onChange={(e) => setFormData({ ...formData, provider: e.target.value, providerSlug: e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "") })}
                placeholder="e.g. OpenAI, Meta AI, Google AI"
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-slate-900">Model Type *</label>
              <input
                type="text"
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                placeholder="e.g. Omnimodal LLM, Open Weights LLM, Vision Model"
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-bold text-slate-900">Description *</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Accurate 1-2 sentence overview of capability and footprint..."
              className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Availability & Pricing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 font-bold text-slate-900">Availability *</label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value as Availability })}
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              >
                <option value="cloud">Cloud API Only</option>
                <option value="local">Local / Self-Hosted Only</option>
                <option value="both">Both Cloud & Local</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-bold text-slate-900">Pricing Model *</label>
              <select
                value={formData.pricing}
                onChange={(e) => setFormData({ ...formData, pricing: e.target.value as PricingType })}
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              >
                <option value="free">Free</option>
                <option value="freemium">Freemium</option>
                <option value="paid">Paid API</option>
                <option value="open-weights">Open Weights (Free)</option>
              </select>
            </div>
          </div>

          {/* Context Window & Pricing Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 font-bold text-slate-900">Context Window *</label>
              <input
                type="text"
                required
                value={formData.contextWindow}
                onChange={(e) => setFormData({ ...formData, contextWindow: e.target.value })}
                placeholder="e.g. 128k, 1M, 32k"
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-slate-900">Pricing Rate Details *</label>
              <input
                type="text"
                required
                value={formData.pricingDetails}
                onChange={(e) => setFormData({ ...formData, pricingDetails: e.target.value })}
                placeholder="e.g. $2.50 / 1M input, $10.00 / 1M output"
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Hardware Requirements & License */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 font-bold text-slate-900">License *</label>
              <input
                type="text"
                required
                value={formData.license}
                onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                placeholder="e.g. MIT, Apache-2.0, Proprietary"
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-slate-900">Hardware Requirements (Local)</label>
              <input
                type="text"
                value={formData.hardwareRequirements || ""}
                onChange={(e) => setFormData({ ...formData, hardwareRequirements: e.target.value })}
                placeholder="e.g. Single RTX 4090 (24GB VRAM)"
                className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Doc URL */}
          <div>
            <label className="block mb-1 font-bold text-slate-900">Documentation URL *</label>
            <input
              type="url"
              required
              value={formData.docUrl}
              onChange={(e) => setFormData({ ...formData, docUrl: e.target.value })}
              placeholder="https://platform.openai.com/docs/models"
              className="w-full rounded-lg border border-slate-200 p-2 text-xs focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-6 py-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Featured on Homepage</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.trending}
                onChange={(e) => setFormData({ ...formData, trending: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Trending Model</span>
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end gap-2 border-t border-slate-200 pt-4 mt-2">
            <button
              type="button"
              onClick={() => (isEditing ? closeEditModal() : closeAddModal())}
              className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-xs font-bold shadow-sm transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : isEditing ? "Save Changes" : "Create Model"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
