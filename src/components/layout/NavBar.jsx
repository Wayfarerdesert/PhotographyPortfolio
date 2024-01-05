import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

function NavBar() {
  // HEADER TRANSPARENT / SOLID
  const [isSolid, setIsSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // BOTON HAMBURGUESA, APARECE EN PANTALLAS PEQUEÑAS +++++++++++++++++++++++++++
  const toggleHamburgerIcon = () => {
    const hamburgerBtn = document.getElementById("hamburger");
    if (hamburgerBtn.classList.contains("navOpen")) {
      hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      hamburgerBtn.classList.remove("navOpen");
    } else {
      // boton hamburguesa cambia a X cuando es clickeado
      hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
      hamburgerBtn.classList.add("navOpen");
    }
  };

  //   // BOTON PORTFOLIO MENU, +++++++++++++++++++++++++++
  //   const handlePortfolioHover = (event) => {
  //     const subMenu = document.getElementById("subMenu");
  //     if (event.type === "mouseover") {
  //       subMenu.classList.add("show");
  //     } else if (event.type === "mouseout") {
  //       subMenu.classList.remove("show");
  //     }
  //   };

  // BOTON PORTFOLIO MENU, +++++++++++++++++++++++++++
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
        <nav id="mainMenu" className={isMenuOpen ? "show" : "hiddenBurguer"}>
          <ul>
            <li>
              <NavLink
                to="/"
                id="portfolio"
                onMouseOver={handlePortfolioHover}
                onMouseOut={handlePortfolioHover}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" id="contact">
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
                <NavLink to="/product">Producto</NavLink>
                <NavLink to="/portrait">Retratos</NavLink>
                <NavLink to="/arquitecture">Arquitectura</NavLink>
                <NavLink to="/events">Eventos</NavLink>
                <NavLink to="/multimedia">Multimedia</NavLink>
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
