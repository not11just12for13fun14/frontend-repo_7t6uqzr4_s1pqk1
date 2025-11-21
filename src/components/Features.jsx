import { Sparkles, Droplets, Sun, Moon } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Air quality',
    text: 'HEPA purifiers and smart humidifiers that make every breath lighter.'
  },
  {
    icon: Droplets,
    title: 'Clean water',
    text: 'Advanced filtration for crisp hydration and fewer contaminants.'
  },
  {
    icon: Sun,
    title: 'Healthy light',
    text: 'Circadian-friendly lamps that boost mood and productivity.'
  },
  {
    icon: Moon,
    title: 'Deep sleep',
    text: 'Soundscapes and accessories that invite restorative rest.'
  }
]

export default function Features() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-blue-50">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-blue-100/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
