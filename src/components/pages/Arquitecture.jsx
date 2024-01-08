import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages } from "../../data/about";

const imgSources = [
  "../src/assets/img/3_arquitecture/_MG_001.jpg",
  "../src/assets/img/3_arquitecture/_MG_002.jpg",
  "../src/assets/img/3_arquitecture/_MG_003.jpg",
  "../src/assets/img/3_arquitecture/_MG_004.jpg",
  "../src/assets/img/3_arquitecture/_MG_005.jpg",
];

function Arquitecture() {
  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[2].title} />
      <Slider img_source={imgSources} />
    </div>
  );
}

export default Arquitecture;
