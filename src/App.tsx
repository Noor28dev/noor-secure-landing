import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import SystemSection from './components/sections/Architecture'
import Brands from './components/sections/Compliance'
import ProductSpotlight from './components/sections/Enterprise'
import MediaSection from './components/sections/HowItWorks'
import TeamSection from './components/sections/IntegrityScore'
import CTASection from './components/sections/CallToAction'
import Footer from './components/layout/Footer'

export default function App() {
  return (
      <>
            <Navbar />
                  <main>
                          <Hero />
                                  <SystemSection />
                                          <Brands />
                                                  <ProductSpotlight />
                                                          <MediaSection />
                                                                  <TeamSection />
                                                                          <CTASection />
                                                                                </main>
                                                                                      <Footer />
                                                                                          </>
                                                                                            )
                                                                                            }