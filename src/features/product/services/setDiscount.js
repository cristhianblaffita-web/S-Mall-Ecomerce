export default function setDiscount(price, discountPercentage) {
  return (price * discountPercentage) / 100
}