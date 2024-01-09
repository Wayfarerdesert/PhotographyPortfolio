import React, { useEffect, useState } from "react";

function Slider({ img_source }) {
  // SLIDER  CAROUSEL ++++++++++++++++++++++++++++++++++++++
  const [activeIndex, setActiveIndex] = useState(0);
  let imagePaths = [];
  let imgCount = img_source.length;

  useEffect(() => {
    // Updating the variable in the index.css with the number of img
    const mainContainer = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--imgCount");
    document.documentElement.style.setProperty("--imgCount", imgCount);
    console.log(mainContainer);

    const main = document.querySelector(".main");
    const puntos = document.querySelectorAll(".punto, .leftRightBtn");

    // when I click on dot
    // know the position of that point
    // Apply a translateX transform to the large one
    // Remove the active class from all points
    // Add the active class to the point we clicked

    // Loop through all points
    puntos.forEach((element, i) => {
      // asigno un click a cada punto
      element.addEventListener("click", () => {
        // guardar la posicion de ese punto
        let posicion = i;
        // Calculate the space that the main must move
        // position is 0 transformX is 0
        // position is 1 transformX is -50%
        // operation = position * -50
        let operacion = posicion * (-100 / imgCount);

        // Moving main
        main.style.transform = `translateX(${operacion}%)`;
        // We go through all the points
        puntos.forEach((element, index) => {
          element.classList.remove("active");
        });
        // we add the active class at the point we have clicked
        element.classList.add("active");
        setActiveIndex(posicion);
      });
    });
  }, []); // Ensure to pass an empty array as the second argument if you don't have dependencies for the useEffect

  if (Array.isArray(img_source)) {
    imagePaths = img_source.map((img) => `${img}`);
  } else {
    console.log("img_source is not an array:", img_source);
  }

  return (
    <div>
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
          <div>
            <button className="leftRightBtn">◀</button>
            <button className="leftRightBtn">▶</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Slider;
