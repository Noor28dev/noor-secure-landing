import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import ProblemStatement from './components/sections/ProblemStatement'
import HowItWorks from './components/sections/HowItWorks'
import IntegrityScore from './components/sections/IntegrityScore'
import WhyDecentralised from './components/sections/WhyDecentralised'
import Compliance from './components/sections/Compliance'
import Enterprise from './components/sections/Enterprise'
import Architecture from './components/sections/Architecture'
import CallToAction from './components/sections/CallToAction'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <IntegrityScore />
        <WhyDecentralised />
        <Compliance />
        <Enterprise />
        <Architecture />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
