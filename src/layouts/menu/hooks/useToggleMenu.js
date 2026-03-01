import { useState } from "react"

export default function useToggleMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  return { isOpen, toggleMenu }
}