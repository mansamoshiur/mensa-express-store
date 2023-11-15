"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
}: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  return (
    <div>
      PaginationControls
      <button
        className="bg-blue-500 text-white p-1"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/pagination/?page=${Number(page) - 1}&per_page=${per_page}`
          );
        }}
      >
        Prev Page
      </button>
      <div>{page}</div>
      <button
        className="bg-blue-500 text-white p-1"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/pagination/?page=${Number(page) + 1}&per_page=${per_page}`
          );
        }}
      >
        Next Page
      </button>
    </div>
  );
};

export default PaginationControls;
