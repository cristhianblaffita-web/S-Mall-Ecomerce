
import "./ProductCarousel.css";
import { useGallery } from "@/features/details/hooks/useGallery";

const ProductCarousel = ({ images }) => {
  const { mainImage, isSwitching, isInitialized, handleMouseEnter } = useGallery(images)

  return (
    <ul className={`products-carousel w-full p-16 ${images.length > 1 ? "products-gallery" : ""}`}>
      {images.map((img, index) => (
        <li
          key={img}
          className={`${img === mainImage || (!isInitialized && index === 0)  ? "carousel-main-image" : "side-gallery-image"} ${isSwitching ? "switching" : ""} cursor-pointer`}
          onMouseEnter={() => handleMouseEnter(img)}
        >
          <img
            className="details-image bg-background w-full rounded-md p-8"
            src={img}
            onLoad={(e) => e.currentTarget.classList.add("loaded")}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductCarousel;
