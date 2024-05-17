"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";

interface paginationProps {
  totalData: number;
  dataPerPage: number;
  currentPage: number;
}

const Pagination: FC<paginationProps> = ({
  totalData,
  dataPerPage,
  currentPage,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  let pageNumbers: any[] = [];
  const totalPages: number = Math.ceil(totalData / dataPerPage);

  for (let i: number = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumbers.push(i);
  }

  const navigationHandler = (page: any) => {
    let currentQuery = qs.parse(params.toString());

    const updatedQuery: any = {
      ...currentQuery,
      page,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };

  const navigationFirstHandler = () => {
    let currentQuery = qs.parse(params.toString());

    const updatedQuery: any = {
      ...currentQuery,
    };

    updatedQuery.page = 1;

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };

  const navigationLastHandler = () => {
    let currentQuery = qs.parse(params.toString());

    const updatedQuery: any = {
      ...currentQuery,
    };

    updatedQuery.page = pageNumbers.length;

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };

  return (
    <div className="w-full flex justify-center gap-4">
      {currentPage - 1 >= 1 && (
        <>
          <button type="button" onClick={navigationFirstHandler}>
            {"<<"}
          </button>
        </>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          type="button"
          className={cn(
            page === currentPage ? "text-red-800" : "text-slate-800"
          )}
          onClick={() => navigationHandler(page)}
        >
          {page}
        </button>
      ))}

      {currentPage + 1 <= totalPages && (
        <>
          <button type="button" onClick={navigationLastHandler}>
            {">>"}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
