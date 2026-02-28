export const productService = async (api) => {
  const response = await fetch(api)
  
  if (!response.ok) throw new Error("Something went wrong fetching data")
  
  const data = response.json()
  
  return data
}