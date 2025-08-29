// hooks/useJobFilters.ts
"use client";

import { useMemo } from "react";
import type { Job, FilterState } from "@/types/job";

export function useJobFilters(
  jobs: Job[],
  searchTerm: string,
  location: string,
  filters: FilterState
) {
  return useMemo(() => {
    // Normalize inputs with fallback to empty string
    const normalizedSearch = (searchTerm ?? "").trim().toLowerCase();
    const normalizedLocation = (location ?? "").trim().toLowerCase();

    return jobs.filter((job) => {
      // ✅ Safeguard: ensure strings exist before calling toLowerCase/includes
      const jobTitle = (job.title ?? "").toString().toLowerCase();
      const jobCompany = (job.company ?? "").toString().toLowerCase();
      const jobLocation = (job.location ?? "").toString().toLowerCase();

      // ✅ Search: match title or company
      const matchesSearch =
        normalizedSearch === "" ||
        jobTitle.includes(normalizedSearch) ||
        jobCompany.includes(normalizedSearch);

      // ✅ Location: match job.location
      const matchesLocation =
        normalizedLocation === "" ||
        jobLocation.includes(normalizedLocation);

      // ✅ Industry
      const matchesIndustry =
        filters.selectedIndustries.length === 0 ||
        filters.selectedIndustries.includes(job.industry);

      // ✅ Region
      const matchesRegion =
        filters.selectedRegions.length === 0 ||
        filters.selectedRegions.includes(job.region);

      // ✅ Employment Type
      const matchesEmployment =
        filters.selectedEmploymentTypes.length === 0 ||
        filters.selectedEmploymentTypes.includes(job.type);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesIndustry &&
        matchesRegion &&
        matchesEmployment
      );
    });
  }, [
    searchTerm,
    location,
    filters.selectedIndustries,
    filters.selectedRegions,
    filters.selectedEmploymentTypes,
    jobs, // include at the end
  ]);
}