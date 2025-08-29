"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import { FilterState, ViewMode, FilterTab } from "@/types/job";
import { employmentTypes, industries, jobsData, regions } from "@/data/jobs";
import { getFilterTitle, hasActiveFilters } from "@/utils/filterHelpers";
import { JobList } from "@/components/Service-Component/JobList";

import { usePagination } from "@/hooks/usePagination";
import { ViewToggle } from "@/components/Service-Component/ViewToggle";
import { Pagination } from "@/components/Service-Component/Pagination";
import { JobSearchForm } from "@/components/Service-Component/SearchForm";

import craneImg from "@/assets/Crane.png";
import ServiceSection from "@/components/Home/ServiceSection";
import { useJobFilters } from "@/hooks/useJobFiltters";

export default function JobSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterTab>("industry");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    selectedIndustries: [],
    selectedRegions: [],
    selectedEmploymentTypes: [],
  });

  const jobsPerPage = 9;

  // ✅ This will now work if useJobFilters is implemented correctly
  const filteredJobs = useJobFilters(jobsData, searchTerm, location, filters);
  const { currentItems: currentJobs, totalPages } = usePagination(
    filteredJobs,
    jobsPerPage,
    currentPage
  );

  const filterPanelRef = useRef<HTMLDivElement>(null);

  // Handle filter selection
  const handleFilterChange = (
    type: "industry" | "region" | "employment",
    value: string
  ) => {
    setFilters((prev) => {
      if (type === "industry") {
        return {
          ...prev,
          selectedIndustries: prev.selectedIndustries.includes(value)
            ? prev.selectedIndustries.filter((item) => item !== value)
            : [...prev.selectedIndustries, value],
        };
      } else if (type === "region") {
        return {
          ...prev,
          selectedRegions: prev.selectedRegions.includes(value)
            ? prev.selectedRegions.filter((item) => item !== value)
            : [...prev.selectedRegions, value],
        };
      } else {
        return {
          ...prev,
          selectedEmploymentTypes: prev.selectedEmploymentTypes.includes(value)
            ? prev.selectedEmploymentTypes.filter((item) => item !== value)
            : [...prev.selectedEmploymentTypes, value],
        };
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      selectedIndustries: [],
      selectedRegions: [],
      selectedEmploymentTypes: [],
    });
    setActiveTab("industry");
  };

  // Apply filters and close panel
  const applyFilters = () => {
    setShowFilters(false);
    setCurrentPage(1); // Reset pagination
    setActiveTab("industry");
  };

  // Open filter panel
  const openFilters = () => {
    setShowFilters(true);
    setActiveTab("industry");
  };

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterPanelRef.current && !filterPanelRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-white py-12 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 bg-[#f8f7f7] p-10 rounded-xl shadow-md">
          {/* Text & Form */}
          <div className="flex-1 max-w-3xl relative"> {/* ✅ Added 'relative' for absolute positioning */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Vacancies for every talent
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              HTC Techniek provides challenging projects across various industries for skilled technical professionals ready to make an impact. Explore new roles that match your expertise and ambitions.
            </p>

            <JobSearchForm
              searchTerm={searchTerm}
              location={location}
              onSearchChange={setSearchTerm}
              onLocationChange={setLocation}
              onFilterClick={openFilters}
              filterTitle={getFilterTitle(filters)}
              hasActiveFilters={hasActiveFilters(filters)}
            />

            {/* Inline Filter Panel - appears below search form */}
            {showFilters && (
              <div
                ref={filterPanelRef}
                className="absolute z-50 top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-5"
              >
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 mb-4">
                  <button
                    onClick={() => setActiveTab("industry")}
                    className={`flex-1 py-2 px-4 text-sm font-medium text-center ${
                      activeTab === "industry"
                        ? "border-b-2 border-gray-900 text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Industry
                  </button>
                  <button
                    onClick={() => setActiveTab("region")}
                    className={`flex-1 py-2 px-4 text-sm font-medium text-center ${
                      activeTab === "region"
                        ? "border-b-2 border-gray-900 text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Region
                  </button>
                  <button
                    onClick={() => setActiveTab("employment")}
                    className={`flex-1 py-2 px-4 text-sm font-medium text-center ${
                      activeTab === "employment"
                        ? "border-b-2 border-gray-900 text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Employment Type
                  </button>
                </div>

                {/* Filter Options */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {activeTab === "industry" &&
                    industries.map((ind) => (
                      <button
                        key={ind}
                        onClick={() => handleFilterChange("industry", ind)}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                          filters.selectedIndustries.includes(ind)
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}

                  {activeTab === "region" &&
                    regions.map((reg) => (
                      <button
                        key={reg}
                        onClick={() => handleFilterChange("region", reg)}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                          filters.selectedRegions.includes(reg)
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {reg}
                      </button>
                    ))}

                  {activeTab === "employment" &&
                    employmentTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => handleFilterChange("employment", type)}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                          filters.selectedEmploymentTypes.includes(type)
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    CLEAR
                  </button>
                  <button
                    onClick={applyFilters}
                    className="px-8 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500"
                  >
                    APPLY FILTER
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Decorative Image */}
          <div className="relative w-full max-w-sm h-[250px] lg:h-[300px]">
            <Image
              src={craneImg}
              alt="Construction crane"
              fill
              className="object-contain opacity-80"
              priority
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{filteredJobs.length} jobs found</p>
          <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>

        <JobList jobs={currentJobs} viewMode={viewMode} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <ServiceSection />
    </div>
  );
}