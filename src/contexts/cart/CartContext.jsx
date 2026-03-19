import { createContext, useState, useEffect } from "react"
import { createCartItem } from "@/models/cartItem"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])
  
  const [cartAnimation, setCartAnimation] = useState("")
  
  const cartItemsQtty = cartItems.reduce((total, item) => {
  return total + item.qtty
}, 0)

   
  useEffect(() => {

  if (cartItemsQtty > 0) {
    setCartAnimation("cart-bump")

    const timer = setTimeout(() => {
      setCartAnimation("cart-shake")
    }, 100)

    return () => clearTimeout(timer)
  }

  setCartAnimation("")

}, [cartItemsQtty])

  const addToCart = (product) => {
    const cartItem = createCartItem(product)
    
    setCartItems(prev => {
      const productExists = prev.find(item => item.id === cartItem.id)
      
      if (productExists) {
        return prev.map(item => item.id === cartItem.id ? {...item, qtty:
        item.qtty + 1, subtotal: (item.qtty + 1) * item.price
        } : item) 
      }
      
      return [...prev, cartItem]
    })

  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  
  const decreaseItemQtty = (id) => {
    setCartItems(prev => {
     return prev.map(item => item.id === id ? {...item, qtty: item.qtty - 1,
     subtotal: (item.qtty - 1) * item.price} :
     item).filter(item => item.qtty > 0)
    })
  }
  
  const increaseItemQtty = (id) => {
    setCartItems(prev => {
     return prev.map(item => item.id === id ? {...item, qtty: item.qtty + 1,
     subtotal: (item.qtty + 1) * item.price
     } :
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
        cartItemsQtty,
        decreaseItemQtty,
        increaseItemQtty,
        cartAnimation
      }}
    >
      {children}
    </CartContext.Provider>
  )
}