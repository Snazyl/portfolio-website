import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <h1 className="header-name">
            LEE FOSTER <span className="voice">Voice Actor</span>
          </h1>
        </div>
        <div>
          <input id="nav-toggle" type="checkbox" className="nav-toggle" />
          <ul className="navbar">
            <li className="link1">
              <a className="active-page" href="/">
                HOME
              </a>
            </li>
            <li className="link2">
              <a href="/about">ABOUT ME</a>
            </li>
            <li className="link3">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
        {/* <div className="hamburger">
          <a href="javascript:void(0);" class="icon" onClick={hamburger}>
            <i class="fa fa-bars"></i>
          </a>
        </div> */}
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Navbar;
