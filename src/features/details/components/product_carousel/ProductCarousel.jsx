import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./ProductCarousel.css";
import { useGallery } from "@/features/details/hooks/useGallery";

const ProductCarousel = ({ images }) => {
  const { mainImage, isSwitching, handleMouseEnter, handleCarouselScroll } = useGallery()

  const currentMain = mainImage || images[0];

  const hasMultipleImages = images.length > 1;

  const showControls = hasMultipleImages;

  return (
    <div className="carousel-container">
      {showControls && (
        <div className="carousel-controls-wrapper">
          <button className="carousel-control" onClick={() => handleCarouselScroll("left")}><BiChevronLeft /></button>
          <button className="carousel-control" onClick={() => handleCarouselScroll("right")}><BiChevronRight /></button>  
        </div>
      )}
      <ul className={`products-carousel  w-full ${images.length > 1 ? "products-gallery" : ""}`}>
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
    </div>
  );
};

export default ProductCarousel;
