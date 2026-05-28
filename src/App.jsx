import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Play,
  Music,
  Calendar,
  ShoppingBag,
  Instagram,
  Twitter,
  Youtube,
  ArrowUpRight,
} from 'lucide-react'

const ACCENTS = ['slime', 'pink', 'blue', 'yellow', 'orange-500', 'purple-500']

const accentClass = (i) => {
  const map = {
    slime: 'bg-slime text-black',
    pink: 'bg-pink text-black',
    blue: 'bg-blue text-black',
    yellow: 'bg-yellow text-black',
    'orange-500': 'bg-orange-500 text-black',
    'purple-500': 'bg-purple-500 text-black',
  }
  return map[ACCENTS[i % ACCENTS.length]]
}

const TRACKS = [
  { n: 1, title: 'Just How It Is', feat: '' },
  { n: 2, title: 'Bad Bad Bad', feat: 'Lil Baby' },
  { n: 3, title: 'Hot', feat: 'Gunna' },
  { n: 4, title: 'Surf', feat: 'Gunna' },
  { n: 5, title: 'Light It Up', feat: '' },
  { n: 6, title: 'Cartier Gucci Scarf', feat: 'Lil Duke' },
  { n: 7, title: 'Jumped Out The Window', feat: '' },
  { n: 8, title: 'What’s The Move', feat: 'Lil Uzi Vert' },
  { n: 9, title: 'Mannequin Challenge', feat: 'Juice WRLD' },
  { n: 10, title: 'Lil Baby', feat: '' },
  { n: 11, title: 'The London', feat: 'J. Cole & Travis Scott' },
  { n: 12, title: 'Sup Mate', feat: 'Future' },
  { n: 13, title: 'Big Tipper', feat: 'Lil Keed & Lil Duke' },
  { n: 14, title: 'Circle Of Bosses', feat: 'Quavo' },
  { n: 15, title: 'I’m Scared', feat: '21 Savage & Doe Boy' },
  { n: 16, title: 'Boy Back', feat: 'NAV' },
  { n: 17, title: 'Ecstasy', feat: 'Machine Gun Kelly' },
  { n: 18, title: 'Climax', feat: '' },
]

const TOUR = [
  { date: 'AUG 16', city: 'Atlanta, GA', venue: 'State Farm Arena', sold: true },
  { date: 'AUG 22', city: 'New York, NY', venue: 'Barclays Center', sold: true },
  { date: 'AUG 28', city: 'Chicago, IL', venue: 'United Center', sold: false },
  { date: 'SEP 03', city: 'Los Angeles, CA', venue: 'The Forum', sold: true },
  { date: 'SEP 10', city: 'Houston, TX', venue: 'Toyota Center', sold: false },
  { date: 'SEP 17', city: 'Miami, FL', venue: 'FTX Arena', sold: false },
  { date: 'SEP 24', city: 'Detroit, MI', venue: 'Little Caesars Arena', sold: false },
  { date: 'OCT 02', city: 'Toronto, ON', venue: 'Scotiabank Arena', sold: true },
  { date: 'OCT 09', city: 'London, UK', venue: 'The O2', sold: false },
  { date: 'OCT 16', city: 'Paris, FR', venue: 'Accor Arena', sold: false },
]

const MERCH = [
  { name: 'SO MUCH FUN HOODIE', price: '$85', bg: 'bg-slime', text: 'text-black' },
  { name: 'YSL LOGO TEE', price: '$45', bg: 'bg-pink', text: 'text-black' },
  { name: 'SLIME SEASON CAP', price: '$35', bg: 'bg-black border-2 border-slime', text: 'text-slime' },
  { name: 'TOUR CREWNECK', price: '$75', bg: 'bg-blue', text: 'text-black' },
]

