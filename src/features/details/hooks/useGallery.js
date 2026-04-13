import { useState } from "react"

export const useGallery = ({images}) => {
  const [mainImage, setMainImage] = useState(images ? images[0] : null);
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
        }, 350);

        setTimeoutId(id);
    }

  return {mainImage, isSwitching, handleMouseEnter}
};
