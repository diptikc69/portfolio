const express = require('express');
const router = express.Router();
// const Project = require('../models/Project'); // Commented out for testing

// Sample projects data for testing
const sampleProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Node.js featuring a cyberpunk hacker theme.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/diptikc69/portfolio",
    liveUrl: "https://diptikc.dev",
    imageUrl: "/images/portfolio-project.jpg",
    featured: true,
    order: 1,
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Cybersecurity Dashboard",
    description: "A security monitoring dashboard for tracking network threats and vulnerabilities.",
    technologies: ["React", "Python", "Flask", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/diptikc69/security-dashboard",
    imageUrl: "/images/security-dashboard.jpg",
    featured: true,
    order: 2,
    createdAt: new Date()
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "An intelligent chat application powered by machine learning algorithms.",
    technologies: ["React", "Python", "TensorFlow", "WebSocket", "Redis"],
    githubUrl: "https://github.com/diptikc69/ai-chat",
    imageUrl: "/images/ai-chat.jpg",
    featured: false,
    order: 3,
    createdAt: new Date()
  }
];

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = sampleProjects.sort((a, b) => a.order - b.order);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = sampleProjects.find(p => p.id === parseInt(req.params.id));
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new project (for testing)
router.post('/', async (req, res) => {
  try {
    const newProject = {
      id: sampleProjects.length + 1,
      ...req.body,
      createdAt: new Date()
    };
    sampleProjects.push(newProject);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update project (for testing)
router.put('/:id', async (req, res) => {
  try {
    const projectIndex = sampleProjects.findIndex(p => p.id === parseInt(req.params.id));
    if (projectIndex === -1) {
      return res.status(404).json({ message: 'Project not found' });
    }
    sampleProjects[projectIndex] = { ...sampleProjects[projectIndex], ...req.body };
    res.json(sampleProjects[projectIndex]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete project (for testing)
router.delete('/:id', async (req, res) => {
  try {
    const projectIndex = sampleProjects.findIndex(p => p.id === parseInt(req.params.id));
    if (projectIndex === -1) {
      return res.status(404).json({ message: 'Project not found' });
    }
    sampleProjects.splice(projectIndex, 1);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;