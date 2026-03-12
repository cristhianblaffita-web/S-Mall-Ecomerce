import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])
  
  const [cartAnimation, setCartAnimation] = useState("")
  
   const cartItemsQtty = cartItems.reduce((total, item) => {
    return total + item.qtty
  }, 0)

  const triggerCartAnimation = () => {
    setCartAnimation("cart-bump")
    
    setTimeout(() => {
      if (cartItemsQtty > 0) {
        setCartAnimation("cart-shake")
      }
    }, 300)
  }
  
  useEffect(() => {
    if (cartItemsQtty > 0){
      setCartAnimation("cart-shake")
    } else {
      setCartAnimation("")
    }
  }, [cartItemsQtty])


  const addToCart = (product) => {
    
    setCartItems(prev => {
      const productExists = prev.find(item => item.id === product.id)
      
      if (productExists) {
        return prev.map(item => item.id === product.id ? {...item, qtty:
        item.qtty + 1, subtotal: ((item.qtty + 1) * item.price).toFixed(2)
        } : item) 
      }
      
      return [...prev, {...product, qtty: 1, subtotal: product.price}]
    })
    
    triggerCartAnimation()
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
        increaseItemQtty,
        cartAnimation
      }}
    >
      {children}
    </CartContext.Provider>
  )
}