import { useState, useEffect } from "react"

export default function useToggleMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }
  
  useEffect(() => {
  document.body.classList.toggle("no-scroll", isOpen)

  return () => {
    document.body.classList.remove("no-scroll")
  }
  }, [isOpen])

  return { isOpen, toggleMenu }
}