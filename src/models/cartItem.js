export const createCartItem = (product) => {
  return {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    qtty: 1,
    subtotal: product.price
  }
}