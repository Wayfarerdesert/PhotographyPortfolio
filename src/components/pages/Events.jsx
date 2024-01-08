import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages } from "../../data/about";

const imgSources = [
  "../src/assets/img/4_events/_MG_001.jpg",
  "../src/assets/img/4_events/_MG_002.jpg",
  "../src/assets/img/4_events/_MG_003.jpg",
  "../src/assets/img/4_events/_MG_004.jpg",
  "../src/assets/img/4_events/_MG_005.jpg",
  "../src/assets/img/4_events/_MG_006.jpg",
  "../src/assets/img/4_events/_MG_007.jpg",
  "../src/assets/img/4_events/_MG_008.jpg",
  "../src/assets/img/4_events/_MG_009.jpg",
  "../src/assets/img/4_events/_MG_0010.jpg",
  "../src/assets/img/4_events/_MG_0011.jpg",
  "../src/assets/img/4_events/_MG_0012.jpg",
];

function Events() {
  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[3].title}/>
      <Slider img_source={imgSources} />
    </div>
  );
}

export default Events;
