const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const sampleProjects = [
  {
    title: 'SecureAuth Dashboard',
    description: 'A comprehensive cybersecurity dashboard for monitoring authentication attempts, detecting suspicious activities, and managing security threats in real-time. Features include threat visualization, alert systems, and detailed security analytics.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
    githubLink: 'https://github.com/diptikc69/secureauth-dashboard',
    liveDemo: 'https://secureauth-demo.vercel.app',
    featured: true,
    order: 1
  },
  {
    title: 'AI-Powered Design Assistant',
    description: 'An intelligent design tool that leverages machine learning to help designers create better UI/UX mockups. Features include automated color palette generation, layout suggestions, and accessibility compliance checking.',
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI', 'OpenCV'],
    githubLink: 'https://github.com/diptikc69/ai-design-assistant',
    liveDemo: 'https://ai-design-tool.netlify.app',
    featured: true,
    order: 2
  },
  {
    title: 'Vulnerability Scanner Pro',
    description: 'A comprehensive web application security scanner that identifies OWASP Top 10 vulnerabilities, performs automated penetration testing, and provides detailed remediation reports with code examples.',
    techStack: ['Python', 'Flask', 'SQLite', 'Bootstrap', 'Nmap'],
    githubLink: 'https://github.com/diptikc69/vuln-scanner-pro',
    liveDemo: '',
    featured: true,
    order: 3
  },
  {
    title: 'Smart Portfolio Tracker',
    description: 'A modern portfolio tracking application with real-time market data, AI-powered investment insights, and comprehensive analytics. Features include risk assessment, performance tracking, and automated reporting.',
    techStack: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Alpha Vantage API'],
    githubLink: 'https://github.com/diptikc69/portfolio-tracker',
    liveDemo: 'https://smart-portfolio-tracker.herokuapp.com',
    featured: false,
    order: 4
  },
  {
    title: 'Encrypted Chat Application',
    description: 'A secure, end-to-end encrypted messaging application with advanced security features including perfect forward secrecy, message self-destruction, and anonymous authentication.',
    techStack: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'Crypto-JS'],
    githubLink: 'https://github.com/diptikc69/encrypted-chat',
    liveDemo: '',
    featured: false,
    order: 5
  },
  {
    title: 'ML Model Deployment Platform',
    description: 'A cloud-based platform for deploying and managing machine learning models with automatic scaling, version control, and comprehensive monitoring. Supports multiple ML frameworks and provides REST APIs.',
    techStack: ['Docker', 'Kubernetes', 'Python', 'Flask', 'Redis', 'PostgreSQL'],
    githubLink: 'https://github.com/diptikc69/ml-deployment-platform',
    liveDemo: '',
    featured: false,
    order: 6
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('✅ Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('🗑️  Cleared existing projects');

    // Insert sample projects
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`✅ Inserted ${insertedProjects.length} sample projects`);

    console.log('\n📋 Sample Projects:');
    insertedProjects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title}`);
    });

    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();