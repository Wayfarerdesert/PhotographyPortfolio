import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import { pages, imgSource } from "../../data/about";

function Multimedia() {

  const Video_1 = imgSource[4].multimedia[0].link;
  const Video_2 = imgSource[4].multimedia[1].link;

  // Extracting video ID from the link
  const videoId = Video_1.split("v=")[1];
  const videoId_2 = Video_2.split("v=")[1];

  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[4].title} />

      <div className="mainMultimedia">
        <div >
          <iframe
            title="YouTube Video"
            width="50%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{imgSource[4].multimedia[0].title}</p>
        </div>
        <div>
          <iframe
            title="YouTube Video"
            width="50%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId_2}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{imgSource[4].multimedia[1].title}</p>
        </div>
      </div>
    </div>
  );
}

export default Multimedia;
