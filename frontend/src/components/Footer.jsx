import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/diptikc69',
      icon: FiGithub,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dipti-kc-1b5a52220/',
      icon: FiLinkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:diptikc69@gmail.com',
      icon: FiMail,
      color: 'hover:text-primary-600 dark:hover:text-primary-400'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-850 to-charcoal-900 border-t border-cyan-400/20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <motion.div
                className="text-2xl font-bold text-amber-300 mb-4 font-playfair"
                whileHover={{ scale: 1.05 }}
              >
                Dipti K.C.
              </motion.div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed body-text">
                Passionate about cybersecurity, UI/UX design, and AI. 
                Always learning, always building, always growing.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      rel="noopener noreferrer"
                      className={`p-3 bg-dark-800 hover:bg-amber-400/20 rounded-lg text-cyan-400 hover:text-amber-400 transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-amber-300 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-left"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-semibold text-amber-300 mb-4">
                Skills
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  'Cybersecurity',
                  'UI/UX Design',
                  'AI & Machine Learning',
                  'Web Development',
                  'Problem Solving'
                ].map((skill) => (
                  <li key={skill} className="text-gray-600 dark:text-gray-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>© {currentYear} Dipti K.C. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" size={16} />
              </motion.div>
              <span>and lots of coffee ☕</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">Back to top</span>
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer