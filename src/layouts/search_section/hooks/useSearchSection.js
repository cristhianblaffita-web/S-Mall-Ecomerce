import { useState, useEffect } from "react"

const useSearchSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [query, setQuery] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }

    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [isOpen])

  const toggleSearchSection = () => {
    setIsOpen(prev => !prev)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClear = () => {
    setQuery("")
  }


  return {
    isOpen,
    toggleSearchSection,
    query,
    handleChange,
    handleClear,
  }
}

export default useSearchSection