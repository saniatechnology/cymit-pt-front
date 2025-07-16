import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { fetchProducts } from '../api/products'

const PAGE_SIZE = 30

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchProducts({ limit: PAGE_SIZE, skip: (page - 1) * PAGE_SIZE })
      .then(setProducts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [page])

  const handlePrev = () => setPage(p => Math.max(1, p - 1))
  const handleNext = () => setPage(p => p + 1)

  if (loading) return <div>Loading products...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div style={{ padding: 24 }}>
      <h1>Products</h1>
      <ProductList products={products} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24 }}>
        <button onClick={handlePrev} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={handleNext} disabled={products.length < PAGE_SIZE}>Next</button>
      </div>
    </div>
  )
} 