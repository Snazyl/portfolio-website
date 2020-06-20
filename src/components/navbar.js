import React from "react";

function navbar() {
  return (
    <div className="nav-container">
      <div className="header-name">
        <h1>Lee Foster || Voice Actor</h1>
      </div>
      <nav>
        <ul className="navbar">
          <li>
            <a className="active-page" href="#">
              HOME
            </a>
          </li>
          <li>
            <a href="#">TESTIMONIALS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
