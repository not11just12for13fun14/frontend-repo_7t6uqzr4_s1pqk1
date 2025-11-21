export default function CTA(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-400 to-blue-500 p-[1px]">
          <div className="bg-slate-900 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Transform your home into a wellness space</h3>
              <p className="text-blue-100/90 mt-2">Join 10,000+ homes breathing easier and sleeping deeper.</p>
            </div>
            <a href="#products" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-blue-50">Explore products</a>
          </div>
        </div>
      </div>
    </section>
  )
}
