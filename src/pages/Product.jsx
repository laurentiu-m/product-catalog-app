import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { CartContext } from "../App";

const Product = () => {
  const { id } = useParams();
  const { setCart } = useContext(CartContext);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const addProductToCart = () => {
    setCart((prev) => {
      const existingProduct = prev.find(
        (item) => item.product_id === product.id
      );

      if (existingProduct) {
        return prev.map((item) =>
          item.product_id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            product_id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  return (
    <div className="w-full flex flex-col gap-5 mb-10 lg:w-[700px] lg:m-auto">
      <div className="flex items-center justify-center mx-auto w-full h-[350px] bg-white border border-color/20 lg:h-[400px]">
        <img
          src={product.image}
          alt={`${product.title}-img`}
          className="w-[150px] h-[150px] object-contain sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px]"
        />
      </div>

      <div className="flex flex-col gap-2 text-left">
        <h1 className="font-medium text-lg leading-tight lg:text-xl">
          {product.title}
        </h1>
        <h2 className="font-semibold text-xl lg:text-2xl">${product.price}</h2>
        <p className="text-sm lg:text-base">{product.description}</p>
      </div>

      <button
        onClick={addProductToCart}
        className="p-2 bg-color text-background w-[150px] mx-auto hover:bg-accent transition-all"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
