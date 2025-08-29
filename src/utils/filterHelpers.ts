import type { FilterState } from "@/types/job"

export function getFilterTitle(filters: FilterState): string {
  const totalFilters =
    filters.selectedIndustries.length + filters.selectedRegions.length + filters.selectedEmploymentTypes.length

  if (totalFilters === 0) {
    return "FILTER"
  }

  if (totalFilters === 1) {
    if (filters.selectedIndustries.length > 0) {
      return `Industry: ${filters.selectedIndustries[0]}`
    }
    if (filters.selectedRegions.length > 0) {
      return `Region: ${filters.selectedRegions[0]}`
    }
    if (filters.selectedEmploymentTypes.length > 0) {
      return `Type: ${filters.selectedEmploymentTypes[0]}`
    }
  }

  return `FILTER (${totalFilters})`
}

export function hasActiveFilters(filters: FilterState): boolean {
  return (
    filters.selectedIndustries.length > 0 ||
    filters.selectedRegions.length > 0 ||
    filters.selectedEmploymentTypes.length > 0
  )
}
