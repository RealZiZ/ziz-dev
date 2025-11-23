import { motion } from 'framer-motion'
import SkillBadge from '../components/SkillBadge'

const Experience = () => {
  const skills = [
    'Java',
    'JavaScript',
    'Python',
    'React',
    'TailwindCSS',
    'Node.js',
    'Linux',
    'Git & GitHub',
    'AI tools (Cursor, OpenAI, Sora, ComfyUI)',
    'Web3 (Base chain, smart contract basics, identity systems)',
    'Cybersecurity fundamentals',
  ]

  const categories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TailwindCSS'],
      description: 'Building responsive, modern user interfaces with React and TailwindCSS.',
    },
    {
      title: 'Backend & Systems',
      skills: ['Node.js', 'Java', 'Python', 'Linux'],
      description: 'Developing server-side applications and working with Linux systems.',
    },
    {
      title: 'Web3 & Blockchain',
      skills: ['Web3 (Base chain, smart contract basics, identity systems)'],
      description: 'Exploring decentralized technologies, Base chain, and onchain identity systems.',
    },
    {
      title: 'AI & Tools',
      skills: ['AI tools (Cursor, OpenAI, Sora, ComfyUI)'],
      description: 'Leveraging cutting-edge AI tools to enhance development workflow and creativity.',
    },
    {
      title: 'Development Practices',
      skills: ['Git & GitHub', 'Cybersecurity fundamentals'],
      description: 'Following best practices in version control and security.',
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
            <span className="text-gradient">Experience & Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to build amazing products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-semibold mb-8 text-center text-white">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold mb-3 text-white">
                {category.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm font-medium bg-neon-blue/10 text-neon-blue rounded-lg border border-neon-blue/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mt-16 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-display font-semibold mb-6 text-white">
            My Approach
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I believe in continuous learning and staying at the forefront of technology. 
            Every project is an opportunity to explore new tools, refine my skills, and push the boundaries of what's possible. 
            I'm always excited to dive into new technologies and apply them to solve real-world problems.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience

