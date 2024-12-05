import { Link } from "react-router";
import cartIcon from "../assets/icons/shopping-cart.svg";
import { CartContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const { cartLength } = useContext(CartContext);

  return (
    <header className="h-20 flex items-center justify-between mx-5 border-b border-b-color/20 sm:h-24 sm:mx-10 lg:w-[80%] lg:m-auto">
      <Link to={"/"} className="font-inter text-xl sm:text-2xl lg:text-3xl">
        SHOP.HERE
      </Link>

      <Link to={"/cart"} className="relative">
        <img
          src={cartIcon}
          alt="shopping-cart-icon"
          className="w-8 h-8 lg:w-9 lg:h-9"
        />
        {cartLength > 0 && (
          <div className=" absolute -top-2 -right-1 rounded-full bg-color text-background p-[3px] text-center lg:-right-2 lg:p-1">
            <p className="text-xs font-medium">{cartLength}</p>
          </div>
        )}
      </Link>
    </header>
  );
};

export default Navbar;
