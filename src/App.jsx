import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ShoppingBag, MapPin, ChevronRight } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const TRACKS = [
  { n: '01', title: 'Just How It Is',         feat: null },
  { n: '02', title: 'Sup Mate',               feat: 'Future' },
  { n: '03', title: 'Ecstasy',                feat: 'Machine Gun Kelly' },
  { n: '04', title: 'Hot',                    feat: 'Gunna' },
  { n: '05', title: 'Light It Up',            feat: null },
  { n: '06', title: 'Surf',                   feat: 'Gunna' },
  { n: '07', title: 'Bad Bad Bad',            feat: 'Lil Baby' },
  { n: '08', title: 'Lil Baby',               feat: null },
  { n: '09', title: "What's the Move",        feat: 'Lil Uzi Vert' },
  { n: '10', title: 'I Bought Her',           feat: 'Lil Duke' },
  { n: '11', title: 'Jumped Out the Window',  feat: null },
  { n: '12', title: "I'm Scared",             feat: '21 Savage & Doe Boy' },
  { n: '13', title: 'Cartier Gucci Scarf',    feat: 'Lil Duke' },
  { n: '14', title: 'Big Tipper',             feat: 'Lil Keed' },
  { n: '15', title: 'Pussy',                  feat: null },
  { n: '16', title: 'Circle of Bosses',       feat: 'Quavo' },
  { n: '17', title: 'Mannequin Challenge',    feat: 'Juice WRLD' },
  { n: '18', title: 'Boy Back',               feat: 'Nav' },
  { n: '19', title: 'The London',             feat: 'J. Cole & Travis Scott' },
]

const SPOTIFY_ALBUM_ID = '1bnHPO4dKK7IjvgrtVBcQh'

const COLORS = ['#A8E847', '#FF2EC1', '#1E90FF', '#FFD700', '#FF6B35', '#B8F']

const TOUR = [
  { date: 'AUG 16', city: 'ATLANTA, GA',        venue: 'State Farm Arena',         sold: true  },
  { date: 'AUG 20', city: 'NEW YORK, NY',       venue: 'Madison Square Garden',    sold: true  },
  { date: 'AUG 24', city: 'LOS ANGELES, CA',    venue: 'Crypto.com Arena',         sold: true  },
  { date: 'SEP 03', city: 'CHICAGO, IL',        venue: 'United Center',            sold: true  },
  { date: 'SEP 07', city: 'HOUSTON, TX',        venue: 'Toyota Center',            sold: false },
  { date: 'SEP 12', city: 'MIAMI, FL',          venue: 'Kaseya Center',            sold: false },
  { date: 'SEP 18', city: 'TORONTO, ON',        venue: 'Scotiabank Arena',         sold: true  },
  { date: 'SEP 25', city: 'LONDON, UK',         venue: 'The O2 Arena',             sold: false },
  { date: 'OCT 02', city: 'PARIS, FR',          venue: 'Accor Arena',              sold: false },
  { date: 'OCT 09', city: 'AMSTERDAM, NL',      venue: 'Ziggo Dome',               sold: false },
]

const MERCH = [
  { name: 'SO MUCH FUN HOODIE',  price: '$85',  color: '#A8E847', textColor: '#000' },
  { name: 'YSL LOGO TEE',        price: '$45',  color: '#FF2EC1', textColor: '#fff' },
  { name: 'SLIME SEASON CAP',    price: '$35',  color: '#000',    textColor: '#A8E847', border: '#A8E847' },
  { name: 'TOUR CREWNECK',       price: '$75',  color: '#1E90FF', textColor: '#fff' },
]

// ─── Components ──────────────────────────────────────────────────────────────

