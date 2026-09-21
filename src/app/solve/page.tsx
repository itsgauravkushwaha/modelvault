import { generateMetadata as baseGenerateMetadata } from "@/utils/seo/generate-page-metadata";
import { SolveView } from "@/views/solve";

export const metadata = baseGenerateMetadata({
  title: "AI Real-World Problem Solver & Playbook Generator | ModelVault",
  description:
    "Answer 3 quick questions about your real-world task, hardware, and privacy needs to receive an exact AI model recommendation, terminal setup commands, tested prompts, and cost estimates.",
  url: "/solve",
});

export default function SolvePage() {
  return <SolveView />;
}
