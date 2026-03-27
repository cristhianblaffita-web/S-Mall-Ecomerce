import { useState, useEffect } from "react"
import { searchItem } from "@/services/searchService"
import { useProducts } from "@/hooks/useProducts"

const useSearch = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const { products } = useProducts("https://dummyjson.com/products?limit=149")

  const search = async (query) => {
    setLoading(true)


    try{
        const data = await searchItem(query, products)
        
        setResults(data)
        setLoading(false)
    } catch (err) {
        console.log(err)
        setLoading(false)
    }
  }

  return { results, loading, search }
}

export default useSearch
