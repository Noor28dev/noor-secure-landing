import { ShieldCheck, AlertTriangle, XOctagon } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import IntegrityGauge from '../ui/IntegrityGauge'
import type { LucideIcon } from 'lucide-react'

interface StateCard {
  icon: LucideIcon
  range: string
  label: string
  description: string
  color: string
  borderColor: string
}

const states: StateCard[] = [
  {
    icon: ShieldCheck,
    range: '90–100',
    label: 'OK',
    description: 'Normal operations. All layers verified.',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
  },
  {
    icon: AlertTriangle,
    range: '60–89',
    label: 'WARN',
    description: 'Drift detected. Investigate.',
    color: 'text-amber-400',
    borderColor: 'border-amber-400/20',
  },
  {
    icon: XOctagon,
    range: '0–59',
    label: 'UNSAFE',
    description: 'Potential compromise. Automated response triggered.',
    color: 'text-red-400',
    borderColor: 'border-red-400/20',
  },
]

export default function IntegrityScore() {
  return (
    <section id="integrity-score" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Complex verification. Simple answer.
            </h2>
            <p className="text-noor-grey1 text-lg max-w-xl mx-auto">
              Every attestation cycle produces a single integrity score — a real-time
              trust signal for your entire web presence.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex justify-center mb-16">
            <IntegrityGauge targetScore={98} />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {states.map((state, i) => {
            const Icon = state.icon
            return (
              <ScrollReveal key={state.label} delay={i * 0.15}>
                <div className={`bg-noor-card border ${state.borderColor} rounded-lg p-6 h-full`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className={state.color} />
                    <span className={`text-sm font-bold ${state.color}`}>{state.label}</span>
                    <span className="text-xs text-noor-grey2 ml-auto">{state.range}</span>
                  </div>
                  <p className="text-sm text-noor-grey1">{state.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="bg-noor-card border border-noor-card-border rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-sm text-noor-grey1 leading-relaxed">
              <span className="text-noor-teal font-medium">Smart drift detection: </span>
              PageAttest distinguishes between routine deployments and malicious injections
              by tracking authorised deployment windows, CI/CD signatures, and progressive
              rollout patterns — so your team isn't buried in false positives.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
