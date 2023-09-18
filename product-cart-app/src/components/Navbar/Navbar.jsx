import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Navbar = ({ setShowHome }) => {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            onClick={() => setShowHome(true)}
            className="navHome"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </a>
          <a
            onClick={() => setShowHome(false)}
            className="navCart"
            id="lws-cart"
          >
            <FaShoppingBag className="text-xl" />
            <span id="lws-totalCart">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
  //   <!-- Navbar ends -->;
};

export default Navbar;
