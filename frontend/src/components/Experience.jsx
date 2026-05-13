import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiShield, FiEdit3, FiCpu, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const experiences = [
    {
      id: 1,
      title: 'Cybersecurity & Ethical Hacking',
      duration: '3 Months',
      period: '2024',
      icon: FiShield,
      color: 'from-amber-400 to-amber-500',
      description: 'Comprehensive training in cybersecurity fundamentals, ethical hacking techniques, vulnerability assessment, and penetration testing.',
      skills: ['Network Security', 'Penetration Testing', 'Vulnerability Assessment', 'Security Auditing', 'Risk Management'],
      achievements: [
        'Completed hands-on labs on various security tools',
        'Learned to identify and exploit common vulnerabilities',
        'Gained expertise in security frameworks and compliance'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designing',
      duration: '3 Months',
      period: '2024',
      icon: FiEdit3,
      color: 'from-cyan-400 to-cyan-500',
      description: 'Intensive training in user interface and user experience design principles, prototyping, and design thinking methodologies.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing'],
      achievements: [
        'Created multiple responsive web and mobile designs',
        'Mastered design thinking and user-centered design',
        'Built comprehensive design systems and style guides'
      ]
    },
    {
      id: 3,
      title: 'AI and Its Applications',
      duration: '100 Hours',
      period: '2024',
      icon: FiCpu,
      color: 'from-amber-300 to-amber-400',
      description: 'Extensive study of artificial intelligence concepts, machine learning algorithms, and practical AI applications in various industries.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analysis', 'Neural Networks', 'AI Ethics'],
      achievements: [
        'Implemented various ML algorithms from scratch',
        'Built AI-powered applications and models',
        'Explored ethical implications of AI in society'
      ]
    }
  ]

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-850 to-charcoal-900">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none"></div>
      
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 bg-amber-400/10 rounded-full blur-3xl"
          style={{
            left: '10%',
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
          className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          style={{
            right: '5%',
            bottom: '10%',
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
              My Journey
            </h2>
            <p className="body-text text-gray-300 max-w-2xl mx-auto">
              A timeline of my learning experiences and skill development across 
              cybersecurity, design, and artificial intelligence.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-dark-700 h-full">
              <motion.div
                className="w-full bg-gradient-to-b from-amber-400 to-cyan-400"
                variants={timelineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-lg shadow-amber-400/30`}
                        whileHover={{ scale: 1.1 }}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        <Icon className="w-8 h-8 text-dark-900" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}>
                      <motion.div
                        className="bg-dark-800/50 rounded-xl shadow-lg p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm border border-cyan-400/10"
                        whileHover={{ y: -5 }}
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <FiCalendar className="w-5 h-5 text-amber-400" />
                            <span className="text-sm font-medium text-gray-400">
                              {exp.period} • {exp.duration}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3 text-amber-300">
                          {exp.title}
                        </h3>

                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">
                            Key Skills:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                              >
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Training Hours', value: '400+' },
              { label: 'Projects Completed', value: '15+' },
              { label: 'Skills Acquired', value: '25+' },
              { label: 'Certifications', value: '3' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience