import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages } from "../../data/about";

const imgSources = [
  "../src/assets/img/2_portraits/_MG_001.jpg",
  "../src/assets/img/2_portraits/_MG_002.jpg",
  "../src/assets/img/2_portraits/_MG_003.jpg",
  "../src/assets/img/2_portraits/_MG_004.jpg",
  "../src/assets/img/2_portraits/_MG_005.jpg",
  "../src/assets/img/2_portraits/_MG_006.jpg",
  "../src/assets/img/2_portraits/_MG_007.jpg",
  "../src/assets/img/2_portraits/_MG_008.jpg",
  "../src/assets/img/2_portraits/_MG_009.jpg",
  "../src/assets/img/2_portraits/_MG_0010.jpg",
  "../src/assets/img/2_portraits/_MG_0011.jpg",
  "../src/assets/img/2_portraits/_MG_0012.jpg",
  "../src/assets/img/2_portraits/_MG_0013.jpg",
  "../src/assets/img/2_portraits/_MG_0014.jpg",
  "../src/assets/img/2_portraits/_MG_0015.jpg",
];

function Portraits() {

  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[1].title}/>
      <Slider img_source={imgSources} />
    </div>
  );
}

export default Portraits;
