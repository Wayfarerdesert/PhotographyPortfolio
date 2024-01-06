import React, { useEffect } from "react";

function Slider({img_source}) {
  // SLIDER  CAROUSEL ++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    const main = document.querySelector(".main");
    const puntos = document.querySelectorAll(".punto");

    puntos.forEach((element, i) => {
      // asigno un click a cada punto
      element.addEventListener("click", () => {
        // guardar la posicion de ese punto
        let posicion = i;
        // Calcular el espacio que debe desplazarse el main
        // posicion es 0 transformX es 0
        // posicion es 1 transformX es -50%
        // operacion = posicion * -50
        let operacion = posicion * -50;

        // Movemos main
        main.style.transform = `translateX(${operacion}%)`;
        // Recorremos todos los punto
        puntos.forEach((element, index) => {
          element.classList.remove("active");
        });
        // añadimos la clase active en el punto que hemos hecho click
        element.classList.add("active");
      });
    });
  }, []); // Ensure to pass an empty array as the second argument if you don't have dependencies for the useEffect

  return (
    <div>
      Slider
      <div className="carousel">
        <div className="main">
          <img
            src="../src/assets/img/1_product/_MG_001.jpg"
            alt="Imagen 12"
            className="img"
          />
          <img
            src="../src/assets/img/1_product/_MG_002.jpg"
            alt="Imagen 1"
            className="img"
          />
        </div>

        <ul className="puntos">
          <li className="punto active"></li>
          <li className="punto"></li>
        </ul>
      </div>
    </div>
  );
}

export default Slider;
