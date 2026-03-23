import { useState, useEffect } from "react"
import { useProducts } from "@/hooks/useProducts"
import { searchItem } from "@/services/searchService"

const useSearchSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [query, setQuery] = useState("")

  const [searchResults, setSearchResults] = useState([])

  const { products } = useProducts("https://dummyjson.com/products?limit=149")

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

  useEffect(() => {
    if (!query || !products) {
      setSearchResults([])
      return
    }

    const results = searchItem(query, products)
    setSearchResults(results)
  }, [query, products])

  const toggleSearchSection = () => {
    setIsOpen(prev => !prev)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClear = () => {
    setQuery("")
  }

  /*const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }*/

  return {
    isOpen,
    toggleSearchSection,
    query,
    handleChange,
    handleClear,
    searchResults
  }
}

export default useSearchSection