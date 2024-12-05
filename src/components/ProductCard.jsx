import { Link } from "react-router";

const ProductCard = ({ product_id, image, price, title }) => {
  return (
    <div className="flex flex-col gap-1 h-full group">
      <Link
        to={`/product/${product_id}`}
        className="h-48 relative flex items-center justify-center p-4 border border-color/50 bg-white cursor-pointer group-hover:border-2 min-[425px]:h-56 sm:h-60 xl:h-80"
      >
        <img
          src={image}
          alt={`${title}-img`}
          className="object-contain w-32 h-32 sm:w-36 sm:h-36 xl:w-52 xl:h-52 tra group-hover:scale-105 transition-all"
        />

        <div className="absolute opacity-0 bottom-4 py-2 px-4 bg-color shadow-md shadow-accent/50 text-background group-hover:opacity-100 transition-all">
          Add to cart
        </div>
      </Link>

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
