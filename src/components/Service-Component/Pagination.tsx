"use client";

import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const goPrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-2">
        {/* Prev button */}
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40"
        >
          <FaLessThan />
        </button>

        {/* Page numbers */}
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded ${
                currentPage === page
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          )
        )}

        {totalPages > 5 && (
          <>
            <span className="px-2">…</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className={`w-8 h-8 rounded ${
                currentPage === totalPages
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next button */}
        <button
          onClick={goNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40"
        >
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
}
