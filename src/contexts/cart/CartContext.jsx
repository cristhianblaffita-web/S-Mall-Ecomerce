import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    
    setCartItems(prev => {
      const productExists = cartItems.find(item => item.id === product.id)
      
      if (productExists) {
        return prev.map(item => item.id === product.id ? {...item, qtty: item.qtty +
        1} : item) 
      }
      
      return [...prev, {...product, qtty: 1}]
      
    })
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}