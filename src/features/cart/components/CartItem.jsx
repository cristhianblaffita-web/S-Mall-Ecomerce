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
      <span
        className="item-qtty"
      >Qtty: {qtty}</span>
    </div>
  )
}

export default CartItem