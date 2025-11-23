import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-9xl md:text-[12rem] font-display font-bold mb-4"
          >
            <span className="text-gradient">404</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white"
          >
            Page Not Found
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 mb-8 max-w-md mx-auto"
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-neon-blue/10 border-2 border-neon-blue rounded-lg text-neon-blue font-semibold hover:bg-neon-blue/20 transition-all duration-300 neon-border-hover"
            >
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

