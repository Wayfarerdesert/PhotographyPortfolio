import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import { pages, imgSource } from "../../data/about";

const MultimediaEmbed = ({ link, title }) => {
  const videoId = link.includes("vimeo")
    ? link.split("/video/")[1].split("?")[0]
    : link.split("v=")[1];

  const videoSrc = link.includes("vimeo")
    ? `https://player.vimeo.com/video/${videoId}?h=${videoId}`
    : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        title={link.includes("vimeo") ? "Vimeo" : "YouTube"}
        src={videoSrc}
        width="100%"
        height="100%"
        allowfullscreen
        style={{ backgroundColor: "black" }}
      ></iframe>
      {title && <p>{title}</p>}
    </div>
  );
};

const Multimedia = () => {
  if (!imgSource || !imgSource[4] || !imgSource[4].multimedia) {
    return (
      <p className="mainMultimedia">
        Error: Multimedia data is missing or malformed.
      </p>
    );
  }

  const multimedia = imgSource[4].multimedia || [];

  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[4].title} />

      <div className="mainMultimedia">
        {multimedia.map((item, index) => (
          <MultimediaEmbed key={index} link={item.link} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Multimedia;
