import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'
import CTA from './components/CTA'

function App() {
  const productsRef = useRef(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            WellNest
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-blue-100/80 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="/test" className="hover:text-white">System test</a>
          </nav>
          <a href="#products" className="px-4 py-2 rounded-md bg-emerald-400 text-emerald-950 text-sm font-semibold hover:bg-emerald-300">Shop</a>
        </div>
      </header>

      <main className="pt-16 relative">
        <Hero onShop={scrollToProducts} />
        <Features />
        <div id="products" ref={productsRef}>
          <ProductGrid />
        </div>
        <CTA />
        <footer className="py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 text-blue-100/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} WellNest — Indoor Health & Home Wellness</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Shipping</a>
              <a href="#" className="hover:text-white">Returns</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
