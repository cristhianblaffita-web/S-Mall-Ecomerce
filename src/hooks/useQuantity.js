import { useState } from "react";

export const useQuantity = (initialQuantity = 1, productPrice = 0) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : q));
  const subtotal = quantity * productPrice;

  return { quantity, subtotal, increment, decrement, setQuantity };
};
