import { Link } from "react-router";
import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import twitterIcon from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="h-40 flex flex-col items-center justify-center gap-4 bg-accent/10 md:h-44">
      <Link to={"/"} className="font-inter text-lg sm:text-2xl">
        SHOP.HERE
      </Link>

      <div className="flex gap-4">
        <img
          src={instagramIcon}
          alt="instagram-icon"
          className="w-5 h-5 cursor-pointer"
        />
        <img
          src={facebookIcon}
          alt="facebook-icon"
          className="w-5 h-5 cursor-pointer"
        />
        <img
          src={twitterIcon}
          alt="twitter-icon"
          className="w-5 h-5 cursor-pointer"
        />
      </div>

      <h1 className="text-xs text-color/70 sm:text-sm">
        SHOP.HERE &copy; All Rights Reserved
      </h1>
    </footer>
  );
};

export default Footer;
