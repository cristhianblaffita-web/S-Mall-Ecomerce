export default function setDiscount(price, discountPercentage) {
  const finalPrice =  (price - ((price * discountPercentage) / 100)).toFixed(2)
  
  return finalPrice
}