function MarqueeStrip({ accent = 'bg-slime', textColor = 'text-black' }) {
  const items = Array.from({ length: 8 })
  return (
    <div className={`${accent} ${textColor} py-4 overflow-hidden border-y-2 border-black`}>
      <div className="flex animate-marquee whitespace-nowrap font-display text-2xl md:text-4xl">
        {items.map((_, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            SO MUCH FUN <span className="opacity-50">·</span> YOUNG THUG{' '}
            <span className="opacity-50">·</span> YSL{' '}
            <span className="opacity-50">·</span> 300 ENTERTAINMENT{' '}
            <span className="opacity-50">·</span> 2019{' '}
            <span className="opacity-50">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden noise">
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="font-display text-xl md:text-2xl tracking-wider">YSL</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#tracks" className="hover:text-slime transition">Tracks</a>
          <a href="#video" className="hover:text-slime transition">Video</a>
          <a href="#tour" className="hover:text-slime transition">Tour</a>
          <a href="#merch" className="hover:text-slime transition">Merch</a>
        </div>
        <button className="text-xs uppercase tracking-widest border border-white/30 px-4 py-2 hover:bg-slime hover:text-black hover:border-slime transition">
          Pre-Save
        </button>
      </nav>

      <div className="relative grid md:grid-cols-12 gap-6 px-6 md:px-12 pt-8 pb-24">
        <div className="md:col-span-7 relative z-10">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-display leading-[0.85] text-[20vw] md:text-[14vw] text-outline"
          >
            SO
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="font-display leading-[0.85] text-[20vw] md:text-[14vw] text-slime ml-[10vw]"
          >
            MUCH
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="font-display leading-[0.85] text-[20vw] md:text-[14vw] text-outline-white"
          >
            FUN
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#tracks"
              className="inline-flex items-center gap-2 bg-slime text-black font-bold px-6 py-3 uppercase tracking-widest text-sm hover:bg-white transition"
            >
              <Music size={16} /> Stream Now
            </a>
            <a
              href="#video"
              className="inline-flex items-center gap-2 border border-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition"
            >
              <Play size={16} /> Watch Video
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 max-w-md text-white/60 text-sm leading-relaxed"
          >
            The third studio album from Young Thug. 19 tracks. Features Gunna, Lil Baby,
            J. Cole, Travis Scott, Future, Juice WRLD, 21 Savage and more.
          </motion.p>
        </div>

        <div className="md:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full aspect-square max-w-md animate-float"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slime via-slime/40 to-black" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.3) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="font-display text-3xl text-black">YSL</div>
                <div className="text-[10px] uppercase tracking-widest text-black/70">
                  300 ENT
                </div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl leading-[0.9] text-black">
                  SO
                  <br />
                  MUCH
                  <br />
                  FUN
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-widest text-black/70">
                  Young Thug · 2019
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-slime animate-spin-slow flex items-center justify-center">
              <div className="font-display text-slime text-xs">PLAY · PLAY · PLAY ·</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </section>
  )
}

function Tracklist() {
  const [hovered, setHovered] = useState(null)
  return (
    <section id="tracks" className="px-6 md:px-12 py-24 border-t border-white/10">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-slime mb-3">01 — Tracklist</div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            18 <span className="text-outline">TRACKS</span>
          </h2>
        </div>
        <div className="hidden md:block text-xs uppercase tracking-widest text-white/40">
          ▶ Hover to feel it
        </div>
      </div>

      <div className="divide-y divide-white/10 border-y border-white/10">
        {TRACKS.map((t, i) => {
          const active = hovered === i
          return (
            <div
              key={t.n}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group grid grid-cols-12 items-center gap-4 px-4 md:px-6 py-5 cursor-pointer transition-all duration-300 ${
                active ? accentClass(i) : 'text-white'
              }`}
            >
              <div
                className={`col-span-2 md:col-span-1 font-display text-3xl md:text-5xl ${
                  active ? 'text-black' : 'text-white/15'
                }`}
              >
                {String(t.n).padStart(2, '0')}
              </div>
              <div className="col-span-7 md:col-span-8">
                <div className="font-display text-lg md:text-2xl tracking-wide">
                  {t.title.toUpperCase()}
                </div>
                {t.feat && (
                  <div
                    className={`text-xs md:text-sm uppercase tracking-widest ${
                      active ? 'text-black/70' : 'text-white/40'
                    }`}
                  >
                    feat. {t.feat}
                  </div>
                )}
              </div>
              <div
                className={`col-span-2 md:col-span-2 text-sm tabular-nums ${
                  active ? 'text-black/70' : 'text-white/40'
                }`}
              >
                {`${2 + (i % 3)}:${String(10 + ((i * 7) % 50)).padStart(2, '0')}`}
              </div>
              <div className="col-span-1 flex justify-end">
                <Play
                  size={20}
                  className={`transition ${active ? 'opacity-100' : 'opacity-30'}`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Video() {
  const [playing, setPlaying] = useState(false)
  return (
    <section id="video" className="px-6 md:px-12 py-24 border-t border-white/10">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-pink mb-3">02 — Video</div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            THE <span className="text-outline-pink">LONDON</span>
          </h2>
          <div className="mt-3 text-white/60 text-sm uppercase tracking-widest">
            feat. J. Cole &amp; Travis Scott
          </div>
        </div>
        <div className="hidden md:block text-right">
          <div className="font-display text-2xl">100M+</div>
          <div className="text-xs uppercase tracking-widest text-white/40">Views</div>
        </div>
      </div>

      <div className="relative aspect-video w-full bg-black border border-white/10 overflow-hidden">
        {playing ? (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Zo_DmFSxRvk?autoplay=1"
            title="The London"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 group"
            aria-label="Play video"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink/30 via-black to-slime/20" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-slime" />
            <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-slime" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-slime" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-slime" />
            <div className="relative h-full flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-slime text-black flex items-center justify-center group-hover:scale-110 transition">
                <Play size={36} fill="currentColor" />
              </div>
              <div className="font-display text-2xl md:text-4xl">THE LONDON</div>
              <div className="text-xs uppercase tracking-widest text-white/60">
                Click to play
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  )
}

function Tour() {
  return (
    <section id="tour" className="px-6 md:px-12 py-24 border-t border-white/10">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-blue mb-3">03 — Tour</div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            SO MUCH FUN <span className="text-outline">TOUR</span>
          </h2>
        </div>
        <Calendar className="hidden md:block text-white/30" size={48} />
      </div>

      <div className="divide-y divide-white/10 border-y border-white/10">
        {TOUR.map((d, i) => (
          <div
            key={i}
            className="grid grid-cols-12 items-center gap-4 px-4 md:px-6 py-6 hover:bg-white/[0.02] transition"
          >
            <div className="col-span-3 md:col-span-2 font-display text-xl md:text-2xl">
              {d.date}
            </div>
            <div className="col-span-5 md:col-span-5">
              <div className="font-display text-lg md:text-xl uppercase">{d.city}</div>
              <div className="text-xs md:text-sm text-white/40 uppercase tracking-wider">
                {d.venue}
              </div>
            </div>
            <div className="col-span-4 md:col-span-5 flex justify-end">
              {d.sold ? (
                <span className="bg-pink text-black px-4 py-2 text-xs uppercase tracking-widest font-bold">
                  Sold Out
                </span>
              ) : (
                <button className="bg-slime text-black px-4 py-2 text-xs uppercase tracking-widest font-bold hover:bg-white transition inline-flex items-center gap-2">
                  Tickets <ArrowUpRight size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Merch() {
  return (
    <section id="merch" className="px-6 md:px-12 py-24 border-t border-white/10">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-yellow mb-3">04 — Merch</div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            SHOP <span className="text-outline">YSL</span>
          </h2>
        </div>
        <ShoppingBag className="hidden md:block text-white/30" size={48} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MERCH.map((m, i) => (
          <div
            key={i}
            className="group relative transition-transform duration-300 hover:-translate-y-2"
          >
            <div
              className={`relative aspect-square ${m.bg} flex items-center justify-center overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className={`relative text-center px-4 ${m.text}`}>
                <div className="font-display text-3xl md:text-4xl leading-tight">
                  {m.name.split(' ').slice(0, -1).join(' ')}
                </div>
                <div className="font-display text-3xl md:text-4xl leading-tight">
                  {m.name.split(' ').slice(-1)[0]}
                </div>
              </div>
              <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest opacity-60">
                YSL · 2019
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="font-display text-lg">{m.name}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">
                  Official Merch
                </div>
              </div>
              <div className="font-display text-2xl text-slime">{m.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="px-6 md:px-12 py-20">
        <div className="font-display leading-[0.85] text-[24vw] md:text-[18vw]">
          <div className="text-outline">YOUNG</div>
          <div className="text-slime ml-[5vw]">THUG</div>
        </div>
      </div>

      <MarqueeStrip accent="bg-pink" textColor="text-black" />

      <div className="px-6 md:px-12 py-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-slime hover:text-black hover:border-slime transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-slime hover:text-black hover:border-slime transition"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-slime hover:text-black hover:border-slime transition"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
        </div>

        <div className="text-center text-xs uppercase tracking-widest text-white/40">
          Concept site. Not affiliated with Young Thug or YSL Records.
          <br />
          Design by{' '}
          <a href="https://sahari.io" className="text-slime hover:underline">
            sahari.io
          </a>
        </div>

        <div className="text-right text-xs uppercase tracking-widest text-white/40">
          © 2026 — All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <Hero />
      <MarqueeStrip />
      <Tracklist />
      <Video />
      <Tour />
      <Merch />
      <Footer />
    </div>
  )
}
