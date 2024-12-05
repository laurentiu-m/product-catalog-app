import { useContext } from "react";
import filterIcon from "../assets/icons/filter.svg";
import { FilterContext } from "../pages/Home";

const FilterButton = () => {
  const { handleFilter } = useContext(FilterContext);

  return (
    <div
      className="flex items-center justify-between p-2 w-[120px] border border-accent/30 cursor-pointer"
      onClick={handleFilter}
    >
      <p className="font-medium">Filters</p>
      <img src={filterIcon} alt="filter-icon" />
    </div>
  );
};

export default FilterButton;
