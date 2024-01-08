import React, { useEffect, useState } from "react";

function Slider({ img_source }) {
  // SLIDER  CAROUSEL ++++++++++++++++++++++++++++++++++++++
  const [activeIndex, setActiveIndex] = useState(0);
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
        let operacion = posicion * -20;

        // Movemos main
        main.style.transform = `translateX(${operacion}%)`;
        // Recorremos todos los punto
        puntos.forEach((element, index) => {
          element.classList.remove("active");
        });
        // añadimos la clase active en el punto que hemos hecho click
        element.classList.add("active");
        setActiveIndex(posicion);
      });
    });
  }, []); // Ensure to pass an empty array as the second argument if you don't have dependencies for the useEffect

  return (
    <div>
      Slider
      <div className="carousel">
        <div className="main">
          {img_source.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={"Imagen ${index + 1}"}
              className={index === activeIndex ? "img active" : "img"}
            />
          ))}
        </div>

        <ul className="puntos">
          {img_source.map((_, index) => (
            <li
              key={index}
              className={index === activeIndex ? "punto active" : "punto"}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
