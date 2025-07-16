export async function fetchProducts({ limit = 30, skip = 0 } = {}) {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  if (!res.ok) throw new Error('Network response was not ok')
  const data = await res.json()
  return data.products
} 