import React, { useState } from "react";
import "./styles/narbar.css";
import "../assets/images/bank.jpg";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    // TogglerIcon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="BankersRealm" className="nav__brand">
        Bankers Realm
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="products" className="nav__link">
            Products
          </a>
        </li>
        <li className="nav__item">
          <a href="portfolio" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="services" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="request" className="nav__link">
            Request
          </a>
        </li>
        <li className="nav__item">
          <a href="contactus" className="nav__link">
            ContactUs
          </a>
        </li>
      </ul>
      <div>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
