import getProducts from "@/actions/get-products";
import PaginationControls from "./_components/pagination-controls";

export const revalidate = 0;

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const products = await getProducts({});
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = products.slice(start, end);
  return (
    <div className="flex gap-2 items-center flex-col">
      {entries.map((entry, index) => (
        <p key={index}>{entry.name}</p>
      ))}
      <PaginationControls
        hasNextPage={end < products.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
};

export default page;
