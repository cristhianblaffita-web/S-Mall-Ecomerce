import "@/features/cart/Cart.css";
import { useCart } from "@/contexts/cart/useCart";
import CartItem from "@/features/cart/components/CartItem.jsx";

const Cart = () => {
  const { cartItems, calculateCartTotal } = useCart();

  return (
    <main className="cart">
      <div className="cart-header bg-surface p-32 shadow-sm">
        <h1>Cart</h1>
      </div>

      <section className="cart-list bg-surface shadow-sm text-gray text-center padding-tb-16">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              itemId={item.id}
              itemImage={item.image}
              itemTitle={item.title}
              price={item.price}
              qtty={item.qtty}
              subtotal={item.subtotal}
            />
          ))
        ) : (
          <p className="p-32">Your S-Mall cart is empty</p>
        )}
      </section>

      {cartItems.length > 0 ? (
        <div className="cart-checkout-section bg-surface p-32">
          <div className="checkout-summary">
            <span>
              Amount: <span className="checkout-total">${calculateCartTotal().toFixed(2)}</span>
            </span>
          </div>
          <button className="primary-button w-full p-16 rounded-md text-normal text-lg">
            Checkout
          </button>
        </div>
      ) : (
        false
      )}
    </main>
  );
};

export default Cart;
