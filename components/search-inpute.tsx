"use client";
import { Search } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import queryString from "query-string";

export const SearchInpute = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { searchTerm: "" },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");
    const url = queryString.stringifyUrl(
      { url: "/", query: data.serchTerm },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
    reset();
  };
  return (
    <div className="relative">
      <form>
        <Search className="h-4 w-4 absolute top-4 left-4 text-slate-300" />
        <input
          {...register("searchTerm")}
          type="text"
          className="h-full w-[24rem] text-base text-black outline-none pl-9 rounded-full py-3 shadow-xl border border-slate-300"
          placeholder="Search..."
        />
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-black text-white rounded-full py-4 px-6"
        >
          Search
        </button>
      </form>
    </div>
  );
};
