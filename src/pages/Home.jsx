import { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ProductCard from "../components/ProductCard";
import FilterList from "../components/FilterList";
import MobileFilter from "../components/MobileFilter";
import SearchInput from "../components/SearchInput";
import SortButton from "../components/SortButtons";
import FilterMenu from "../components/FilterMenu";

export const FilterContext = createContext();

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState({
    searched: false,
    allProducts: [],
    searchedResult: [],
  });

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      let apiUrl = "https://fakestoreapi.com/products";

      if (category.length > 0) {
        const data = await Promise.all(
          category.map(async (category) => {
            const response = await fetch(`${apiUrl}/category/${category}`);
            return response.json();
          })
        );
        const mergedArray = data.flat();
        setProducts(mergedArray);
        setSearchedProducts((prevState) => ({
          ...prevState,
          searched: false,
        }));
      } else {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setProducts(data);
        setSearchedProducts((prevState) => ({
          ...prevState,
          allProducts: data,
        }));
        console.log(searchedProducts.allProducts);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const sortProducts = (order) => {
    const productsToSort = searchedProducts.searched
      ? [...searchedProducts.searchedResult]
      : [...products];

    const sortedProducts = productsToSort.sort((a, b) => {
      return order === "low" ? a.price - b.price : b.price - a.price;
    });

    if (searchedProducts.searched) {
      setSearchedProducts((prevState) => ({
        ...prevState,
        searchedResult: sortedProducts,
      }));
    } else {
      setProducts(sortedProducts);
    }
  };

  const searchForProducts = (input) => {
    if (input === "") return;

    console.log("used");
    const result = [...searchedProducts.allProducts].filter((product) => {
      return product.title.toLowerCase().includes(input.toLowerCase());
    });

    setSearchedProducts((prevState) => ({
      ...prevState,
      searched: true,
      searchedResult: result,
    }));
  };

  useEffect(() => {
    fetchData();
    console.log("was used");
  }, [category]);

  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFilter]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <FilterContext.Provider
      value={{
        showFilter,
        handleFilter,
        sortProducts,
        category,
        setCategory,
        searchForProducts,
      }}
    >
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-inter text-2xl uppercase sm:text-3xl lg:text-4xl">
            Products
          </h1>

          <SearchInput />

          {isDesktop && <SortButton />}
        </div>

        <div className="relative flex flex-col gap-8 lg:flex-row">
          {!isDesktop && <FilterMenu />}
          {isDesktop ? <FilterList /> : <MobileFilter />}

          <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 xl:gap-6">
            {searchedProducts.searched ? (
              searchedProducts.searchedResult.length !== 0 ? (
                searchedProducts.searchedResult.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    price={product.price}
                    title={product.title}
                  />
                ))
              ) : (
                <div>{`Didn't find anything, sorry >_<`}</div>
              )
            ) : (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </FilterContext.Provider>
  );
};

export default Home;
