"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/vacancies?query=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 rounded-xl border border-zinc-200 bg-white p-2 shadow-sm sm:grid-cols-[1fr_1fr_auto]"
      role="search"
      aria-label="Find vacancies"
    >
      {/* Find */}
      <div className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 sm:border-r sm:border-zinc-200 sm:px-4">
        <div className="hidden text-[11px] font-semibold uppercase tracking-wider text-zinc-500 sm:block">
          Find
        </div>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Job title, keywords, or company"
          className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-amber-400/40 placeholder:text-zinc-400 focus:ring-2 sm:border-none sm:px-0 sm:py-0 sm:ring-0 sm:focus:ring-0"
          aria-label="Search by job title, keywords, or company"
        />
      </div>

      {/* Where */}
      <div className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 sm:border-r sm:border-zinc-200 sm:px-4">
        <div className="hidden text-[11px] font-semibold uppercase tracking-wider text-zinc-500 sm:block">
          Where
        </div>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City or postal code"
          className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-amber-400/40 placeholder:text-zinc-400 focus:ring-2 sm:border-none sm:px-0 sm:py-0 sm:ring-0 sm:focus:ring-0"
          aria-label="City or postal code"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-500 sm:px-5"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}