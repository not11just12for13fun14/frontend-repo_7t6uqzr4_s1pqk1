import { motion } from 'framer-motion'

export default function Hero({ onShop }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1200px_500px_at_10%_10%,#34d39910,transparent_60%),radial-gradient(900px_400px_at_90%_10%,#60a5fa10,transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Breathe better. Sleep deeper. Live well at home.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-blue-100/90 max-w-xl"
            >
              Curated indoor health products that elevate your air, water, light and rest. Designed for modern homes, proven for real wellness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex gap-4"
            >
              <button onClick={onShop} className="px-6 py-3 rounded-lg bg-emerald-400 text-emerald-950 font-semibold hover:bg-emerald-300 transition-colors">
                Shop featured
              </button>
              <a href="#about" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors">
                Why wellness at home?
              </a>
            </motion.div>
            <div className="mt-8 text-blue-200/70 text-sm">Free shipping over $75 • 30-day trial • 24/7 support</div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[5/4] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-gradient-to-br from-blue-400/10 to-emerald-400/10">
              <img
                src="https://images.unsplash.com/photo-1518112166137-85f9979a43a5?q=80&w=1600&auto=format&fit=crop"
                alt="Indoor wellness"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
