import { Globe, Bug, MapPin } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import SectionLabel from '../ui/SectionLabel'
import type { LucideIcon } from 'lucide-react'

interface AttackCard {
  icon: LucideIcon
  title: string
  description: string
}

const attacks: AttackCard[] = [
  {
    icon: Globe,
    title: 'DNS Hijack',
    description:
      'Silent misdirection to attacker infrastructure. Your users see a perfect clone — served from a server you don\'t control.',
  },
  {
    icon: Bug,
    title: 'Magecart Injection',
    description:
      'Supply-chain skimmers injected through compromised third-party scripts. Payment data exfiltrated in real time.',
  },
  {
    icon: MapPin,
    title: 'Geo-Targeted Clones',
    description:
      'Legitimate users see the real site. Targeted regions see a weaponised copy — invisible to your monitoring.',
  },
]

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      className="relative py-24 scroll-mt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(129,216,208,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(129,216,208,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            HTTPS secures the connection.{' '}
            <br className="hidden sm:block" />
            Nothing secures the content.
          </h2>
          <p className="text-noor-grey1 text-lg max-w-2xl mb-16 leading-relaxed">
            The average enterprise website loads 15–40+ third-party scripts. Any one of them
            can be compromised, injected, or swapped — and your TLS certificate won't catch it.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {attacks.map((attack, i) => {
            const Icon = attack.icon
            return (
              <ScrollReveal key={attack.title} delay={i * 0.15}>
                <div className="bg-noor-card border border-noor-card-border rounded-lg p-6 hover:-translate-y-1 transition-transform h-full">
                  <Icon size={28} className="text-noor-teal mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{attack.title}</h3>
                  <p className="text-noor-grey1 text-sm leading-relaxed">{attack.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
