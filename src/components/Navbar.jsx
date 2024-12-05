import { Link } from "react-router";
import cartIcon from "../assets/icons/shopping-cart.svg";

const Navbar = () => {
  return (
    <header className="h-20 flex items-center justify-between mx-5 border-b border-b-color/20 sm:h-24 sm:mx-10 lg:w-[80%] lg:m-auto">
      <Link to={"/"} className="font-inter text-xl sm:text-2xl lg:text-3xl">
        SHOP.HERE
      </Link>

      <Link to={"/cart"}>
        <img
          src={cartIcon}
          alt="shopping-cart-icon"
          className="w-7 h-7 lg:w-8 lg:h-8"
        />
      </Link>
    </header>
  );
};

export default Navbar;
