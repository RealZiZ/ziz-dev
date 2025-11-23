import { useState } from 'react'
import { motion } from 'framer-motion'
import SocialLinks from '../components/SocialLinks'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:zamanib50@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

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
            <span className="text-gradient">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h2 className="text-2xl font-display font-semibold mb-6 text-white">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-neon-blue/10 border-2 border-neon-blue rounded-lg text-neon-blue font-semibold hover:bg-neon-blue/20 transition-all duration-300 neon-border-hover"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-display font-semibold mb-6 text-white">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:zamanib50@gmail.com"
                      className="text-neon-blue hover:underline"
                    >
                      zamanib50@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      Farcaster
                    </h3>
                    <a
                      href="https://warpcast.com/realziz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:underline"
                    >
                      @realziz
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      GitHub
                    </h3>
                    <a
                      href="https://github.com/RealZiZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:underline"
                    >
                      github.com/RealZiZ
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      X (Twitter)
                    </h3>
                    <a
                      href="https://twitter.com/RealZiZ_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:underline"
                    >
                      @RealZiZ_
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-display font-semibold mb-6 text-white">
                  Connect With Me
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects, 
                  creative ideas, or opportunities to collaborate.
                </p>
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

