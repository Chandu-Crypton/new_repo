import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo"></div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
          <Link className="menuBtn" to="/">HOME</Link>
          <Link className="menuBtn" to="/about">ABOUT US</Link>
          <Link className="menuBtn" to="/qualities">SERVICES</Link>
          <Link className="menuBtn" to="/team">TEAM</Link>
          <Link className="menuBtn" to="/reservation">RESERVATION</Link>
          </div>
          <Link className="menuBtn" to="/menu">OUR MENU</Link>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
