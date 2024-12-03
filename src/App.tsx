import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins text-color">
      <Navbar />

      <main className="flex flex-grow m-5 sm:m-10 lg:w-[75%] lg:mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
