import { CreditCard, Code, ShieldCheck } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: CreditCard,
    title: 'Fiat Billing',
    description: 'Pay by invoice in USD, EUR, or GBP. No crypto wallet, no token purchases, no treasury headaches.',
  },
  {
    icon: Code,
    title: 'API-First',
    description: 'RESTful API with webhooks, SDKs for Node.js and Python, and CI/CD integrations for automated workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'SLA-Backed',
    description: '99.9% uptime SLA with dedicated support channels. Enterprise-grade reliability for mission-critical monitoring.',
  },
]

interface Tier {
  name: string
  domains: string
  description: string
  featured?: boolean
}

const tiers: Tier[] = [
  { name: 'Starter', domains: 'Up to 5 domains', description: 'For teams getting started with web integrity monitoring.' },
  { name: 'Professional', domains: 'Up to 25 domains', description: 'For growing organisations with multiple web properties.', featured: true },
  { name: 'Enterprise', domains: 'Up to 100 domains', description: 'For large organisations requiring full compliance coverage.' },
  { name: 'Custom', domains: '100+ domains', description: 'Tailored infrastructure for global enterprises and platforms.' },
]

export default function Enterprise() {
  return (
    <section id="enterprise" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              No crypto wallet required. No learning curve.
            </h2>
            <p className="text-noor-grey1 text-lg max-w-2xl mx-auto">
              Integrate via API. Pay by invoice. Get compliance-grade reporting.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={feature.title} delay={i * 0.15}>
                <div className="bg-noor-card border border-noor-card-border rounded-lg p-6 h-full">
                  <Icon size={24} className="text-noor-teal mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-noor-grey1 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Pricing tiers */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Transparent pricing, no surprises
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.1}>
              <div
                className={`rounded-lg p-6 h-full flex flex-col ${
                  tier.featured
                    ? 'bg-noor-card border-2 border-noor-teal'
                    : 'bg-noor-card border border-noor-card-border'
                }`}
              >
                {tier.featured && (
                  <span className="text-xs font-semibold text-noor-teal uppercase tracking-wider mb-2">
                    Most Popular
                  </span>
                )}
                <h4 className="text-lg font-bold text-white mb-1">{tier.name}</h4>
                <p className="text-sm font-medium text-noor-teal mb-3">{tier.domains}</p>
                <p className="text-sm text-noor-grey1 leading-relaxed mb-6 flex-1">{tier.description}</p>
                <a
                  href="mailto:hello@noor28.com"
                  className={`text-center text-sm font-semibold py-2.5 rounded-lg transition-all ${
                    tier.featured
                      ? 'bg-noor-teal text-noor-nearblack hover:brightness-110'
                      : 'border border-noor-card-border text-white hover:border-noor-teal hover:text-noor-teal'
                  }`}
                >
                  Contact Sales
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
