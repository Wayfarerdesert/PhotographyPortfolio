import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import { pages } from "../../data/about";

const imgSources = [
  "../src/assets/img/1_product/_MG_001.jpg",
  "../src/assets/img/1_product/_MG_002.jpg",
  "../src/assets/img/1_product/_MG_003.jpg",
  "../src/assets/img/1_product/_MG_004.jpg",
  "../src/assets/img/1_product/_MG_005.jpg",
  "../src/assets/img/1_product/_MG_006.jpg",
  "../src/assets/img/1_product/_MG_007.jpg",
  "../src/assets/img/1_product/_MG_008.jpg",
  "../src/assets/img/1_product/_MG_009.jpg",
  "../src/assets/img/1_product/_MG_0010.jpg",
  "../src/assets/img/1_product/_MG_0011.jpg",
  "../src/assets/img/1_product/_MG_0012.jpg",
  "../src/assets/img/1_product/_MG_0013.jpg",
  "../src/assets/img/1_product/_MG_0014.jpg",
  "../src/assets/img/1_product/_MG_0015.jpg",
  "../src/assets/img/1_product/_MG_0016.jpg",
];

function Product() {

  return (
    <div id="pages">
      <Breadcrumb pageTitle={pages[0].title} />
      <Slider img_source={imgSources} />
      {/* <Slider img_source={"../src/assets/img/1_product"} /> */}
    </div>
  );
}

export default Product;
