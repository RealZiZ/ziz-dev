import { motion } from 'framer-motion'
import Timeline from '../components/Timeline'

const About = () => {
  const timelineItems = [
    {
      year: '2019',
      title: 'Started Coding Journey',
      description: 'Began exploring programming and technology, fascinated by the endless possibilities of code.',
    },
    {
      year: '2020-2021',
      title: 'Web Development Foundations',
      description: 'Dived deep into JavaScript, HTML, CSS, and started building my first web projects.',
    },
    {
      year: '2022',
      title: 'React & Modern Frontend',
      description: 'Mastered React ecosystem, TailwindCSS, and modern frontend development practices.',
    },
    {
      year: '2023',
      title: 'AI & Web3 Exploration',
      description: 'Discovered the power of AI tools (Cursor, OpenAI) and began exploring Web3, Base chain, and onchain identity systems.',
    },
    {
      year: '2024',
      title: 'Full-Stack & Cybersecurity',
      description: 'Expanded into Node.js backend development, Linux systems, and cybersecurity fundamentals. Built Base Onchain Identity project.',
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-neon-blue shadow-2xl shadow-neon-blue/50">
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
                  console.error('About page image failed to load')
                  e.target.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 border-4 border-neon-blue-alt/40 rounded-full animate-pulse-slow pointer-events-none z-10" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future, one line of code at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-display font-semibold mb-6 text-white">
            Who I Am
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm <span className="text-neon-blue font-semibold">Bardiya (ZiZ)</span>, a 16-year-old developer based in Canada. 
              I'm passionate about AI, cybersecurity, and building futuristic Web3 tools that push the boundaries of what's possible.
            </p>
            <p>
              My journey in tech started with curiosity and has evolved into an obsession with creating fast, minimal, and meaningful products. 
              I believe in the power of clean code, thoughtful design, and innovative solutions.
            </p>
            <p>
              When I'm not coding, I'm exploring the latest in AI tools like Cursor, OpenAI, Sora, and ComfyUI, 
              or diving deep into Web3 technologies, particularly the Base chain, smart contracts, and identity systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-display font-semibold mb-6 text-white">
            Why I Build
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Technology is the canvas, and code is the brush. Every project I build is a step toward a more 
              connected, secure, and innovative future. I'm driven by the challenge of solving complex problems 
              with elegant solutions.
            </p>
            <p>
              The intersection of AI and Web3 excites me because it represents the next frontier of digital innovation. 
              From onchain identity systems to AI-powered tools, I'm building the infrastructure for tomorrow's internet.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-display font-semibold mb-6 text-white">
            Vision for the Future
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I envision a future where digital identity is truly owned by individuals, where AI augments human creativity 
              rather than replacing it, and where Web3 technologies enable new forms of collaboration and value creation.
            </p>
            <p>
              My goal is to contribute to this vision by building tools that are not just functional, but transformative. 
              Every line of code I write is a small step toward a more decentralized, secure, and user-centric internet.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-display font-semibold mb-12 text-center text-white">
            My Journey
          </h2>
          <Timeline items={timelineItems} />
        </motion.div>
      </div>
    </div>
  )
}

export default About

