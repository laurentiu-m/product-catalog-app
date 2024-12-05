import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  console.log(product);

  return (
    <div className="w-full flex flex-col gap-5 mb-10 lg:w-[700px] lg:m-auto">
      <div className="flex items-center justify-center mx-auto w-full h-[250px] bg-white border border-color/20 lg:h-[400px]">
        <img
          src={product.image}
          alt={`${product.title}-img`}
          className="w-[200px] h-[200px] object-contain lg:w-[350px] lg:h-[350px]"
        />
      </div>

      <div className="flex flex-col gap-2 text-left">
        <h1 className="font-medium text-lg leading-tight w-[600px] lg:text-xl">
          {product.title}
        </h1>
        <h2 className="font-semibold text-xl lg:text-2xl">${product.price}</h2>
        <p className="text-sm lg:text-base">{product.description}</p>
      </div>

      <button className="p-2 bg-color text-background w-[150px] mx-auto hover:bg-accent transition-all">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
