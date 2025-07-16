import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { Routes, Route } from 'react-router'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  )
} 