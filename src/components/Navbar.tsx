import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
      <nav className="navbar is-fixed-top" role="navigation">
        <div className="navbar-brand">
          <a
            onClick={() => {
              setIsActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbar-menu"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link to="pricing" smooth={true} className="navbar-item">
              Pricing
            </Link>
            <Link to="introduction" smooth={true} className="navbar-item">
              Home
            </Link>
            <Link to="support" smooth={true} className="navbar-item">
              Support
            </Link>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;