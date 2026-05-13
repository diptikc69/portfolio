const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files (favicon, etc.)
app.use(express.static('public'));

// Serve admin static files
app.use('/admin', express.static('admin'));

// Handle favicon.ico requests
app.get('/favicon.ico', (req, res) => {
  res.status(404).end(); // Not Found - browsers will stop requesting
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend API',
    version: '1.0.0',
    status: 'Running',
    endpoints: {
      health: '/api/health',
      projects: '/api/projects',
      contact: '/api/contact',
      admin: '/admin'
    }
  });
});

// Simple authentication middleware for admin routes
function requireAuth(req, res, next) {
  // In a real application, you'd verify JWT tokens or session cookies
  // For demo purposes, we'll use a simple header check
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== 'Bearer admin-token-123') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
}

// Admin dashboard route
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin/index.html');
});

// Admin API routes (protected)
app.use('/api/admin', requireAuth);

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});