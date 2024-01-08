import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import { pages } from "../../data/about";

function Multimedia() {
  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[4].title} />
      <div style={{ height: "100vh", backgroundColor: "lightblue" }}></div>
    </div>
  );
}

export default Multimedia;
