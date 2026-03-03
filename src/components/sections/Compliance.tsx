import { FileCheck, Shield, Lock } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import SectionLabel from '../ui/SectionLabel'
import type { LucideIcon } from 'lucide-react'

interface ComplianceCard {
  icon: LucideIcon
  code: string
  title: string
  description: string
}

const cards: ComplianceCard[] = [
  {
    icon: FileCheck,
    code: 'PCI DSS 6.4.3',
    title: 'Script Inventory & Authorisation',
    description:
      'Continuous inventory of all payment page scripts with integrity validation. Automated alerting on unauthorised additions or modifications.',
  },
  {
    icon: Shield,
    code: 'PCI DSS 11.6.1',
    title: 'Tamper Detection',
    description:
      'Real-time change and tamper detection for HTTP headers and payment page content. Immutable audit trail via on-chain attestation records.',
  },
  {
    icon: Lock,
    code: 'GDPR Article 32',
    title: 'Security of Processing',
    description:
      'Appropriate technical measures to ensure ongoing confidentiality and integrity of processing systems. Continuous verification and evidence generation.',
  },
]

export default function Compliance() {
  return (
    <section id="compliance" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionLabel>Compliance</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            PCI DSS v4.x compliance. Out of the box.
          </h2>
          <p className="text-noor-grey1 text-lg max-w-2xl mb-16 leading-relaxed">
            Noor Secure maps directly to the requirements your auditors are asking about — with
            cryptographic proof they can independently verify.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.code} delay={i * 0.15}>
                <div className="bg-noor-card border border-noor-card-border rounded-lg p-6 h-full">
                  <Icon size={24} className="text-noor-teal mb-4" />
                  <p className="text-xs font-mono text-noor-teal mb-2">{card.code}</p>
                  <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-sm text-noor-grey1 leading-relaxed">{card.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="bg-noor-card border border-red-400/20 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-sm text-noor-grey1 leading-relaxed">
              <span className="text-red-400 font-medium">Non-compliance cost: </span>
              PCI DSS fines up to $500,000 per incident. GDPR fines up to 4% of global
              annual turnover. Noor Secure provides continuous, verifiable evidence of
              compliance — not just point-in-time snapshots.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
