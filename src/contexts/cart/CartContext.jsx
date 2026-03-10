import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    
    setCartItems(prev => {
      const productExists = cartItems.find(item => item.id === product.id)
      
      if (productExists) {
        return prev.map(item => item.id === product.id ? {...item, qtty:
        item.qtty + 1, subtotal: (item.qtty + 1) * item.price
        } : item) 
      }
      
      return [...prev, {...product, qtty: 1, subtotal: product.price}]
      
    })
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  
  const decreaseItemQtty = (id) => {
    setCartItems(prev => {
     return prev.map(item => item.id === id ? {...item, qtty: item.qtty - 1,
     subtotal: ((item.qtty - 1) * item.price).toFixed(2)} :
     item).filter(item => item.qtty > 0)
    })
  }
  
  const increaseItemQtty = (id) => {
    setCartItems(prev => {
     return prev.map(item => item.id === id ? {...item, qtty: item.qtty + 1,
     subtotal: ((item.qtty + 1) * item.price).toFixed(2)} :
     item)
    })
  }
  
  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => {
    return total + item.price * item.qtty
  }, 0)
}

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        calculateCartTotal,
        decreaseItemQtty,
        increaseItemQtty
      }}
    >
      {children}
    </CartContext.Provider>
  )
}