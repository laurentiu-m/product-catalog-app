import { useContext } from "react";
import { FilterContext } from "../pages/Home";
import FilterList from "./FilterList";
import closeIcon from "../assets/icons/close.svg";

const FilterMenu = () => {
  const { showFilter, handleFilter } = useContext(FilterContext);

  return (
    <div
      className={`${
        showFilter ? "h-screen opacity-100" : "h-0 opacity-0"
      } absolute overflow-hidden z-20 w-full top-0 left-0 bg-background border-t border-t-color/20  transition-opacity duration-100`}
    >
      <div className="relative flex flex-col gap-5">
        <div className="absolute right-0 top-2">
          <img
            src={closeIcon}
            alt="close-icon"
            onClick={handleFilter}
            className="w-8"
          />
        </div>

        <FilterList />
      </div>
    </div>
  );
};

export default FilterMenu;
