import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Base Onchain Identity',
      description:
        'A full mini-app that generates identity cards for Base wallets. Features include BaseScan API integration, onchain stats engine, PNG export functionality, custom badges, and Base miniapp manifest. Deployed on Vercel.',
      tech: ['React', 'Base Chain', 'BaseScan API', 'Web3', 'Vercel'],
      github: 'https://github.com/RealZiZ',
      demo: 'https://base-onchain-identity.vercel.app',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future, one project at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {projects.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg">
              More projects coming soon...
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects

