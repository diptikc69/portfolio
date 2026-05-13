import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheck, FiGithub, FiLinkedin } from 'react-icons/fi'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Make actual API call to backend
      const response = await axios.post('http://localhost:5001/api/contact', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      })

      console.log('✅ Message sent successfully:', response.data)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('❌ Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-850 to-charcoal-900">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
          style={{
            left: '5%',
            top: '20%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
          style={{
            right: '10%',
            bottom: '20%',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
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
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
            <h2 className="headline-large mb-4 text-amber-300">
              Get In Touch
            </h2>
            <p className="body-text text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400 font-mono">
                  <span className="text-cyan-400">$</span> ./connect --init
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-green-400"
                  >
                    _
                  </motion.span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8 border-l-4 border-cyan-500 pl-4 bg-gray-900/50 p-3 rounded-r-lg">
                  <span className="text-cyan-400 font-mono text-sm">// Connection established</span><br />
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a chat about technology, cybersecurity, design, or AI.
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.button
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-green-500 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-green-500"
                  whileHover={{ x: 10, boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  title="Send me an email"
                  onClick={(e) => {
                    e.preventDefault()
                    console.log('Email clicked!')
                    window.location.href = 'mailto:diptikc69@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Dipti,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect!'
                  }}
                  type="button"
                >
                  <div className="p-3 bg-gray-800 border border-green-500/30 rounded-lg">
                    <FiMail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 font-mono">Email</h4>
                    <p className="text-green-400 font-mono">diptikc69@gmail.com</p>
                  </div>
                </motion.button>

                <motion.button
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-cyan-500 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  whileHover={{ x: 10, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  title="Visit my GitHub profile"
                  onClick={(e) => {
                    e.preventDefault()
                    console.log('GitHub clicked!')
                    window.open('https://github.com/diptikc69', '_blank', 'noopener,noreferrer')
                  }}
                  type="button"
                >
                  <div className="p-3 bg-gray-800 border border-cyan-500/30 rounded-lg">
                    <FiGithub className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 font-mono">GitHub</h4>
                    <p className="text-cyan-400 font-mono">@diptikc69</p>
                  </div>
                </motion.button>

                <motion.button
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-blue-500 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileHover={{ x: 10, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  title="Connect with me on LinkedIn"
                  onClick={(e) => {
                    e.preventDefault()
                    console.log('LinkedIn clicked!')
                    window.open('https://www.linkedin.com/in/dipti-kc-1b5a52220/', '_blank', 'noopener,noreferrer')
                  }}
                  type="button"
                >
                  <div className="p-3 bg-gray-800 border border-blue-500/30 rounded-lg">
                    <FiLinkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 font-mono">LinkedIn</h4>
                    <p className="text-blue-400 font-mono">Dipti K.C.</p>
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 text-green-400 font-mono">
                  <span className="text-cyan-400">$</span> ./send_message.sh
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      <span className="text-cyan-400">//</span> Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-800 text-gray-200 font-mono ${errors.name
                            ? 'border-red-500'
                            : 'border-gray-600 hover:border-cyan-500'
                          }`}
                        placeholder="Enter your name..."
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      <span className="text-cyan-400">//</span> Email *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-800 text-gray-200 font-mono ${errors.email
                            ? 'border-red-500'
                            : 'border-gray-600 hover:border-cyan-500'
                          }`}
                        placeholder="your.email@domain.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      <span className="text-cyan-400">//</span> Message *
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-800 text-gray-200 font-mono resize-none ${errors.message
                            ? 'border-red-500'
                            : 'border-gray-600 hover:border-cyan-500'
                          }`}
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105'
                      } text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                    >
                      <FiCheck size={20} />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
                    >
                      Something went wrong. Please try again or contact me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact