import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScanSearch, ShieldCheck, Network, Link, Eye, Code, Wifi, Shield, ChevronRight, ChevronDown } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import SectionLabel from '../ui/SectionLabel'
import type { LucideIcon } from 'lucide-react'

interface Stage {
  icon: LucideIcon
  title: string
  description: string
}

const stages: Stage[] = [
  { icon: ScanSearch, title: 'Attestation Layer', description: 'Distributed crawlers capture visual, DOM, and network fingerprints.' },
  { icon: ShieldCheck, title: 'Core Validators', description: 'Cross-reference fingerprints against known-good baselines.' },
  { icon: Network, title: 'Verifier Node Network', description: '30,000 independent nodes reach quorum consensus.' },
  { icon: Link, title: 'On-Chain Commitment', description: 'Immutable attestation record committed to blockchain.' },
]

interface VFPItem {
  icon: LucideIcon
  label: string
  description: string
}

const vfpItems: VFPItem[] = [
  { icon: Eye, label: 'Visual', description: 'Pixel-level rendering changes — catches cloned pages' },
  { icon: Code, label: 'DOM', description: 'Injected forms, hidden iframes, modified structure' },
  { icon: Wifi, label: 'Network', description: 'Unauthorised API calls, data exfiltration endpoints' },
  { icon: Shield, label: 'Assets', description: 'Tampered JavaScript, modified script hashes' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4 } },
}

const stageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function HowItWorks() {
  const pipelineRef = useRef<HTMLDivElement>(null)
  const inView = useInView(pipelineRef, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionLabel>The Solution</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Three layers. Zero trust assumptions.
          </h2>
          <p className="text-noor-grey1 text-lg max-w-2xl mb-16 leading-relaxed">
            PageAttest separates scanning, verification, and validation across independent
            infrastructure — so no single point of compromise can fake a clean result.
          </p>
        </ScrollReveal>

        {/* Pipeline */}
        <motion.div
          ref={pipelineRef}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 md:gap-0 items-stretch mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div key={stage.title} className="contents">
                <motion.div
                  variants={stageVariants}
                  className="bg-noor-card border border-noor-card-border rounded-lg p-5 relative"
                >
                  <motion.div
                    className="absolute top-3 right-3 h-2 w-2 rounded-full bg-noor-teal"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Icon size={24} className="text-noor-teal mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-1">{stage.title}</h3>
                  <p className="text-xs text-noor-grey1 leading-relaxed">{stage.description}</p>
                </motion.div>
                {i < stages.length - 1 && (
                  <div className="flex items-center justify-center relative md:w-10">
                    {/* Desktop arrow */}
                    <ChevronRight size={16} className="text-noor-grey2 hidden md:block" />
                    {/* Mobile arrow */}
                    <ChevronDown size={16} className="text-noor-grey2 md:hidden" />
                    <motion.div
                      className="absolute h-1.5 w-1.5 rounded-full bg-noor-teal hidden md:block"
                      animate={{ x: [-12, 12] }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute h-1.5 w-1.5 rounded-full bg-noor-teal md:hidden"
                      animate={{ y: [-8, 8] }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </motion.div>

        {/* VFP Breakdown */}
        <ScrollReveal>
          <h3 className="text-xl font-semibold text-white mb-2">Visual Fingerprint Protocol (VFP)</h3>
          <p className="text-noor-grey1 text-sm mb-8">Four verification layers that make tampering detectable.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {vfpItems.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="bg-noor-card border border-noor-card-border rounded-lg p-5 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <Icon size={20} className="text-noor-teal shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{item.label}</h4>
                      <p className="text-xs text-noor-grey1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {/* Scan bar animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-noor-teal/30"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: i * 0.3, ease: 'easeOut' }}
                  />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
