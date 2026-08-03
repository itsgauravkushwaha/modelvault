"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDirectoryStore } from "@/stores/use-directory-store";

export function useDirectorySearch() {
  const pathname = usePathname();
  const router = useRouter();
  const searchQuery = useDirectoryStore((s) => s.searchQuery);
  const setSearchQuery = useDirectoryStore((s) => s.setSearchQuery);

  // Sync URL search parameter if present on /models on client mount
  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/models") {
      const params = new URLSearchParams(window.location.search);
      const urlQuery = params.get("search");
      if (urlQuery && urlQuery !== searchQuery) {
        setSearchQuery(urlQuery, true);
      }
    }
  }, [pathname, setSearchQuery, searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // On all pages, typing updates the searchQuery in store for instant input responsiveness.
    // NO automatic navigation occurs while typing.
    setSearchQuery(val);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    setSearchQuery(searchQuery, true);
    if (pathname !== "/models") {
      const url = query ? `/models?search=${encodeURIComponent(query)}` : "/models";
      router.push(url);
    }
  };

  const clearSearch = () => {
    setSearchQuery("", true);
    if (typeof window !== "undefined" && pathname === "/models") {
      const params = new URLSearchParams(window.location.search);
      if (params.has("search")) {
        router.push("/models");
      }
    }
  };

  return {
    searchQuery,
    handleSearchChange,
    handleSearchSubmit,
    clearSearch,
    setSearchQuery,
  };
}
