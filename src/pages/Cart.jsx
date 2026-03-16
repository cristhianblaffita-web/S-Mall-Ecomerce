import { useCart } from "@/contexts/cart/useCart"
import CartItem from "@/features/cart/components/CartItem.jsx"

const Cart = () => {
  const { cartItems, calculateCartTotal } = useCart()
  
  return (
    <main
      className="w-full h-full relative flex flex-col gap-8"
    >
      <div
        className="w-full bg-surface p-32 shadow-sm mt-8"
      >
        <h1>Cart</h1>
      </div>
      
      <section
        className="w-full h-full flex flex-col gap-16 padding-tb-16 bg-surface shadow-sm mb-120 text-gray
        text-center"
      >
        {cartItems.length > 0 ? cartItems.map((item) => (
          <CartItem 
            key={item.id}
            itemId={item.id}
            itemImage={item.image}
            itemTitle={item.title}
            price={item.price}
            qtty={item.qtty}
            subtotal={item.subtotal}
          />
        )) : <p className="p-32">Your S-Mall cart is empty</p>}
      </section>
      
      { cartItems.length > 0 ? (<div
        className="fixed bottom-left flex flex-col w-full bg-surface p-32 shadow-lg mt-8
        gap-8"
      >
        <div
          className="w-full flex justify-end"
        >
          <span><strong>Amount: </strong>${calculateCartTotal().toFixed(2)}</span>
        </div>
        <button
          className="primary-button w-full p-16 rounded-md text-normal text-lg"
        >Checkout</button> 
      </div>) : false}
    </main>
  )
}

export default Cart