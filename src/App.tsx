import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

import Home from "./pages/Home/page";
import Cart from "./pages/Cart/page";
import Dashboard from "./pages/Dashboard/page";
import Services from "./pages/Services/page";
import Contact from "./pages/Contact/page";
import Login from "./pages/Login/page";
import Signup from "./pages/Signup/page";

import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className="min-h-screen flex flex-col">

          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>

          {/* FOOTER */}
          <Footer />

        </div>

      </BrowserRouter>
    </CartProvider>
  );
}