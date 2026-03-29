export const useCategories = (products) => {
    if (!products || products.length === 0) return []

    return [...new Set(products.map(p => p.category))]
}