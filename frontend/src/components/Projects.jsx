import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  // Sample projects data (fallback if API fails)
  const sampleProjects = [
    {
      _id: '1',
      title: 'SecureAuth Dashboard',
      description: 'A comprehensive cybersecurity dashboard for monitoring authentication attempts and security threats in real-time.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/diptikc69',
      liveDemo: '#'
    },
    {
      _id: '2',
      title: 'AI-Powered Design Tool',
      description: 'An intelligent design assistant that helps create UI/UX mockups using machine learning algorithms.',
      techStack: ['Python', 'React', 'FastAPI'],
      githubLink: 'https://github.com/diptikc69',
      liveDemo: '#'
    },
    {
      _id: '3',
      title: 'Vulnerability Scanner',
      description: 'A web application security scanner that identifies common vulnerabilities and provides remediation suggestions.',
      techStack: ['Python', 'SQLite', 'Bootstrap'],
      githubLink: 'https://github.com/diptikc69',
      liveDemo: '#'
    }
  ]

  useEffect(() => {
    // Use sample data instead of API call for now
    setProjects(sampleProjects)
    setLoading(false)
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/projects')
      setProjects(response.data.length > 0 ? response.data : sampleProjects)
    } catch (err) {
      console.error('Error fetching projects:', err)
      setProjects(sampleProjects)
      setError('Using sample data')
    } finally {
      setLoading(false)
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-gradient-to-br from-dark-900 via-dark-850 to-charcoal-900">
        <div className="container-custom">
          <div className="text-center">
            <div className="loading-dots mx-auto">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="mt-4 text-gray-400">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-850 to-charcoal-900">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none"></div>
      
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          style={{
            left: '-10%',
            top: '30%',
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
          className="absolute w-80 h-80 bg-amber-400/10 rounded-full blur-3xl"
          style={{
            right: '5%',
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
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="headline-large mb-4 text-amber-300">
              Featured Projects
            </h2>
            <p className="body-text text-gray-300 max-w-2xl mx-auto">
              A showcase of my work spanning cybersecurity, AI, and web development. 
              Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                variants={cardVariants}
                className="group bg-dark-800/50 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden backdrop-blur-sm border border-cyan-400/10 hover:border-cyan-400/30"
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900/20 to-amber-900/20 h-48 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-800/30 group-hover:to-amber-800/30 transition-all duration-300">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <FiCode className="w-16 h-16 text-cyan-400" />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-amber-400 rounded-full text-dark-900 hover:bg-amber-300 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub size={20} />
                      </motion.a>
                      
                      {project.liveDemo && project.liveDemo !== '#' && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-cyan-400 rounded-full text-dark-900 hover:bg-cyan-300 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-amber-300 group-hover:text-amber-200 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-400/20 text-cyan-300 rounded text-xs font-medium border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center py-2 px-4 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub className="mr-2" size={16} />
                      Code
                    </motion.a>
                    
                    {project.liveDemo && project.liveDemo !== '#' && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiExternalLink className="mr-2" size={16} />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/diptikc69"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="mr-2" size={20} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects