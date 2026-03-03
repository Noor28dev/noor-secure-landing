import { useEffect, useRef, useState } from 'react'
import { useSpring, useTransform, motion, useInView } from 'framer-motion'

const ARC_LENGTH = 2 * Math.PI * 50 * (270 / 360)
const FULL_CIRCUMFERENCE = 2 * Math.PI * 50

interface IntegrityGaugeProps {
  targetScore?: number
}

export default function IntegrityGauge({ targetScore = 98 }: IntegrityGaugeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const springValue = useSpring(0, { stiffness: 80, damping: 20 })
  const displayScore = useTransform(springValue, (v) => Math.round(v))
  const dashOffset = useTransform(springValue, (v) => ARC_LENGTH * (1 - v / 100))
  const [rendered, setRendered] = useState(0)
  const [currentOffset, setCurrentOffset] = useState(ARC_LENGTH)

  useEffect(() => {
    if (inView) springValue.set(targetScore)
  }, [inView, targetScore, springValue])

  useEffect(() => {
    const unsub1 = displayScore.on('change', (v) => setRendered(v))
    const unsub2 = dashOffset.on('change', (v) => setCurrentOffset(v))
    return () => { unsub1(); unsub2() }
  }, [displayScore, dashOffset])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg viewBox="0 0 120 120" className="w-full max-w-[280px]">
        <defs>
          <filter id="landing-gauge-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Background arc */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#2A3332"
          strokeWidth="8"
          strokeDasharray={`${ARC_LENGTH} ${FULL_CIRCUMFERENCE}`}
          transform="rotate(-225 60 60)"
        />
        {/* Glow arc */}
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#81D8D0"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${ARC_LENGTH} ${FULL_CIRCUMFERENCE}`}
          strokeDashoffset={currentOffset}
          transform="rotate(-225 60 60)"
          filter="url(#landing-gauge-glow)"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Foreground arc */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#81D8D0"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${ARC_LENGTH} ${FULL_CIRCUMFERENCE}`}
          strokeDashoffset={currentOffset}
          transform="rotate(-225 60 60)"
        />
        {/* Score text */}
        <text
          x="60"
          y="58"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-bold"
          fontSize="28"
        >
          {rendered}
        </text>
        <text
          x="60"
          y="76"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-noor-grey1"
          fontSize="10"
        >
          /100
        </text>
      </svg>
    </div>
  )
}
