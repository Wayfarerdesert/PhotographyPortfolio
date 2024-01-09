import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages, imgSource } from "../../data/about";

function Product() {
  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[0].title} />
      <Slider img_source={imgSource[0].product} />
    </div>
  );
}

export default Product;
