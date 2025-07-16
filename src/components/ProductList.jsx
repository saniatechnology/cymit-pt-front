import styles from './ProductList.module.css'
import { Link } from 'react-router'

export default function ProductList({ products }) {
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} className={styles.card} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={product.thumbnail} alt={product.title} className={styles.thumbnail} />
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.price}>${product.price}</div>
        </Link>
      ))}
    </div>
  )
} 