import { motion } from 'framer-motion'

const SocialLinks = () => {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/RealZiZ',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/RealZiZ_',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Farcaster',
      url: 'https://warpcast.com/realziz',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.75 0H5.25C2.35 0 0 2.35 0 5.25v13.5C0 21.65 2.35 24 5.25 24h13.5C21.65 24 24 21.65 24 18.75V5.25C24 2.35 21.65 0 18.75 0zm-1.5 16.5h-2.25v-3.75c0-1.24-1.01-2.25-2.25-2.25s-2.25 1.01-2.25 2.25v3.75H8.25V7.5h2.25v1.5c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V7.5h2.25v9z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:zamanib50@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex items-center space-x-4">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2, color: '#4f99ff' }}
          className="text-gray-400 hover:text-neon-blue transition-colors"
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks

