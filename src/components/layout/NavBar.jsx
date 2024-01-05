import { NavLink, redirect, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';
import "../../index.css";


function NavBar() {

    return (
        <header id="top">
        <div id="navBar">
            <nav id="mainMenu" className="hiddenBurguer">
                <ul id="
                ">
                    <li>
                        <a href="#home" id="portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="./contact.html" id="contact">Contacto</a>
                    </li>
                    <div id="subMenu" className="hidden">
                        <ul>
                            <a href="./product.html">Producto</a>
                            <a href="./portrait.html">Retratos</a>
                            <a href="./arq.html">Arquitectura</a>
                            <a href="./events.html">Eventos</a>
                            <a href="./multimedia.html">Multimedia</a>
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