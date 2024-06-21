import React from "react";
import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages, imgSource } from "../../data/about";

function Photography({ pageIndex, subKey }) {
  const page = pages[pageIndex];
  const imgSourceData = imgSource[pageIndex]
    ? imgSource[pageIndex][subKey]
    : null;

  if (!page || !imgSourceData) {
    return <div>Error: Page data or image source not found</div>;
  }

  return (
    <div id="pages">
      <Breadcrumb pageTitle={page.title} />
      <Slider img_source={imgSourceData} />
    </div>
  );
}

function Architecture() {
  return <Photography pageIndex={2} subKey="architecture" />;
}

function Events() {
  return <Photography pageIndex={3} subKey="events" />;
}

function Portraits() {
  return <Photography pageIndex={1} subKey="portraits" />;
}

function Product() {
  return <Photography pageIndex={0} subKey="product" />;
}

export { Architecture, Events, Portraits, Product };
