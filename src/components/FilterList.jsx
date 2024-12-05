import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../pages/Home";
import Loading from "./Loading";

const FilterList = () => {
  const { category, setCategory } = useContext(FilterContext);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="p-10">
        <Loading />
      </div>
    );
  }

  if (!categories) {
    return;
  }

  const categoriesDifferent = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return true;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return true;
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const checkedCategories = formData.getAll("categories");

    if (categoriesDifferent(category, checkedCategories)) {
      setCategory(checkedCategories);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-lg">Categories</h1>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <div key={category} className="flex gap-2 items-center">
              <input
                id={category}
                type="checkbox"
                name="categories"
                value={category}
                className="w-4 h-4 border-2 border-color rounded-none checked:bg-color outline-none focus:ring-0"
              />
              <label htmlFor={category} className="capitalize">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-t-color/20" />

      <input
        type="submit"
        className="w-[200px] m-auto bg-color text-background mt-4 p-2 cursor-pointer hover:bg-accent transition-all"
        value="Apply"
      />
    </form>
  );
};

export default FilterList;
