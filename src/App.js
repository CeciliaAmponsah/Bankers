import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Products from "./pages/products";
import Services from "./pages/services";
import Request from "./pages/request";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Home /> */}
          <Route path="/about" element={<About />} />
          {/* <About /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
