export default function ProductList({ products }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, background: '#fafafa' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 4, marginBottom: 8 }} />
          <h2 style={{ fontSize: 18, margin: '8px 0' }}>{product.title}</h2>
          <div style={{ fontWeight: 'bold', color: '#1976d2' }}>${product.price}</div>
        </div>
      ))}
    </div>
  )
} 