import { Link } from "react-router-dom";
import { useCart } from "@/contexts/cart/useCart";
import "./CartItem.css";
import QuantitySelector from "@/features/quantity_selector/components/QuantitySelector";

const CartItem = ({
  itemId = null,
  itemImage = null,
  itemTitle = null,
  price = 0,
  qtty = 0,
  subtotal = 0,
}) => {
  const { decreaseItemQtty, increaseItemQtty, removeFromCart } = useCart();

  return (
    <div className="cart-item w-full p-16 bg-surface">
      <Link to={`/products/${itemId}`} className="item-img-link">
        <img className="item-img " src={itemImage} />
      </Link>
      <Link to={`/products/${itemId}`} className="item-title">
        <p>{itemTitle}</p>
      </Link>

      <span className="item-subtotal">Subtotal: ${subtotal.toFixed(2)}</span>

      <span className="item-price">Price: ${price.toFixed(2)}</span>

      <div className="item-qtty w-full flex p-8">
        <QuantitySelector
          quantity={qtty}
          onIncrement={() => increaseItemQtty(itemId)}
          onDecrement={() => decreaseItemQtty(itemId)}
        />
      </div>

      <button className="item-remove" onClick={() => removeFromCart(itemId)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
