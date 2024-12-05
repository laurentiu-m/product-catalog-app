import FilterButton from "./FilterButton";
import SortButton from "./SortButtons";

const MobileFilter = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <FilterButton />

      <SortButton />
    </div>
  );
};

export default MobileFilter;
