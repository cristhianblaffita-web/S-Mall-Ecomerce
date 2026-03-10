import { useCart } from "@/contexts/cart/useCart"
import "./CartItem.css"

const CartItem = (
  {
    itemId = null,
    itemImage= null,
    itemTitle = null,
    price = 0,
    qtty = 0,
    subtotal= 0,
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
      <img 
        className="item-img w-full h-auto"
        style={{
          width: "40%"
        }}
        src={itemImage} 
      />
      <p
        className="item-title"
      >{itemTitle}</p>
      
      <span
        className="item-subtotal"
      >Subtotal: ${subtotal}</span>
      
      <span
        className="item-price"
      >Price: ${price}</span>
      
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