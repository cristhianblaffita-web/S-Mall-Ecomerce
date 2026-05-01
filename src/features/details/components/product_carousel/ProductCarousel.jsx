import "./ProductCarousel.css";
import { useGallery } from "@/features/details/hooks/useGallery";

const ProductCarousel = ({ images }) => {
  const { mainImage, isSwitching, handleMouseEnter } = useGallery()

  const currentMain = mainImage || images[0];

  return (
    <ul className={`products-carousel w-full ${images.length > 1 ? "products-gallery" : ""}`}>
      {images.map((img) => (
        <li
          key={img}
          className={`${img === currentMain ? "carousel-main-image" : "side-gallery-image"} ${isSwitching ? "switching" : ""} cursor-pointer`}
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
