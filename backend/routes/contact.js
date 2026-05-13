const express = require('express');
const router = express.Router();
// const Contact = require('../models/Contact'); // Commented out for testing

// Temporary in-memory storage for testing
let contacts = [];
let nextId = 1;

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      });
    }

    // Create contact object (temporary storage)
    const contact = {
      id: nextId++,
      name,
      email,
      message,
      createdAt: new Date(),
      isRead: false
    };

    contacts.push(contact);
    
    console.log('📧 New contact message received:', { name, email });
    
    res.status(201).json({ 
      message: 'Message sent successfully!',
      id: contact.id 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Get all contact messages (for admin)
router.get('/', async (req, res) => {
  try {
    res.json(contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mark message as read
router.patch('/:id/read', async (req, res) => {
  try {
    const contact = contacts.find(c => c.id === parseInt(req.params.id));
    if (!contact) {
      return res.status(404).json({ message: 'Message not found' });
    }
    contact.isRead = true;
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;