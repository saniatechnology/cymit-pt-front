import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styles from './ProductPage.module.css'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(setProduct)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div>Loading product...</div>
  if (error) return <div>Error: {error}</div>
  if (!product) return null

  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <div className={styles.price}>${product.price}</div>
      <div className={styles.category}>Category: {product.category}</div>
      <div className={styles.description}>{product.description}</div>
      <button className={styles.backButton} onClick={() => window.history.back()}>Back</button>
    </div>
  )
} 