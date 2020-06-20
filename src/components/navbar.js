import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const hamburger = () => {
    const nav = document.getElementsByClassName("navbar");
    if (!show) {
      nav[0].style.display = "block";
      setShow(true);
    } else {
      nav[0].style.display = "none";
      setShow(false);
    }
  };

  return (
    // <div className="nav-contain">
    <nav>
      <div>
        <h1 className="header-name">
          LEE FOSTER <span className="voice">Voice Actor</span>
        </h1>
      </div>
      <div>
        <ul className="navbar">
          <li className="link1">
            <a className="active-page" href="#">
              HOME
            </a>
          </li>
          <li className="link2">
            <a href="#">TESTIMONIALS</a>
          </li>
          <li className="link3">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <a href="javascript:void(0);" class="icon" onClick={hamburger}>
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
