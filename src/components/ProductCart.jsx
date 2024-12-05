import { Link } from "react-router";
import deleteIcon from "../assets/icons/delete.svg";
import { CartContext } from "../App";
import { useContext } from "react";

const ProductCart = ({ id, title, price, image, quantity }) => {
  const { setCart } = useContext(CartContext);

  const increaseQuantity = () => {
    setCart((prev) => {
      return prev.map((item) =>
        item.product_id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQuantity = () => {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.product_id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const deleteItem = () => {
    setCart((prev) => {
      return prev.filter((item) => item.product_id !== id);
    });
  };

  return (
    <div className="flex gap-3 h-[120px] sm:h-[150px]">
      <Link
        to={`/product/${id}`}
        className="bg-white border border-color/20 p-2 flex items-center justify-center w-[200px] h-full cursor-pointer"
      >
        <img
          src={image}
          alt={`${title}-img`}
          className="object-contain h-[80px] sm:h-[120px]"
        />
      </Link>

      <div className="flex flex-col gap-1 w-full overflow-hidden">
        <h1 className="text-sm overflow-hidden sm:text-base lg:text-lg">
          {title}
        </h1>

        <p className="font-semibold sm:text-lg">${price * quantity}</p>

        <div className="flex items-center justify-between w-full mt-auto">
          <div className="flex gap-2 items-center sm:gap-3">
            <button
              onClick={decreaseQuantity}
              className="px-2 py-[1px] bg-color text-background sm:text-lg"
            >
              -
            </button>
            <p className="text-sm sm:text-base">{quantity}</p>
            <button
              onClick={increaseQuantity}
              className="px-2 py-[1px] bg-color text-background sm:text-lg"
            >
              +
            </button>
          </div>

          <img
            src={deleteIcon}
            alt="delete-icon"
            onClick={deleteItem}
            className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
