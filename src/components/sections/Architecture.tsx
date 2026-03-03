import { Check, X } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import SectionLabel from '../ui/SectionLabel'

interface Spec {
  label: string
  value: string
}

const specs: Spec[] = [
  { label: 'Network', value: 'Noor Network (appchain on Aventus)' },
  { label: 'Consensus', value: 'Optimistic validation with fraud proofs' },
  { label: 'Token', value: 'NOOR — staking, gas, and governance' },
  { label: 'On-Chain Data', value: 'Attestation hashes, quorum signatures, timestamps' },
  { label: 'Privacy', value: 'Zero site content stored on-chain — hashes only' },
]

const onChain = [
  'Attestation hash (SHA-256)',
  'Quorum validator signatures',
  'Block timestamp',
  'Domain identifier (hashed)',
  'Integrity score',
]

const offChain = [
  'Website content or screenshots',
  'DOM structure or source code',
  'User data or PII',
  'API keys or credentials',
  'Internal infrastructure details',
]

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Purpose-built blockchain infrastructure
          </h2>
          <p className="text-noor-grey1 text-lg max-w-2xl mb-16 leading-relaxed">
            Noor Network is a purpose-built chain for web integrity attestation — optimised
            for throughput, finality, and verifiability.
          </p>
        </ScrollReveal>

        {/* Specs grid */}
        <ScrollReveal>
          <div className="bg-noor-card border border-noor-card-border rounded-lg overflow-hidden mb-16">
            {specs.map((spec) => (
              <div key={spec.label} className="flex border-b border-noor-card-border last:border-b-0">
                <div className="w-40 sm:w-48 shrink-0 p-4 text-sm font-medium text-noor-grey1 bg-noor-card-hover">
                  {spec.label}
                </div>
                <div className="p-4 text-sm text-white">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* On-chain vs Off-chain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="bg-noor-card border border-noor-card-border rounded-lg p-6 h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-6">
                What goes on-chain
              </h3>
              <ul className="space-y-3">
                {onChain.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-noor-grey1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-noor-card border border-noor-card-border rounded-lg p-6 h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-6">
                What never goes on-chain
              </h3>
              <ul className="space-y-3">
                {offChain.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-noor-grey1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
