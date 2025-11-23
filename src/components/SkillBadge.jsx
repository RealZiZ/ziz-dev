import { motion } from 'framer-motion'

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass rounded-lg px-6 py-4 text-center neon-border-hover cursor-pointer"
    >
      <span className="text-white font-medium">{skill}</span>
    </motion.div>
  )
}

export default SkillBadge

