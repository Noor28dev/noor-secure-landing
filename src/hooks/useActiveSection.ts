import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'hero',
  'problem',
  'how-it-works',
  'integrity-score',
  'why-decentralised',
  'compliance',
  'enterprise',
  'architecture',
  'cta',
]

export function useActiveSection(): string {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return active
}
