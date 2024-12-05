import { Link } from "react-router";
import { CartContext } from "../App";
import { useContext } from "react";

const ProductCard = ({ product_id, image, price, title }) => {
  const { setCart } = useContext(CartContext);

  const addProductToCart = () => {
    setCart((prev) => {
      const existingProduct = prev.find(
        (item) => item.product_id === product_id
      );

      if (existingProduct) {
        return prev.map((item) =>
          item.product_id === product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product_id, title, price, image, quantity: 1 }];
      }
    });
  };

  return (
    <div className="flex flex-col gap-1 h-full group">
      <div
        to={`/product/${product_id}`}
        className="h-48 relative flex items-center justify-center p-4 border border-color/50 bg-white cursor-pointer group-hover:border-2 min-[425px]:h-56 sm:h-60 xl:h-80"
      >
        <Link to={`/product/${product_id}`}>
          <img
            src={image}
            alt={`${title}-img`}
            className="object-contain w-32 h-32 sm:w-36 sm:h-36 xl:w-52 xl:h-52 tra group-hover:scale-105 transition-all"
          />
        </Link>

        <div
          className="hidden absolute opacity-0 bottom-4 py-2 px-4 bg-color shadow-md shadow-accent/50 text-background group-hover:opacity-100 transition-all lg:block"
          onClick={addProductToCart}
        >
          Add to cart
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-sm text-nowrap text-ellipsis overflow-hidden sm:text-base">
          {title}
        </p>
        <p className="text-sm font-medium sm:text-base">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
