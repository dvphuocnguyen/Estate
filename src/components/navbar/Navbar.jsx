import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handlerClick =() => {
    setOpen((prev) => !prev)
  }
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Nguyen__Estate</span>
        </a>
        <a href="/Home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>

      <div className="right">
        <a href="/agents">Agents</a>
        <a href="" className="register">
          Sign up
        </a>
        <div className="menuIcon" onClick={handlerClick}>
          <img src="/menu.png" alt="" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/Home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/login"> Sign in</a>
          <a href="" className="register">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
