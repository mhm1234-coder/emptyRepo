import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

import Home from "./pages/Home/page";
import Services from "./pages/Services/page";
import Cart from "./pages/Cart/page";
import Dashboard from "./pages/Dashboard/page";
import Contact from "./pages/Contact/page";
import Login from "./pages/Login/page";
import Signup from "./pages/Signup/page";

function App() {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;