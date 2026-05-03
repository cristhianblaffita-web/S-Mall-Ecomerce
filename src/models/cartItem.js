export const createCartItem = (product) => {
  return {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    qtty: product.quantity || 1,
    subtotal: product.price * (product.quantity || 1),
    stock: product.stock
  };
};
