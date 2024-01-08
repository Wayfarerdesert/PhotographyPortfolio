import Breadcrumb from "../layout/Breadcrumb";
import Slider from "../layout/Slider";
import ImageGallery from "../utility/GalleryPath";

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
  // const imgSources = getImagesSources("../src/assets/img/1_product");
  // const img1 = "../../assets/img/my_folder/1_product/_MG_001.jpg";
  // const img2 = "../../assets/img/my_folder/1_product/_MG_002.jpg";

  // const imgSources = "../../assets/img/my_folder/1_product/";

  return (
    <div id="pages">
      <Breadcrumb pageName="Producto" />
      <Slider img_source={imgSources} />
      {/* <Slider img_source={"../src/assets/img/1_product"} /> */}
    </div>
  );
}

export default Product;
