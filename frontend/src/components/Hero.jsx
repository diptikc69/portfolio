import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'Full Stack Developer',
    'Cybersecurity Enthusiast',
    'UI/UX Designer',
    'AI Researcher',
    'Problem Solver'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      try {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } catch (error) {
        element.scrollIntoView()
      }
    }
  }

  const handleGitHubClick = () => {
    console.log('GitHub clicked!')
    window.open('https://github.com/diptikc69', '_blank', 'noopener,noreferrer')
  }

  const handleLinkedInClick = () => {
    console.log('LinkedIn clicked!')
    window.open('https://www.linkedin.com/in/dipti-kc-1b5a52220/', '_blank', 'noopener,noreferrer')
  }

  const handleEmailClick = () => {
    console.log('Email clicked!')
    window.location.href = 'mailto:diptikc69@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Dipti,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect!'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden bg-gradient-hero">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          style={{
            left: '-10%',
            top: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-amber-400/10 rounded-full blur-3xl"
          style={{
            right: '5%',
            bottom: '10%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300/60 rounded-full shadow-lg shadow-cyan-400/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Accent line */}
        <motion.div
          className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-cyan-400 shadow-cyan-400/50 relative">
                <img
                  src="/images/deepti-profile.png"
                  alt="Dipti K.C."
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center top',
                    minHeight: '100%',
                    minWidth: '100%',
                    filter: 'brightness(0.6) contrast(1.1) saturate(0.8)'
                  }}
                />
                {/* Dark overlay to blend with background */}
                <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(5, 15, 30, 0.35)', mixBlendMode: 'multiply' }}></div>
              </div>

              {/* Floating Elements - Hacker Theme */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <span className="text-white font-bold text-lg">🛡️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white font-bold">⚡</span>
              </motion.div>

              {/* Additional hacker elements */}
              <motion.div
                className="absolute -top-2 -left-6 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -360, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white font-bold text-sm">🔒</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="mb-4"
            >
              <span className="text-lg text-amber-400 font-medium font-mono tracking-wider">
                / Hello, I&apos;m
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="headline-large mb-4 text-amber-300"
            >
              Dipti K.C.
            </motion.h1>

            {/* Typing Animation for Roles */}
            <motion.div
              variants={itemVariants}
              className="mb-8 h-16 flex items-center justify-center lg:justify-start"
            >
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-2xl text-cyan-300 font-semibold font-source"
              >
                <span className="text-amber-400">→</span> {roles[currentRole]}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400 ml-1"
                >
                  |
                </motion.span>
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="body-text text-gray-300 mb-12 leading-relaxed"
            >
              Full Stack Developer passionate about cybersecurity, creating intuitive user experiences,
              and exploring the possibilities of artificial intelligence.
              I love building end-to-end solutions and solving complex technical challenges.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg shadow-green-500/25 border border-green-400"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
              >
                <span className="font-mono">./view_projects.sh</span>
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 211, 238, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
              >
                <span className="font-mono">./contact.exe</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <button
                className="p-3 rounded-full bg-gray-900 border border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 text-green-400 hover:text-green-300 hover:bg-green-500/10 cursor-pointer hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => {
                  console.log('GitHub clicked!')
                  window.open('https://github.com/diptikc69', '_blank', 'noopener,noreferrer')
                }}
                title="Visit my GitHub profile"
                type="button"
              >
                <FiGithub size={24} />
              </button>

              <button
                className="p-3 rounded-full bg-gray-900 border border-cyan-500 shadow-lg hover:shadow-xl transition-all duration-300 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 cursor-pointer hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onClick={() => {
                  console.log('LinkedIn clicked!')
                  window.open('https://www.linkedin.com/in/dipti-kc-1b5a52220/', '_blank', 'noopener,noreferrer')
                }}
                title="Connect with me on LinkedIn"
                type="button"
              >
                <FiLinkedin size={24} />
              </button>

              <button
                className="p-3 rounded-full bg-gray-900 border border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 cursor-pointer hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => {
                  console.log('Email clicked!')
                  window.open('mailto:diptikc69@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Dipti,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect!', '_self')
                }}
                title="Send me an email"
                type="button"
              >
                <FiMail size={24} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero