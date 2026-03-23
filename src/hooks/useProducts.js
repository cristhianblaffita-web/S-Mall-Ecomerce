import { useState, useEffect } from "react"
import { productService } from "@/services/productService"

export const useProducts = (api) => {
    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await productService(api)
                setProducts(data)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        loadData()
    }, [api])

    return { products, isLoading, error }
}