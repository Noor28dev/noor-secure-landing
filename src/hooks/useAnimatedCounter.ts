import { useEffect, useState } from 'react'
import { useSpring, useTransform } from 'framer-motion'

export function useAnimatedCounter(target: number, active: boolean): number {
  const spring = useSpring(0, { stiffness: 80, damping: 20 })
  const display = useTransform(spring, (v) => Math.round(v))
  const [rendered, setRendered] = useState(0)

  useEffect(() => {
    if (active) spring.set(target)
  }, [active, target, spring])

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => setRendered(v))
    return unsubscribe
  }, [display])

  return rendered
}
