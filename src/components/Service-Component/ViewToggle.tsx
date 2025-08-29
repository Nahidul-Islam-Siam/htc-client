"use client"

import { Squares2X2Icon, ListBulletIcon } from "@heroicons/react/24/outline"
import type { ViewMode } from "@/types/job"

interface ViewToggleProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex bg-gray-200 rounded-lg p-1">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`
            flex items-center gap-1 px-4 py-2 rounded
            transition-colors duration-200
            ${viewMode === "grid" ? "bg-white shadow font-semibold text-gray-900" : "text-gray-600 hover:bg-gray-300"}
          `}
          type="button"
        >
          <Squares2X2Icon className="w-5 h-5" />
          <span className="text-sm select-none">Grid</span>
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`
            flex items-center gap-1 px-4 py-2 rounded
            transition-colors duration-200
            ${viewMode === "list" ? "bg-white shadow font-semibold text-gray-900" : "text-gray-600 hover:bg-gray-300"}
          `}
          type="button"
        >
          <ListBulletIcon className="w-5 h-5" />
          <span className="text-sm select-none">List</span>
        </button>
      </div>
    </div>
  )
}
