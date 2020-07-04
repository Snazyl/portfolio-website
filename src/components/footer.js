import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1 className="footer-name">Lee Foster @2020</h1>
      </div>
      <div className="social-footer">
        <ul className="footer-wrapper">
          <li>Let's Connect!</li>
          <li>
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="link3">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
