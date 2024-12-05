import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { createContext, lazy, useState, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));
const Product = lazy(() => import("./pages/Product"));

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  const cartLength = cart.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, cartLength }}>
      <div className="min-h-screen flex flex-col font-poppins text-color">
        <Navbar />

        <main className="flex flex-grow m-5 sm:m-10 lg:w-[80%] lg:mx-auto">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default App;
