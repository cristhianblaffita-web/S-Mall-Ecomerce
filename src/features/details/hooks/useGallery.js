import { useState } from "react";

export const useGallery = () => {
  const [mainImage, setMainImage] = useState(null);
  const [isSwitching, setIsSwitching] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  function handleMouseEnter(img) {
    if (img === mainImage) return;
    if (isSwitching) return;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setIsSwitching(true);
    setMainImage(img);

    const id = setTimeout(() => {
      setIsSwitching(false);
    }, 450);

    setTimeoutId(id);
  }

  function handleCarouselScroll(direction, images) {
  if (isSwitching || !images.length) return;

  const currentIndex = mainImage ? images.indexOf(mainImage) : 0;
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < images.length - 1;

  if ((direction === "left" && !canGoLeft) || (direction === "right" && !canGoRight)) {
    return;
  }

  setIsSwitching(true);

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  const carousel = document.querySelector(".products-carousel");
  const scrollAmount = carousel.clientWidth + 16;
  carousel.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });


  const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
  setMainImage(images[newIndex]);

  const id = setTimeout(() => {
    setIsSwitching(false);
  }, 450);

  setTimeoutId(id);
}

  return { mainImage, isSwitching, handleMouseEnter, handleCarouselScroll };
};
