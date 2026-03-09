const Cart = () => {
  
  return (
    <main
      className="w-full8 relative flex flex-col gap-8"
    >
      <div
        className="w-full bg-surface p-32 shadow-sm mt-8"
      >
        <h1>Cart</h1>
      </div>
      
      <section
        className="w-full bg-surface shadow-sm mb-120"
      >
      </section>
      <div
        className="fixed bottom-left flex flex-col w-full bg-surface p-32 shadow-lg mt-8
        gap-8"
      >
        <div
          className="w-full flex justify-end"
        >
          <span><strong>Amount: </strong>$0</span>
        </div>
        <button
          className="primary-button w-full p-16 rounded-md text-normal text-lg"
        >Checkout</button>
      </div>
    </main>
  )
}

export default Cart