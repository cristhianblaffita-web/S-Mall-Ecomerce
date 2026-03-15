let productsCache = null

export const productService = async (api) => {
  
  /*if (productsCache){
    return productsCache
  }*/
  
  const response = await fetch(api)
  
  if (!response.ok) throw new Error("Something went wrong fetching data")
  
  const data = response.json()
  
  productsCache = data
  return data
}