"use client";

import { FilterState, FilterTab } from "@/types/job";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  filters: FilterState;
  onFilterChange: (
    type: "industry" | "region" | "employment",
    value: string
  ) => void;
  onClearFilters: () => void;
  onApplyFilters: () => void;
  industries: string[];
  regions: string[];
  employmentTypes: string[];
}

export function FilterModal({
  isOpen,
  onClose,
  activeTab,
  onTabChange,
  filters,
  onFilterChange,
  onClearFilters,
  onApplyFilters,
  industries,
  regions,
  employmentTypes,
}: FilterModalProps) {
  if (!isOpen) return null;

  const renderFilterOptions = () => {
    let options: string[] = [];
    let selectedValues: string[] = [];
    let filterType: "industry" | "region" | "employment" = "industry";

    switch (activeTab) {
      case "industry":
        options = industries;
        selectedValues = filters.selectedIndustries;
        filterType = "industry";
        break;
      case "region":
        options = regions;
        selectedValues = filters.selectedRegions;
        filterType = "region";
        break;
      case "employment":
        options = employmentTypes;
        selectedValues = filters.selectedEmploymentTypes;
        filterType = "employment";
        break;
    }

    return (
      <div className="flex flex-wrap gap-2 ">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onFilterChange(filterType, option)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
              selectedValues.includes(option)
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Filter Jobs</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Tabbed Interface */}
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => onTabChange("industry")}
              className={`flex-1 py-3 px-4 text-center font-medium ${
                activeTab === "industry"
                  ? "border-b-2 border-gray-900 text-gray-900 bg-gray-50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Industry
            </button>
            <button
              onClick={() => onTabChange("region")}
              className={`flex-1 py-3 px-4 text-center font-medium ${
                activeTab === "region"
                  ? "border-b-2 border-gray-900 text-gray-900 bg-gray-50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Region
            </button>
            <button
              onClick={() => onTabChange("employment")}
              className={`flex-1 py-3 px-4 text-center font-medium ${
                activeTab === "employment"
                  ? "border-b-2 border-gray-900 text-gray-900 bg-gray-50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Employment Type
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">{renderFilterOptions()}</div>

        {/* Modal Footer */}
        <div className="flex justify-between p-6 border-t border-gray-200">
          <button
            onClick={onClearFilters}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            CANCEL
          </button>
          <button
            onClick={onApplyFilters}
            className="px-8 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500"
          >
            APPLY FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
