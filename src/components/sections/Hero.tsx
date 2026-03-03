import { motion } from 'framer-motion'
import HeroVisual from '../ui/HeroVisual'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-noor-nearblack to-noor-dark">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 w-full">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="text-noor-teal text-sm font-medium tracking-wide mb-6">
            Decentralised Web Integrity Verification
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your website is live.{' '}
            <br className="hidden sm:block" />
            Is it really yours?
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-noor-grey1 max-w-2xl mb-10 leading-relaxed">
            PageAttest monitors every pixel, script, and API call — verified by 30,000
            independent nodes. Attackers can't hide from a network they can't predict.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-noor-teal text-noor-nearblack font-semibold px-7 py-3 rounded-lg hover:brightness-110 transition-all text-sm"
            >
              Request Demo
            </a>
            <a
              href="https://demo.noor28.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-noor-card-border text-white font-medium px-7 py-3 rounded-lg hover:border-noor-teal hover:text-noor-teal transition-all text-sm"
            >
              View Live Demo
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-16 w-full">
        <HeroVisual />
      </div>
    </section>
  )
}
