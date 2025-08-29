"use client";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

interface SearchFormProps {
  searchTerm: string;
  location: string;
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onFilterClick: () => void;
  hasActiveFilters: boolean;
  filterTitle: string;
}

export function JobSearchForm({
  searchTerm,
  location,
  onSearchChange,
  onLocationChange,
  onFilterClick,
  hasActiveFilters,
  filterTitle,
}: SearchFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row items-stretch sm:items-end w-full"
      >
        {/* Find Input */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="search-term"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Find
          </label>
          <input
            id="search-term"
            type="text"
            placeholder="Job title, keywords, or company"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 border-0 border-r border-[#E4E2E1] py-2 text-sm rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
            aria-label="Search job title, keywords, or company"
          />
        </div>

        {/* Where Input */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="location"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Where
          </label>
          <input
            id="location"
            type="text"
            placeholder="City or postal code"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-3 py-2 text-sm border-0 border-gray-300 rounded-b-md sm:rounded-r-md sm:rounded-bl-none focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
            aria-label="City or postal code"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:ml-2 mt-2 sm:mt-0 w-full sm:w-auto">
          {/* Filter Button */}
          <button
            type="button"
            onClick={onFilterClick}
            className={`flex items-center justify-center sm:justify-start gap-2 px-4 py-2 border rounded-md font-medium text-sm transition-all duration-200 ${
              hasActiveFilters
                ? "border-yellow-400 bg-yellow-50 text-yellow-800"
                : "border-gray-300 bg-[#F2F2F2] text-gray-700 hover:bg-gray-50"
            }`}
            aria-pressed={hasActiveFilters}
            aria-label="Toggle filters"
          >
            <AdjustmentsHorizontalIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{filterTitle || "FILTER"}</span>
            <span className="sm:hidden">
              {hasActiveFilters ? "On" : "Filters"}
            </span>
          </button>

          {/* Search Button */}
          <button
            type="submit"
            className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md px-6 py-2 text-sm transition-all duration-200 shadow-sm hover:shadow-md active:shadow-sm"
            aria-label="Search for job vacancies"
          >
            SEARCH VACANCY
          </button>
        </div>
      </form>
    </div>
  );
}
