export function setDiscount(price, discountPercentage) {
  const finalPrice =  price - ((price * discountPercentage) / 100)
  
  return finalPrice
}