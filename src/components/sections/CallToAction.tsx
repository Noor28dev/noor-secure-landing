import ScrollReveal from '../ui/ScrollReveal'

export default function CallToAction() {
  return (
    <section id="cta" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See it in action
            </h2>
            <p className="text-noor-grey1 text-lg mb-10 leading-relaxed">
              Request a live demo tailored to your infrastructure. We'll show you
              exactly what PageAttest detects — and how it proves it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:hello@noor28.com"
                className="bg-noor-teal text-noor-nearblack font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all text-sm"
              >
                Request Demo
              </a>
              <a
                href="https://demo.noor28.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-noor-card-border text-white font-medium px-8 py-3.5 rounded-lg hover:border-noor-teal hover:text-noor-teal transition-all text-sm"
              >
                Or explore the interactive demo →
              </a>
            </div>
            <p className="text-sm text-noor-grey2">
              Enterprise inquiries:{' '}
              <a href="mailto:hello@noor28.com" className="text-noor-teal hover:underline">
                hello@noor28.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
