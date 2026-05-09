import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

import Home from "./pages/Home/page";
import Login from "./pages/Login/page";
import Signup from "./pages/Signup/page";
import Dashboard from "./pages/Dashboard/page";
import Services from "./pages/Services/page";
import Contact from "./pages/Contact/page";
export type Product = {
  name: string;
  price: number;
  category: string;
  image: string;
};
export default function App() {

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} cart={cart} />

      <Routes>
        <Route path="/" element={<Home search={search} cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}