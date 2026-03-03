import { motion } from 'framer-motion'

const NODES = [
  { cx: 80, cy: 60 }, { cx: 720, cy: 50 }, { cx: 40, cy: 250 },
  { cx: 760, cy: 240 }, { cx: 90, cy: 440 }, { cx: 710, cy: 430 },
  { cx: 20, cy: 150 }, { cx: 780, cy: 150 }, { cx: 50, cy: 350 },
  { cx: 750, cy: 350 }, { cx: 150, cy: 30 }, { cx: 650, cy: 30 },
  { cx: 150, cy: 470 }, { cx: 650, cy: 470 }, { cx: 30, cy: 60 },
  { cx: 770, cy: 440 },
]

const LINES = [
  [0, 6], [1, 7], [2, 8], [3, 9], [4, 12], [5, 13],
  [6, 2], [7, 3], [8, 4], [9, 5], [10, 0], [11, 1],
  [14, 0], [15, 5],
]

export default function HeroVisual() {
  return (
    <motion.svg
      viewBox="0 0 800 500"
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ willChange: 'transform' }}
    >
      <defs>
        <filter id="hero-glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Constellation lines */}
      {LINES.map(([a, b], i) => (
        <motion.line
          key={`line-${i}`}
          x1={NODES[a].cx}
          y1={NODES[a].cy}
          x2={NODES[b].cx}
          y2={NODES[b].cy}
          stroke="#81D8D0"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          animate={{ strokeOpacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Browser frame */}
      <rect x="180" y="70" width="440" height="340" rx="8" fill="#1E2625" stroke="#2A3332" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="180" y="70" width="440" height="32" rx="8" fill="#242B2A" />
      <rect x="180" y="94" width="440" height="8" fill="#242B2A" />
      {/* Traffic lights */}
      <circle cx="200" cy="86" r="4" fill="#f87171" />
      <circle cx="214" cy="86" r="4" fill="#facc15" />
      <circle cx="228" cy="86" r="4" fill="#34d399" />
      {/* URL bar */}
      <rect x="250" y="78" width="200" height="16" rx="4" fill="#1B2120" />
      <text x="265" y="90" fontSize="8" fill="#8E9492" fontFamily="Inter, sans-serif">noor28.com</text>

      {/* Content placeholder lines */}
      <rect x="210" y="125" width="180" height="8" rx="2" fill="#2A3332" />
      <rect x="210" y="145" width="280" height="6" rx="2" fill="#242B2A" />
      <rect x="210" y="160" width="250" height="6" rx="2" fill="#242B2A" />
      <rect x="210" y="175" width="260" height="6" rx="2" fill="#242B2A" />
      <rect x="210" y="200" width="160" height="80" rx="4" fill="#242B2A" />
      <rect x="385" y="200" width="160" height="80" rx="4" fill="#242B2A" />
      <rect x="210" y="295" width="280" height="6" rx="2" fill="#242B2A" />
      <rect x="210" y="310" width="220" height="6" rx="2" fill="#242B2A" />
      <rect x="210" y="340" width="100" height="28" rx="4" fill="#2A3332" />

      {/* Shield scan sweep */}
      <motion.g
        filter="url(#hero-glow)"
        animate={{ x: [-60, 460, -60] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        <path
          d="M200 150 L200 120 Q216 108 232 120 L232 150 Q216 172 200 150Z"
          fill="none"
          stroke="#81D8D0"
          strokeWidth="2"
          opacity="0.8"
        />
        <line x1="216" y1="108" x2="216" y2="410" stroke="#81D8D0" strokeWidth="1" opacity="0.15" />
      </motion.g>

      {/* Constellation nodes */}
      {NODES.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.cx}
          cy={node.cy}
          r="3"
          fill="#81D8D0"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </motion.svg>
  )
}
