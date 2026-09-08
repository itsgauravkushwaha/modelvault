import type { Task } from "@/lib/recommendations/types";

export const TASK_OPTIONS: { value: Task; label: string; description: string; example: string }[] = [
  { value: "documents", label: "Answer from my documents", description: "Choose the generation model for a document Q&A app.", example: "An assistant that answers questions using a company knowledge base." },
  { value: "coding", label: "Write or understand code", description: "Generate functions, explain code and propose fixes.", example: "A developer assistant for Python and TypeScript." },
  { value: "extraction", label: "Extract structured information", description: "Turn supplied text into fields your app can validate.", example: "Extract names, dates and amounts from invoice text." },
  { value: "chat", label: "Build a text assistant", description: "Conversation, drafting and summarization.", example: "An assistant that summarizes messages and drafts replies." },
];

export const FINDER_COPY = {
  title: "Find the right AI model for your project.",
  description: "Choose your task, budget and setup. Get up to three curated options with reasons, trade-offs and a way to start.",
  scope: "This first collection covers text applications in English. Image, video, speech and language-specific recommendations are not included yet.",
};
