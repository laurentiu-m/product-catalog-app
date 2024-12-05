import { useContext } from "react";
import { CartContext } from "../App";
import ProductCart from "../components/ProductCart";
import { Link } from "react-router";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const deleteAll = () => {
    setCart([]);
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <h1 className="font-inter text-2xl uppercase">Shopping Cart</h1>

      {cart.length > 0 ? (
        <>
          <div className="flex flex-col w-full gap-4 border border-color/20 p-2 sm:p-4 sm:w-[600px] lg:w-[800px] xl:w-[900px]">
            {cart.map((product) => (
              <ProductCart
                key={product.product_id}
                id={product.product_id}
                title={product.title}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
              />
            ))}
          </div>

          <button
            onClick={deleteAll}
            className="p-2 bg-color text-background hover:bg-accent"
          >
            Delete All
          </button>
        </>
      ) : (
        <div className="flex flex-col gap-5 text-center items-center m-auto">
          <p className="text-lg sm:text-xl">Your cart is empty right now</p>

          <Link
            to={"/"}
            className="bg-color text-background p-2 w-[120px] cursor-pointer hover:bg-accent"
          >
            Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
