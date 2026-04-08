import { useState, useEffect } from "react"
import { searchItem } from "@/services/searchService"

const useSearch = (query, products) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const loadResults = () => {
      if (!query || !products) {
        setResults([])
        setLoading(false)
        return 
      }
        const data = searchItem(query, products)
  
        setResults(data)
        
        setLoading(false)
  
    }

    loadResults()
  }, [query, products])


  return { results, loading }
}

export default useSearch
