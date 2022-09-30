import React from "react";
import logo1 from "../assets/images/logo-1.png";
import logo2 from "../assets/images/logo-2.jpg";
import logo3 from "../assets/images/log-3.jpeg";
import logo4 from "../assets/images/logo-4.jpg";
import logo5 from "../assets/images/logo-5.png";
import logo6 from "../assets/images/logo-6.png";
import logo7 from "../assets/images/logo-7.png";
import "../component/styles/products.css";

function Products() {
  return (
    <div className="logos-images">
      <div className="container1">
        <img src={logo1} width="20%" height={20} />
        <img src={logo2} width="30%" height={40} />
        <img src={logo3} width="30%" height={40} />
      </div>
      <div className="container2">
        <img src={logo4} width="30%" height={40} />
        <img src={logo5} width="30%" height={40} />
        <img src={logo6} width="20%" height={40} />
      </div>

      <img src={logo7} width="40%" height={40} />
    </div>
  );
}

export default Products;
