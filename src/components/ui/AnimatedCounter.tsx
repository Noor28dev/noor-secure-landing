import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  className?: string
}

export default function AnimatedCounter({ target, suffix = '', className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const value = useAnimatedCounter(target, inView)

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}{suffix}
    </span>
  )
}
