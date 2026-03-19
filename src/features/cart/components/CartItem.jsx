import { Link } from "react-router-dom"
import { useCart } from "@/contexts/cart/useCart"
import "./CartItem.css"

const CartItem = (
  {
    itemId = null,
    itemImage = null,
    itemTitle = null,
    price = 0,
    qtty = 0,
    subtotal = 0,
    handleRemove = null
  }
) => {

  const {
    decreaseItemQtty,
    increaseItemQtty,
    removeFromCart
  } = useCart()



  return (
    <div
      className="cart-item w-full p-16 bg-background"
    >
      <Link
        to={`/products/${itemId}`}
        className="item-img-link"
      >
        <img
          className="item-img w-full h-auto"
          style={{
            width: "40%"
          }}
          src={itemImage}
        />
      </Link>
      <Link
        to={`/products/${itemId}`}
        className="item-title"
      >
        <p>{itemTitle}</p>
      </Link>

      <span
        className="item-subtotal"
      >Subtotal: ${subtotal.toFixed(2)}</span>

      <span
        className="item-price"
      >Price: ${price.toFixed(2)}</span>

      <div
        className="item-qtty w-full flex p-8"
      >
        <button
          className="primary-button"
          onClick={() => decreaseItemQtty(itemId)}
        >-</button>
        <span>{qtty}</span>
        <button
          className="primary-button"
          onClick={() => increaseItemQtty(itemId)}
        >+</button>
      </div>

      <button
        className="item-remove"
        onClick={() => removeFromCart(itemId)}
      >Remove</button>

    </div>
  )
}

export default CartItem