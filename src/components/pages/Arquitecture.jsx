import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages, imgSource } from "../../data/about";

function Arquitecture() {
  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[2].title} />
      <Slider img_source={imgSource[2].arquitecture} />
    </div>
  );
}

export default Arquitecture;
