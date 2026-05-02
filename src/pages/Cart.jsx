import "@/features/cart/Cart.css";
import { useCart } from "@/contexts/cart/useCart";
import CartItem from "@/features/cart/components/CartItem.jsx";

const Cart = () => {
  const { cartItems, calculateCartTotal } = useCart();

  return (
    <main className={`cart ${cartItems.length === 0 ? "cart--empty" : ""}`}>
      <div className="cart-header bg-surface p-32 shadow-sm">
        <h1>Cart</h1>
      </div>

      <section className="cart-list bg-background shadow-sm text-gray text-center p-0">
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
        <div className="cart-checkout-section p-32">
          <div className="checkout-summary">
            <span>
              Amount:{" "}
              <span className="checkout-total">
                ${calculateCartTotal().toFixed(2)}
              </span>
            </span>
          </div>

          <button className="primary-button w-full p-16 rounded-md text-normal text-lg">
            Checkout
          </button>
        </div>
      ) : null}
    </main>
  );
};

export default Cart;