import { useContext, useRef } from "react";
import searchIcon from "../assets/icons/search.svg";
import { FilterContext } from "../pages/Home";

const SearchInput = () => {
  const { searchForProducts } = useContext(FilterContext);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchForProducts(inputRef.current.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full flex items-center sm:w-[400px] xl:w-[600px]"
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for products..."
        className="w-full py-3 pl-4 pr-12 bg-background border border-color/20 placeholder:text-color/50 outline-none focus:ring-1 focus:ring-color xl:py-4"
      />
      <button type="submit" className="absolute right-3">
        <img src={searchIcon} alt="search-icon" className="w-7 h-7" />
      </button>
    </form>
  );
};

export default SearchInput;
