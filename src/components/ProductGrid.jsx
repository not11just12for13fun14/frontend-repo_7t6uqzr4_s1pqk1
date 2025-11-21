import { useEffect, useState } from 'react'

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/products?limit=12`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        if (!data.length) {
          // Seed sample data automatically for first run
          await fetch(`${baseUrl}/api/seed-products`, { method: 'POST' })
          const seeded = await fetch(`${baseUrl}/api/products?limit=12`)
          const seededData = await seeded.json()
          setProducts(seededData)
        } else {
          setProducts(data)
        }
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <div className="text-blue-100">Loading products…</div>
  if (error) return <div className="text-red-300">{error}</div>

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <article key={p.id} className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image_url} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white tracking-tight">{p.title}</h3>
                <p className="text-sm text-blue-100/80 mt-1 line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-emerald-300 font-semibold">${p.price.toFixed(2)}</span>
                  <button className="px-3 py-2 text-sm rounded-md bg-emerald-400 text-emerald-950 font-medium hover:bg-emerald-300">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
