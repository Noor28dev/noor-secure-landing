import { useRef } from 'react'
import { useInView } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import SectionLabel from '../ui/SectionLabel'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'

interface ComparisonRow {
  aspect: string
  centralised: string
  pageattest: string
}

const rows: ComparisonRow[] = [
  { aspect: 'Operator', centralised: 'Single company', pageattest: 'Three independent layers' },
  { aspect: 'Scan Origins', centralised: 'Known IPs, predictable', pageattest: '30,000+ diverse IPs, unpredictable' },
  { aspect: 'Trust Model', centralised: 'Trust the vendor', pageattest: 'Trust mathematics (quorum consensus)' },
  { aspect: 'Tamper Evidence', centralised: 'Internal logs (editable)', pageattest: 'On-chain commitment (immutable)' },
  { aspect: 'Single Point of Failure', centralised: 'Yes', pageattest: 'No' },
]

interface StatItem {
  target: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { target: 30000, suffix: '', label: 'Independent Verifier Nodes' },
  { target: 250, suffix: '+', label: 'Quorum Consensus Threshold' },
  { target: 0, suffix: '', label: 'Single Points of Failure' },
]

function AnimatedStat({ target, suffix, label }: StatItem) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const value = useAnimatedCounter(target, inView)

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl font-bold font-mono text-noor-teal mb-2">
        {value.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-noor-grey1">{label}</p>
    </div>
  )
}

export default function WhyDecentralised() {
  return (
    <section id="why-decentralised" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionLabel>Why Decentralised</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            If the same entity scans and validates,{' '}
            <br className="hidden sm:block" />
            who watches the watchman?
          </h2>
          <p className="text-noor-grey1 text-lg max-w-2xl mb-16 leading-relaxed">
            Centralised monitoring creates a single point of trust — and a single point
            of compromise. PageAttest eliminates both.
          </p>
        </ScrollReveal>

        {/* Comparison table */}
        <ScrollReveal>
          <div className="bg-noor-card border border-noor-card-border rounded-lg overflow-hidden mb-20">
            {/* Header */}
            <div className="grid grid-cols-3 bg-noor-card-hover">
              <div className="p-4 text-xs font-semibold uppercase tracking-wider text-noor-grey2" />
              <div className="p-4 text-xs font-semibold uppercase tracking-wider text-red-400/80 text-center">
                Centralised
              </div>
              <div className="p-4 text-xs font-semibold uppercase tracking-wider text-noor-teal text-center">
                PageAttest
              </div>
            </div>
            {/* Rows */}
            {rows.map((row) => (
              <div key={row.aspect} className="grid grid-cols-3 border-t border-noor-card-border">
                <div className="p-4 text-sm font-medium text-white">{row.aspect}</div>
                <div className="p-4 text-sm text-noor-grey2 text-center">{row.centralised}</div>
                <div className="p-4 text-sm text-noor-grey1 text-center">{row.pageattest}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Animated stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label}>
              <AnimatedStat {...stat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
