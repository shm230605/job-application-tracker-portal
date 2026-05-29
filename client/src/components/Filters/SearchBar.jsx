const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search company or role..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none text-white"
      />
    </div>
  );
};

export default SearchBar;