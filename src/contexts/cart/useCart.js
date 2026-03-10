import { useContext } from "react"
import { CartContext } from "@/contexts/cart/CartContext"

export const useCart = () => {
  return useContext(CartContext)
}