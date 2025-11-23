import { motion } from 'framer-motion'

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-blue/50 to-transparent transform md:-translate-x-1/2" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-start md:items-center"
          >
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-black transform md:-translate-x-1/2 z-10 shadow-lg shadow-neon-blue/50" />

            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
              }`}
            >
              <div className="glass rounded-lg p-4 md:p-6">
                <div className="text-sm text-neon-blue font-medium mb-1">
                  {item.year}
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline

