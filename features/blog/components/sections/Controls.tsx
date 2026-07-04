"use client";

import { useBlog } from "@/features/blog/hooks/useBlog";
import { Search } from "lucide-react";

export const ControlsSection = () => {
  const { activeCategory, setActiveCategory, categories } = useBlog();
  return (
    <div className="sticky top-[70px] z-40 bg-background-light dark:bg-background-dark py-4 border-b border-transparent dark:border-[#283039] mb-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96 group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input
            className="block w-full p-3 pl-10 text-sm text-slate-900 dark:text-white bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary transition-all"
            placeholder="Search articles..."
            type="text"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-transparent hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
