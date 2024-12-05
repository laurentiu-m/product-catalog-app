import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins text-color">
      <Navbar />

      <main className="flex flex-grow m-5 sm:m-10 lg:w-[80%] lg:mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
