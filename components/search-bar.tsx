const Searchbar = () => {
  return (
    <div className="hidden md:flex ml-auto items-center justify-center">
      <form>
        <input
          className="h-full w-[24rem] text-base text-black outline-none px-4 rounded-full py-3 shadow-xl border border-slate-300"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Searchbar;
