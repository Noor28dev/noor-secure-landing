import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Enterprise', href: '#enterprise' },
]

export default function Navbar() {
  const scrolled = useScrolled()
  const activeSection = useActiveSection()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }, [])

  const isActive = (href: string) => `#${activeSection}` === href

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-noor-dark/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-baseline gap-1.5">
            <span className="text-white font-bold text-lg tracking-[0.2em]">NOOR</span>
            <span className="text-noor-teal font-medium text-sm">Secure</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-noor-teal'
                    : 'text-noor-grey1 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="bg-noor-teal text-noor-nearblack font-semibold text-sm px-5 py-2 rounded-lg hover:brightness-110 transition-all"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-noor-dark p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <button
                className="self-end text-white p-2 mb-8"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-lg transition-colors ${
                      isActive(link.href)
                        ? 'text-noor-teal'
                        : 'text-noor-grey1 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, '#cta')}
                  className="bg-noor-teal text-noor-nearblack font-semibold text-center px-5 py-3 rounded-lg mt-4"
                >
                  Request Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
