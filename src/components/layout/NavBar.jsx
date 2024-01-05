import { NavLink, redirect, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

import "../../index.css";

function NavBar() {
  return (
    <header id="top">
      <div id="navBar">
        <nav id="mainMenu" className="hiddenBurguer">
          <ul>
            <li>
              <NavLink to="/" id="portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="./contact" id="contact">
                Contacto
              </NavLink>
            </li>
            <div id="subMenu" className="hidden">
              <ul>
                <li>
                  <NavLink to="./product">Producto</NavLink>
                </li>
                <li>
                  <NavLink to="./portrait">Retratos</NavLink>
                </li>
                <li>
                  <NavLink to="./arquitecture">Arquitectura</NavLink>
                </li>
                <li>
                  <NavLink to="./events">Eventos</NavLink>
                </li>
                <li>
                  <NavLink to="./multimedia">Multimedia</NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
        <button className="hamburger" id="hamburger">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
