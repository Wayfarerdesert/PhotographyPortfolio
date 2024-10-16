import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  // HEADER TRANSPARENT / SOLID
  const [isSolid, setIsSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // PORTFOLIO / CONTACT BUTTON HANDLE BORDER start
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  // PORTFOLIO / CONTACT BUTTON HANDLE BORDER end

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // CONTACT BUTTON HANDLE BORDER start
    setIsActive(location.pathname === "/contact");
    // CONTACT BUTTON HANDLE BORDER end

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // HAMBURGER BUTTON, APPEARS ON SMALL SCREENS +++++++++++++++++++++++++++
  const toggleHamburgerIcon = () => {
    const hamburgerBtn = document.getElementById("hamburger");
    if (hamburgerBtn.classList.contains("navOpen")) {
      hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      hamburgerBtn.classList.remove("navOpen");
    } else {
      // Hamburger button changes to X when clicked
      hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
      hamburgerBtn.classList.add("navOpen");
    }
  };

  // BUTTON PORTFOLIO MENU, +++++++++++++++++++++++++++
  const handlePortfolioHover = (event) => {
    const subMenu = document.getElementById("subMenu");

    if (event.type === "mouseover") {
      subMenu.classList.add("show");
    } else if (event.type === "mouseout") {
      subMenu.classList.remove("show");
    }
  };

  return (
    <header id="top">
      <div id="navBar" className={isSolid ? "navSolidBg" : ""}>
        <nav id="mainMenu" className={isMenuOpen ? "show" : "hiddenBurger"}>
          <ul>
            <li>
              <NavLink
                to="/"
                id="homeBtn"
                className={location.pathname === "/" ? "hideElement" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                // to="/portfolio"
                id="portfolio"
                className={
                  location.pathname === "/contact" ? "noBorder" : "menuBorder"
                }
                onMouseOver={handlePortfolioHover}
                onMouseOut={handlePortfolioHover}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                id="contact"
                className={isActive ? "menuBorder" : ""}
                onClick={() => setIsActive(true)}
              >
                Contacto
              </NavLink>
            </li>
            <div
              id="subMenu"
              className="hidden"
              onMouseOver={handlePortfolioHover}
              onMouseOut={handlePortfolioHover}
            >
              <ul>
                <NavLink to="/portfolio/product">Producto</NavLink>
                <NavLink to="/portfolio/portrait">Retratos</NavLink>
                <NavLink to="/portfolio/architecture">Arquitectura</NavLink>
                <NavLink to="/portfolio/events">Eventos</NavLink>
                <NavLink to="/portfolio/multimedia">Multimedia</NavLink>
              </ul>
            </div>
          </ul>
        </nav>
        <button
          className="hamburger"
          id="hamburger"
          onClick={() => {
            toggleMenu();
            toggleHamburgerIcon();
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
