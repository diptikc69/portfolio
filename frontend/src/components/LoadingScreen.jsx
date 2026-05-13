import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  
  const loadingSteps = [
    'Initializing system...',
    'Loading security protocols...',
    'Establishing secure connection...',
    'Decrypting portfolio data...',
    'Compiling user interface...',
    'Finalizing deployment...',
    'Access granted!'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length - 1) {
        setCurrentStep(prev => prev + 1)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [currentStep])

  useEffect(() => {
    const step = loadingSteps[currentStep]
    let index = 0
    setLoadingText('')
    
    const typeInterval = setInterval(() => {
      if (index < step.length) {
        setLoadingText(step.substring(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentStep])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Matrix-style falling code */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
              }}
              animate={{
                y: [0, window.innerHeight + 100],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            >
              {Array.from({ length: 15 }, () => 
                Math.random() > 0.5 ? '1' : '0'
              ).join('')}
            </motion.div>
          ))}
        </div>
        
        {/* Glowing grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-cyan-500/30"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-b border-cyan-500/30"></div>
            ))}
          </div>
        </div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Scanning lines */}
        <motion.div
          className="absolute left-0 top-0 w-full h-2 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
          animate={{
            y: [0, window.innerHeight || 800],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Terminal Window */}
        <motion.div
          className="bg-gray-900/90 border-2 border-green-500 rounded-lg p-8 backdrop-blur-sm shadow-2xl shadow-green-500/25 max-w-md mx-auto"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 font-mono text-sm">terminal</span>
          </div>

          {/* Name with glitch effect */}
          <motion.div
            className="text-4xl font-bold mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-mono">
              Dipti K.C.
            </span>
          </motion.div>
          
          {/* Loading Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 font-mono mb-2">
              <span>Loading...</span>
              <span>{Math.round((currentStep / (loadingSteps.length - 1)) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 border border-gray-600">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-cyan-500 h-full rounded-full shadow-lg shadow-green-500/50"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / (loadingSteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Terminal Loading Text */}
          <motion.div
            className="text-left font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-cyan-400 mb-2">
              <span className="text-green-400">$</span> ./initialize_portfolio.sh
            </div>
            <div className="text-gray-300 min-h-[20px]">
              {loadingText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-green-400"
              >
                _
              </motion.span>
            </div>
          </motion.div>

          {/* Hacker-style loading dots */}
          <motion.div
            className="flex justify-center space-x-1 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* System Info */}
          <motion.div
            className="mt-6 text-xs font-mono text-gray-500 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div>System: Portfolio OS v2.0</div>
            <div>Security: Enabled</div>
            <div>Status: Authenticated</div>
          </motion.div>
        </motion.div>

        {/* Additional terminal prompt */}
        <motion.div
          className="mt-4 text-green-400 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-cyan-400">root@portfolio:~#</span> Welcome to the matrix...
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen