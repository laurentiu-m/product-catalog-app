import { useContext, useState } from "react";
import arrowDownIcon from "../assets/icons/arrow-down.svg";
import { FilterContext } from "../pages/Home";

const SortButton = () => {
  const { sortProducts } = useContext(FilterContext);
  const [showSort, setShowSort] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowSort(!showSort)}
        className="flex items-center justify-between p-2 w-[120px] border border-accent/30 cursor-pointer hover:ring-1 hover:ring-accent/30 transition-all"
      >
        <p className="font-medium">Sort</p>
        <img src={arrowDownIcon} alt="filter-icon" />
      </div>

      <div
        className={`${
          showSort ? "opacity-100" : "opacity-0"
        } absolute top-12 w-full z-10 flex flex-col gap-2 bg-background border border-color/20 transition-opacity ease-in-out duration-150`}
      >
        <p
          onClick={() => sortProducts("high")}
          className="cursor-pointer p-2 hover:bg-accent/20"
        >
          High
        </p>
        <p
          onClick={() => sortProducts("low")}
          className="cursor-pointer p-2 hover:bg-accent/20"
        >
          Low
        </p>
      </div>
    </div>
  );
};

export default SortButton;
