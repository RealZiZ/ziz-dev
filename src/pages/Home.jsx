import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue-alt/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-neon-blue shadow-2xl shadow-neon-blue/50">
              <img
                src="/profile.png"
                alt="Bardiya (ZiZ)"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ 
                  display: 'block',
                  minHeight: '100%',
                  minWidth: '100%'
                }}
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src)
                  e.target.style.display = 'none'
                }}
                onLoad={(e) => {
                  console.log('Image loaded successfully')
                  e.target.style.display = 'block'
                }}
              />
              <div className="absolute inset-0 border-4 border-neon-blue-alt/40 rounded-full animate-pulse-slow pointer-events-none z-10" />
              <div className="absolute -inset-2 border-2 border-neon-blue/20 rounded-full animate-ping pointer-events-none z-0" style={{ animationDuration: '3s' }} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6"
          >
            <span className="neon-glow">ZiZ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light"
          >
            AI Developer • Web3 Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building fast, minimal, and meaningful products. Passionate about AI, cybersecurity, and futuristic Web3 tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/projects"
              className="inline-block px-8 py-4 bg-neon-blue/10 border-2 border-neon-blue rounded-lg text-neon-blue font-semibold hover:bg-neon-blue/20 transition-all duration-300 neon-border-hover focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-black"
            >
              View My Work
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home

