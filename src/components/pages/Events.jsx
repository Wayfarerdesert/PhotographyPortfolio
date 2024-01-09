import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages, imgSource } from "../../data/about";

function Events() {
  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[3].title} />
      <Slider img_source={imgSource[3].events} />
    </div>
  );
}

export default Events;
