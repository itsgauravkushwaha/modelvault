import Link from "next/link";
import { CategoryDef } from "@/types/model";
import { ArrowUpRightIcon, CodeIcon, CpuIcon, SparklesIcon } from "./icons";

export const CategoryCard: React.FC<{ category: CategoryDef }> = ({ category }) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
            {category.slug === "coding" ? (
              <CodeIcon className="w-5 h-5" />
            ) : category.slug === "local" ? (
              <CpuIcon className="w-5 h-5" />
            ) : (
              <SparklesIcon className="w-5 h-5" />
            )}
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] font-extrabold text-slate-600">
            {category.modelCount} Models
          </span>
        </div>

        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>{category.name}</span>
          <ArrowUpRightIcon className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
        </h3>

        <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
          {category.description}
        </p>
      </div>
    </Link>
  );
};