function Marquee() {
  const text = '  SO MUCH FUN  ·  YOUNG THUG  ·  YSL  ·  300 ENTERTAINMENT  ·  19 TRACKS  ·  2019  ·'
  const repeated = text.repeat(6)
  return (
    <div className="overflow-hidden border-y border-slime/30 py-3 bg-black">
      <div className="animate-marquee text-slime font-display text-sm tracking-widest">
        {repeated}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black noise">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-slime/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink/10 blur-[100px] pointer-events-none" />

      {/* Nav */}
      <div className="relative z-10 flex items-center justify-between px-8 pt-8">
        <div className="font-display text-slime text-sm tracking-widest">YSL · 300 ENT</div>
        <div className="flex gap-6 text-xs font-body tracking-widest text-white/50 uppercase">
          <a href="#tracks" className="hover:text-slime transition-colors">Tracks</a>
          <a href="#video"  className="hover:text-slime transition-colors">Video</a>
          <a href="#tour"   className="hover:text-slime transition-colors">Tour</a>
          <a href="#merch"  className="hover:text-slime transition-colors">Merch</a>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-8 flex-1">
        {/* Left: Title stack */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-white/40 tracking-[0.4em] text-xs uppercase mb-6"
          >
            Young Thug · August 16, 2019
          </motion.p>

          <div className="font-display leading-none">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-outline text-[18vw] lg:text-[14vw] block"
            >
              SO
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slime text-[18vw] lg:text-[14vw] block"
            >
              MUCH
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-outline-white text-[18vw] lg:text-[14vw] block"
            >
              FUN
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="https://open.spotify.com/album/1bnHPO4dKK7IjvgrtVBcQh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slime text-black font-body font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors"
            >
              <Play size={14} fill="currentColor" />
              Stream Now
            </a>
            <a
              href="#video"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-body text-sm uppercase tracking-widest hover:border-slime hover:text-slime transition-colors"
            >
              Watch Video
              <ChevronRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Right: Album art */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 w-72 h-72 lg:w-[420px] lg:h-[420px] mt-12 lg:mt-0 relative animate-float"
        >
          <div className="w-full h-full relative overflow-hidden shadow-2xl shadow-slime/30">
            <img
              src="/album-cover.jpg"
              alt="So Much Fun album cover"
              className="w-full h-full object-cover"
            />
            {/* Corner accents */}
            <div className="absolute top-4 right-4 w-16 h-16 border-2 border-pink rotate-12 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-10 h-10 bg-slime pointer-events-none" />
          </div>
          {/* Glow */}
          <div className="absolute -inset-4 bg-slime/20 blur-2xl -z-10 rounded-full" />
          {/* Cutout overlay */}
          <img
            src="/youngthug3-nobg.png"
            alt=""
            className="hidden lg:block absolute -left-32 -bottom-12 w-64 h-auto pointer-events-none z-20 drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Bottom label row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 px-8 pb-6 flex items-center gap-4 text-white/20 text-xs font-body tracking-widest uppercase"
      >
        <span>19 Tracks</span>
        <span className="text-slime">·</span>
        <span>YSL Records</span>
        <span className="text-slime">·</span>
        <span>300 Entertainment</span>
        <span className="text-slime">·</span>
        <span>Atlantic Records</span>
      </motion.div>
    </section>
  )
}

function Tracklist() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <section id="tracks" className="bg-black py-24 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-slime/60 font-body text-xs tracking-[0.4em] uppercase mb-2">Full Tracklist</p>
            <h2 className="font-display text-6xl lg:text-8xl text-outline leading-none">19</h2>
            <h2 className="font-display text-6xl lg:text-8xl text-white leading-none -mt-2">TRACKS</h2>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="text-right text-white/20 text-xs font-body">
              <div>YOUNG THUG</div>
              <div>SO MUCH FUN</div>
              <div>2019</div>
            </div>
            <button
              onClick={() => setShowPlayer(s => !s)}
              className="flex items-center gap-2 px-4 py-2 border border-slime/40 text-slime font-body text-xs uppercase tracking-widest hover:bg-slime hover:text-black transition-all"
            >
              <Play size={10} fill="currentColor" />
              {showPlayer ? 'Hide Player' : 'Play Album'}
            </button>
          </div>
        </div>

        {/* Spotify embed player */}
        {showPlayer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-8 overflow-hidden"
          >
            <iframe
              src={`https://open.spotify.com/embed/album/${SPOTIFY_ALBUM_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </motion.div>
        )}

        {/* Track rows */}
        <div className="divide-y divide-white/5">
          {TRACKS.map((track, i) => {
            const color = COLORS[i % COLORS.length]
            const isHovered = hoveredIdx === i
            return (
              <motion.div
                key={track.n}
                onHoverStart={() => setHoveredIdx(i)}
                onHoverEnd={() => setHoveredIdx(null)}
                className="flex items-center gap-6 py-4 cursor-default group transition-all duration-150"
                style={{ backgroundColor: isHovered ? `${color}12` : 'transparent' }}
              >
                <span
                  className="font-display text-4xl w-14 text-right flex-shrink-0 transition-colors duration-150"
                  style={{ color: isHovered ? color : 'rgba(255,255,255,0.08)' }}
                >
                  {track.n}
                </span>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-body font-semibold text-lg transition-colors duration-150 truncate"
                    style={{ color: isHovered ? color : '#fff' }}
                  >
                    {track.title}
                  </div>
                  {track.feat && (
                    <div className="text-white/30 text-xs font-body uppercase tracking-wider mt-0.5">
                      feat. {track.feat}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setShowPlayer(true)}
                  className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  style={{ borderColor: color }}
                  title={`Play ${track.title} on Spotify`}
                >
                  <Play size={10} fill={color} color={color} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AboutAlbum() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/youngthug1.jpg"
          alt=""
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto lg:mx-0 lg:ml-16 px-8 lg:px-16 py-24">
        <p className="text-slime/80 font-body text-xs tracking-[0.4em] uppercase mb-4">The Album</p>
        <h2 className="font-display text-5xl lg:text-7xl text-white leading-[0.9] mb-8">
          PURE <span className="text-outline">FUN</span><br />
          NO <span className="text-slime">FILLER</span>
        </h2>
        <p className="text-white/70 font-body text-lg leading-relaxed max-w-xl mb-6">
          Nineteen tracks deep, "So Much Fun" debuted at #1 on the Billboard 200 — Young Thug's first number one album. A definitive snapshot of late-2010s Atlanta, stacked with features from Future, Gunna, Lil Baby, Travis Scott, J. Cole and more.
        </p>
        <div className="flex flex-wrap gap-6 text-xs font-body tracking-widest uppercase text-white/40">
          <div>
            <div className="text-slime text-2xl font-display mb-1">#1</div>
            <div>Billboard 200</div>
          </div>
          <div>
            <div className="text-slime text-2xl font-display mb-1">131K</div>
            <div>First Week</div>
          </div>
          <div>
            <div className="text-slime text-2xl font-display mb-1">2x</div>
            <div>Platinum</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DeluxeEdition() {
  return (
    <section className="bg-black py-24 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-slime/60 font-body text-xs tracking-[0.4em] uppercase mb-2">Two Editions</p>
          <h2 className="font-display text-5xl lg:text-7xl">
            <span className="text-white">STANDARD</span>
            <span className="text-outline-pink"> / </span>
            <span className="text-white">DELUXE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group"
          >
            <div className="aspect-square overflow-hidden shadow-xl shadow-slime/20 mb-4">
              <img
                src="/album-cover.jpg"
                alt="So Much Fun"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <div className="font-display text-2xl text-white">SO MUCH FUN</div>
                <div className="text-white/40 font-body text-xs tracking-widest uppercase mt-1">Standard · 19 tracks</div>
              </div>
              <div className="text-slime font-body text-xs tracking-widest uppercase">2019</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="group"
          >
            <div className="aspect-square overflow-hidden shadow-xl shadow-pink/20 mb-4">
              <img
                src="/album-cover-deluxe.jpg"
                alt="So Much Fun Deluxe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <div className="font-display text-2xl text-white">DELUXE EDITION</div>
                <div className="text-white/40 font-body text-xs tracking-widest uppercase mt-1">+ Bonus tracks</div>
              </div>
              <div className="text-pink font-body text-xs tracking-widest uppercase">2019</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="video" className="bg-black py-24 px-8 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slime/3 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-slime/60 font-body text-xs tracking-[0.4em] uppercase mb-2">Featured Video</p>
          <h2 className="font-display text-5xl lg:text-7xl">
            <span className="text-white">THE </span>
            <span className="text-outline-pink">LONDON</span>
          </h2>
          <p className="text-white/30 font-body text-sm mt-2 tracking-wider">ft. J. Cole & Travis Scott</p>
        </div>

        <div className="relative aspect-video bg-zinc-900 overflow-hidden group">
          {!playing ? (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://img.youtube.com/vi/G8Hp-AKrfm0/maxresdefault.jpg"
                  alt="The London music video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPlaying(true)}
                  className="relative z-10 w-24 h-24 rounded-full bg-slime flex items-center justify-center shadow-lg shadow-slime/40"
                >
                  <Play size={32} fill="#000" color="#000" className="ml-1" />
                </motion.button>
                <div className="absolute bottom-6 left-6 text-white/60 font-body text-xs uppercase tracking-widest z-10">
                  Official Music Video
                </div>
              </div>
            </>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/G8Hp-AKrfm0?autoplay=1"
              title="The London"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-slime/40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-pink/40 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

function TourDates() {
  return (
    <section id="tour" className="bg-black py-24 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-slime/60 font-body text-xs tracking-[0.4em] uppercase mb-2">Live Dates</p>
          <h2 className="font-display text-5xl lg:text-7xl">
            <span className="text-outline">SO MUCH</span>
            <br />
            <span className="text-white">FUN TOUR</span>
          </h2>
          <p className="text-white/30 font-body text-sm mt-3 tracking-wider">2019 World Tour</p>
        </div>

        <div className="space-y-1">
          {TOUR.map((show, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 lg:gap-8 py-5 border-b border-white/5 group"
            >
              <span className="font-display text-slime text-sm w-16 flex-shrink-0">{show.date}</span>
              <div className="flex-1 min-w-0">
                <div className="font-body font-semibold text-white group-hover:text-slime transition-colors truncate">
                  {show.city}
                </div>
                <div className="text-white/30 text-xs font-body flex items-center gap-1 mt-0.5">
                  <MapPin size={10} />
                  {show.venue}
                </div>
              </div>
              {show.sold ? (
                <span className="flex-shrink-0 px-3 py-1 text-[10px] font-body font-bold uppercase tracking-widest bg-pink/10 text-pink border border-pink/30">
                  Sold Out
                </span>
              ) : (
                <a
                  href="#"
                  className="flex-shrink-0 px-4 py-1.5 text-[10px] font-body font-bold uppercase tracking-widest bg-slime text-black hover:bg-white transition-colors"
                >
                  Tickets
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Merch() {
  return (
    <section id="merch" className="bg-black py-24 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-slime/60 font-body text-xs tracking-[0.4em] uppercase mb-2">Official Store</p>
          <h2 className="font-display text-5xl lg:text-7xl">
            <span className="text-white">MERCH</span>
            <span className="text-outline ml-4">DROP</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {MERCH.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div
                className="aspect-square flex items-center justify-center relative overflow-hidden mb-3"
                style={{
                  backgroundColor: item.color,
                  border: item.border ? `2px solid ${item.border}` : 'none',
                }}
              >
                {/* Product visual */}
                <div
                  className="font-display text-center px-4 leading-tight"
                  style={{ color: item.textColor }}
                >
                  <div className="text-xl">{item.name.split(' ').slice(0, 2).join('\n')}</div>
                  <ShoppingBag size={28} className="mx-auto mt-3 opacity-60" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end justify-end p-3">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                    View
                  </span>
                </div>
              </div>
              <div className="font-body">
                <div className="text-white text-sm font-semibold">{item.name}</div>
                <div className="text-slime text-sm font-bold mt-0.5">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-slime/20 py-12 px-8 lg:px-16">
      <Marquee />
      <div className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-display text-4xl text-slime leading-none">YOUNG</div>
          <div className="font-display text-4xl text-outline leading-none">THUG</div>
          <div className="text-white/20 font-body text-xs tracking-widest uppercase mt-3">
            YSL Records · 300 Entertainment · 2019
          </div>
        </div>

        <div className="flex flex-col gap-2 text-white/30 text-xs font-body tracking-widest uppercase">
          <a href="https://www.instagram.com/thuggerthugger1/" target="_blank" rel="noopener noreferrer" className="hover:text-slime transition-colors">Instagram</a>
          <a href="https://x.com/youngthug" target="_blank" rel="noopener noreferrer" className="hover:text-slime transition-colors">Twitter / X</a>
          <a href="https://www.youtube.com/channel/UCuwdplPbuTFZj_64d03tSBA" target="_blank" rel="noopener noreferrer" className="hover:text-slime transition-colors">YouTube</a>
        </div>

        <div className="text-right">
          <div className="text-white/40 font-body text-xs">
            Concept site. Not affiliated with Young Thug or YSL Records.
          </div>
          <div className="text-white/40 font-body text-xs mt-1">
            Design by <a href="https://sahari.io" className="text-slime hover:text-white transition-colors">sahari.io</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Marquee />
      <Tracklist />
      <AboutAlbum />
      <VideoSection />
      <TourDates />
      <DeluxeEdition />
      <Merch />
      <Footer />
    </div>
  )
}
