"use client";

import React from "react";
import { ShopMyProduct } from "../../types/shopTypes";

const ShopPagination = ({
  currentPage,
  itemsPerPage,
  filteredProducts,
  handlePageChange,
  totalPages,
}: {
  currentPage: number;
  itemsPerPage: number;
  filteredProducts: ShopMyProduct[];
  handlePageChange: (value: number) => void;
  totalPages: number;
}) => {
  // funcție pentru generarea listelor scurte de pagini
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const delta = 1; // câte pagini să arăt în stânga/dreapta

    // mereu prima pagină
    pages.push(1);

    // puncte înainte dacă suntem departe de pagina 1
    if (currentPage - delta > 2) {
      pages.push("…");
    }

    // pagini din jurul paginii curente
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }

    // puncte după dacă suntem departe de ultima pagină
    if (currentPage + delta < totalPages - 1) {
      pages.push("…");
    }

    // mereu ultima pagină
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="border border-[var(--shopBorderPrimary)] overflow-hidden mt-[30px] px-2.5 flex flex-col sm:flex-row justify-between">
      <p className="h-10 leading-10">
        {(currentPage - 1) * itemsPerPage + 1} -
        {(currentPage - 1) * itemsPerPage + itemsPerPage <
        filteredProducts.length
          ? (currentPage - 1) * itemsPerPage + itemsPerPage
          : filteredProducts.length}{" "}
        product(s) of {filteredProducts.length}
      </p>
      <ul className="flex items-center">
        <li>
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 cursor-pointer text-[var(--shopBGHeader)] py-1 text-sm leading-10 disabled:opacity-50 disabled:cursor-default"
          >
            &lt; Previous
          </button>
        </li>

        {visiblePages.map((page, index) =>
          page === "…" ? (
            <li key={`dots-${index}`} className="px-3 py-1">
              …
            </li>
          ) : (
            <li key={page}>
              <button
                disabled={currentPage === page}
                onClick={() => handlePageChange(page as number)}
                className={`px-3 py-1 text-[var(--shopBGHeader)] ${
                  currentPage === page ? "opacity-50" : "cursor-pointer"
                }`}
              >
                {page}
              </button>
            </li>
          )
        )}

        <li>
          <button
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-2 py-1 cursor-pointer text-[var(--shopBGHeader)] disabled:opacity-50 disabled:cursor-default"
          >
            Next &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ShopPagination;
