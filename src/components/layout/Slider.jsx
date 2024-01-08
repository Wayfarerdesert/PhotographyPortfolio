import React, { useEffect, useState } from "react";
import ImageGallery from "../utility/GalleryPath";

function Slider({ img_source }) {
  // SLIDER  CAROUSEL ++++++++++++++++++++++++++++++++++++++
  const [activeIndex, setActiveIndex] = useState(0);
  let imagePaths = [];

  useEffect(() => {
    const main = document.querySelector(".main");
    const puntos = document.querySelectorAll(".punto");

    puntos.forEach((element, i) => {
      // asigno un click a cada punto
      element.addEventListener("click", () => {
        // guardar la posicion de ese punto
        let posicion = i;
        let percentage = img_source.length;
        let operacion = posicion * (-100 / percentage);

        // Movemos main
        main.style.transform = `translateX(${operacion}%)`;
        puntos.forEach((element, index) => {
          element.classList.remove("active");
        });
        element.classList.add("active");
        setActiveIndex(posicion);
      });
    });
  }, []);

  if (Array.isArray(img_source)) {
    imagePaths = img_source.map((img) => `${img}`);
  } else {
    console.log("img_source is not an array:", img_source);
  }

  return (
    <div>
      SliderSliderSliderSliderSliderSliderSliderSliderSlider
      <div className="carousel">
        <div className="main">
          {imagePaths.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagen ${index + 1}`}
              className={index === activeIndex ? "img active" : "img"}
            />
          ))}
        </div>

        <ul className="puntos">
          {imagePaths.map((_, index) => (
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
