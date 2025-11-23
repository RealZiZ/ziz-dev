import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-transparent focus:rounded">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-neon-blue/50 shadow-lg shadow-neon-blue/30"
            >
              <img
                src="/profile.png"
                alt="ZiZ"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ 
                  display: 'block',
                  minHeight: '100%',
                  minWidth: '100%'
                }}
                onError={(e) => {
                  console.error('Navbar image failed to load')
                  e.target.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-full animate-pulse-slow pointer-events-none z-10" />
            </motion.div>
            <motion.span
              className="text-2xl md:text-3xl font-display font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              ZiZ
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-transparent focus:rounded px-2 py-1 ${
                  location.pathname === item.path
                    ? 'text-neon-blue'
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-blue"
                    layoutId="navbar-indicator"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <MobileMenu navItems={navItems} location={location} />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const MobileMenu = ({ navItems, location }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-neon-blue transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 glass border-t border-white/10 p-4"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-neon-blue'
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar

