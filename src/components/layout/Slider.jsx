import React, { useEffect, useState } from "react";
import { imgExtension } from "../../data/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPlay,
  faPause,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";

function Slider({ img_source }) {
  // SLIDER  CAROUSEL ++++++++++++++++++++++++++++++++++++++
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0); // Right/left Btn navigation
  const [isAutoPlay, setIsAutoPlay] = useState(true); // State to control autoplay
  let imgCount = img_source.length;

  const img_extension = imgExtension;
  let imagePaths = Array.isArray(img_source)
    ? img_source.map((img) => `${img}.${img_extension}`)
    : [];

  if (!Array.isArray(img_source)) {
    console.log("img_source is not an array:", img_source);
  }

  const goToPrevSlide = () => {
    const index = (activeIndex - 1 + imagePaths.length) % imagePaths.length;
    setActiveIndex(index);
    setTranslateValue(index * (-100 / imagePaths.length));
  };

  const goToNextSlide = () => {
    const index = (activeIndex + 1) % imagePaths.length;
    setActiveIndex(index);
    setTranslateValue(index * (-100 / imagePaths.length));
  };

  useEffect(() => {
    // Updating the variable in the index.css with the number of img
    const mainContainer = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--imgCount");
    document.documentElement.style.setProperty("--imgCount", imgCount);
    // Console log mainContainerto know how many images will be in the carousel
    // console.log(mainContainer);

    const main = document.querySelector(".main");
    const puntos = document.querySelectorAll(".punto");

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

    // Auto slide change every 5 seconds
    if (isAutoPlay) {
      const interval = setInterval(goToNextSlide, 3500);
      return () => clearInterval(interval);
    }
  }, [activeIndex, isAutoPlay]); // Ensure to pass an empty array as the second argument if you don't have dependencies for the useEffect

  const toggleAutoPlay = () => {
    setIsAutoPlay((prevAutoPlay) => !prevAutoPlay);
  };

  const lightBox = () => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      if (rootElement.classList.contains("lightBox")) {
        rootElement.classList.remove("lightBox");
        rootElement.classList.add("darkerLightBox");
      } else if (rootElement.classList.contains("darkerLightBox")) {
        rootElement.classList.remove("darkerLightBox");
      } else {
        rootElement.classList.add("lightBox");
      }
    }
  };

  let timeOutId;
  const navControl = (event) => {
    const lightBoxWrapper = document.querySelector(".navBtnWrapper");
    if (lightBoxWrapper) {
      if (event.type === "mouseover") {
        clearTimeout(timeOutId);
        lightBoxWrapper.classList.remove("hideElement");
      } else if (event.type === "mouseout") {
        timeOutId = setTimeout(() => {
          lightBoxWrapper.classList.add("hideElement");
        }, 2000);
      }
    } else {
      console.error('Element with class "navBtnWrapper" not found.');
    }
  };

  return (
    <div>
      <div className="carousel">
        <div
          className="navBtnWrapper"
          onMouseOver={navControl}
          onMouseOut={navControl}
        >
          <div>
            <button className="navBtn" onClick={toggleAutoPlay}>
              {isAutoPlay ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}
            </button>
          </div>

          <div>
            <button className="navBtn" onClick={goToPrevSlide}>
              <FontAwesomeIcon icon={faBackwardStep} />
            </button>
            <button className="navBtn" onClick={goToNextSlide}>
              <FontAwesomeIcon icon={faForwardStep} />
            </button>
            <button className="lightBoxBtn" onClick={lightBox}>
              {/* lightBox */}
              <FontAwesomeIcon icon={faLightbulb} />
            </button>
          </div>
        </div>

        <div
          className="main"
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          {imagePaths.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagen ${index + 1}`}
              className={index === activeIndex ? "img active" : "img"}
              onMouseOver={navControl}
              onMouseOut={navControl}
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
