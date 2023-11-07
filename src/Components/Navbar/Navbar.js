import React, { useState, useRef, useEffect } from "react";
import "../../style.css";
import "./navbar.css";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ onClick, label }) => (
  <button className="button--main" onClick={onClick}>
    {label}
  </button>
);

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navContentRef = useRef(null);
  const burgerRef = useRef(null);
  const launchAppUrl = "https://task.humandao.org/";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navContentRef.current &&
        !navContentRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setShowLinks(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    window.open(launchAppUrl, "_blank");
  };

  const NavLink = ({ to, label, isExternal = false }) => {
    if (isExternal) {
      return (
        <a
          href={to}
          className="nav--link"
          onClick={() => setShowLinks(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    } else {
      return (
        <Link to={to} className="nav--link" onClick={() => setShowLinks(false)}>
          {label}
        </Link>
      );
    }
  };

  return (
    <nav className="nav">
      <div className="nav--container">
        <div className="nav--title">Human Task Force</div>
        <button
          ref={burgerRef}
          className="burger"
          onClick={() => setShowLinks(!showLinks)}
        >
          <img src="/img/burger-menu.png" alt="Menu" />
        </button>
        <div className="nav--links desktop-links">
          <NavLink to="https://humandao.org/" label="Dao" isExternal={true} />
          <NavLink to="/htf-landing-page" label="Home" /> {/* Updated path */}
          <NavLink to="/contact" label="Contact" />
        </div>
        <div
          ref={navContentRef}
          className={`nav-content ${showLinks ? "active" : ""}`}
        >
          <div className="nav--links mobile-links">
            <NavLink to="https://humandao.org/" label="Dao" isExternal={true} />
            <NavLink to="/htf-landing-page" label="Home" /> {/* Updated path */}
            <NavLink to="/contact" label="Contact" />
          </div>
        </div>
        <PrimaryButton onClick={handleButtonClick} label="Launch App" />
      </div>
    </nav>
  );
};

export default Navbar;
