"use client"

import { useMemo } from "react"

export function usePagination<T>(items: T[], itemsPerPage: number, currentPage: number) {
  return useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage)

    return {
      currentItems,
      totalPages,
      startIndex,
      endIndex: startIndex + currentItems.length,
    }
  }, [items, itemsPerPage, currentPage])
}
