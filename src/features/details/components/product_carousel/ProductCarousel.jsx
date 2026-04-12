import { useState } from "react";
import "./ProductCarousel.css";

const ProductCarousel = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isSwitching, setIsSwitching] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (img) => {
    if (img === mainImage) return;
    if (isSwitching) return;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setIsSwitching(true);
    setMainImage(img);

    const id = setTimeout(() => {
      setIsSwitching(false);
    }, 350);

    setTimeoutId(id);
  };

  return (
    <ul className="products-carousel w-full p-16">
      {images.map((img) => (
        <li
          key={img}
          className={`${img === mainImage ? "carousel-main-image" : ""} ${isSwitching ? "switching" : ""} cursor-pointer`}
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
