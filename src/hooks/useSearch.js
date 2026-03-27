import { useState, useEffect } from "react"
import { searchItem } from "@/services/searchService"
import { useProducts } from "@/hooks/useProducts"

const useSearch = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const { products } = useProducts("https://dummyjson.com/products?limit=149")

  const search = async (query) => {
    setLoading(true)
/*
    useEffect(() => {
    if (!query || !products) {
      setResults([])
      return
    }

    setResults(searchItem(query, products))

  }, [query, products])*/

    try{
        const data = await searchItem(query, products)
        setResults(data)
    } catch (err) {
        console.log(err)
    } finally {
        setLoading(false)
    }

  }

  return { results, loading, search }
}

export default useSearch
