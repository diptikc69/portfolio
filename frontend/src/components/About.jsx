import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiShield, FiEdit3, FiCpu, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skills = [
    { name: 'Full Stack Development', level: 90, icon: FiCode, color: 'from-cyan-400 to-cyan-500' },
    { name: 'Cybersecurity', level: 85, icon: FiShield, color: 'from-amber-400 to-amber-500' },
    { name: 'UI/UX Design', level: 88, icon: FiEdit3, color: 'from-cyan-300 to-cyan-400' },
    { name: 'AI & Machine Learning', level: 75, icon: FiCpu, color: 'from-amber-300 to-amber-400' },
    { name: 'Problem Solving', level: 95, icon: FiTrendingUp, color: 'from-cyan-400 to-cyan-300' },
    { name: 'Team Collaboration', level: 88, icon: FiUsers, color: 'from-amber-400 to-amber-300' },
  ]

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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-850 to-charcoal-900">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <motion.div
          className="absolute w-80 h-80 bg-amber-400/10 rounded-full blur-3xl"
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
          className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          style={{
            right: '10%',
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

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Accent lines */}
        <motion.div
          className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1.5,
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
          <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
            <h2 className="headline-large mb-4 text-amber-300">
              About Me
            </h2>
            <p className="body-text text-gray-300 max-w-2xl mx-auto">
              Full Stack Developer with expertise spanning cybersecurity,
              design, and emerging technologies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              {/* Profile Image for About Section */}
              <motion.div
                className="mb-8 flex justify-center lg:justify-start relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-cyan-400/50 shadow-cyan-400/30 relative">
                    <img
                      src="/images/dipti.jpeg"
                      alt="Dipti K.C. - Professional Photo"
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: 'center 65%',
                        minHeight: '100%',
                        minWidth: '100%',
                        filter: 'brightness(0.6) contrast(1.1) saturate(0.8)'
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(5, 15, 30, 0.35)', mixBlendMode: 'multiply' }}></div>
                  </div>

                  {/* Glowing corner elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-6 text-green-400 font-mono">
                <span className="text-cyan-400">$</span> ./my_journey.sh
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-green-400"
                >
                  _
                </motion.span>
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="border-l-4 border-cyan-500 pl-4 bg-gray-900/50 p-3 rounded-r-lg">
                  <span className="text-cyan-400 font-mono text-sm">// Initialization</span><br />
                  I'm a passionate Full Stack Developer with expertise in building complete web applications
                  from frontend to backend. My journey combines cybersecurity knowledge, UI/UX design skills,
                  and artificial intelligence exploration to create secure, user-friendly, and intelligent solutions.
                </p>

                <p className="border-l-4 border-green-500 pl-4 bg-gray-900/50 p-3 rounded-r-lg">
                  <span className="text-green-400 font-mono text-sm">// Technical Stack</span><br />
                  With experience in modern web technologies like React, Node.js, and MongoDB, I build
                  scalable applications. My 3 months of intensive cybersecurity and ethical hacking training
                  ensures I develop with security-first principles, protecting applications from vulnerabilities.
                </p>

                <p className="border-l-4 border-blue-500 pl-4 bg-gray-900/50 p-3 rounded-r-lg">
                  <span className="text-blue-400 font-mono text-sm">// Current Focus</span><br />
                  Currently expanding my expertise in AI/ML with 100 hours of specialized training,
                  integrating intelligent features into full-stack applications. I'm passionate about
                  creating end-to-end solutions that solve real-world problems with cutting-edge technology.
                </p>
              </div>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                variants={itemVariants}
              >
                {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript', 'Python', 'Tailwind CSS', 'Figma', 'Git', 'Cybersecurity', 'AI/ML'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 border border-green-500 text-green-400 rounded-full text-sm font-mono hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-green-400 font-mono">
                <span className="text-cyan-400">$</span> ./skills --list
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-green-400"
                >
                  _
                </motion.span>
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)"
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-gray-800 border border-cyan-500/30">
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <span className="font-medium text-gray-200 font-mono">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-green-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-600">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full shadow-lg shadow-green-500/50"
                          variants={skillVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About