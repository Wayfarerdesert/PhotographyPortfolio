import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages, imgSource } from "../../data/about";

function Portraits() {
  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[1].title} />
      <Slider img_source={imgSource[1].portraits} />
    </div>
  );
}

export default Portraits;
