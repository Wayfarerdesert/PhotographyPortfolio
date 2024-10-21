import React from "react";
import { useNavigate } from "react-router-dom";
import { pages, imgSource, imgExtension } from "../../data/about";

function Portfolio() {
  const navigate = useNavigate();

  // Check if pages or imgSource data exists
  if (!pages || !imgSource) {
    return (
      <div className="blabla">
        Error: No se encontraron los datos de la página o la fuente de la imagen
      </div>
    );
  }

  return (
    <>
      <section id="pages">
        <div className="portfolioContainer">
          {pages.map((page, pageIndex) => {
            const imageSources = imgSource[pageIndex];

            return (
              <div key={pageIndex} className="portfolioCard">
                <h2>{page.title}</h2>

                {imageSources &&
                  Object.keys(imageSources).map((categoryKey) => {
                    const img_source = imageSources[categoryKey];

                    // Construct image paths with the correct extension
                    let imagePaths = Array.isArray(img_source)
                      ? img_source.map((img) => `${img}.${imgExtension}`)
                      : [];

                    if (!Array.isArray(img_source)) {
                      console.log("img_source is not an array:", img_source);
                    }

                    const getImage = (sourceArray, index) => {
                      return sourceArray && sourceArray.length > index
                        ? [sourceArray[index]]
                        : [];
                    };

                    const images = {
                      product: getImage(imgSource[0]?.product, 0),
                      portraits: getImage(imgSource[1]?.portraits, 11),
                      architecture: getImage(imgSource[2]?.architecture, 7),
                      events: getImage(imgSource[3]?.events, 2),
                      multimedia: getImage(imgSource[4]?.multimedia, 0).map(
                        (item) => item.img
                      ),
                    };

                    console.log(images);
                    // Get the specific images for the current category
                    const portfolioImages = images[categoryKey] || [];

                    return (
                      <div key={categoryKey}>
                        {portfolioImages.length > 0 ? (
                          portfolioImages.map((img) => (
                            <img
                              key={img}
                              src={`${img}.${imgExtension}`}
                              // alt={`${categoryKey} random`}
                              onClick={() => {
                                console.log(categoryKey);
                                navigate(`/portfolio/${categoryKey}`);
                              }}
                            />
                          ))
                        ) : (
                          <p
                            style={{
                              height: "85vh",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "30px",
                              color: "white",
                            }}
                          >
                            Imagen No Disponible
                          </p>
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
