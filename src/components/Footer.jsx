import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Bardia Zamani.
          </motion.p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer

