# portfolio
Full-stack personal portfolio project featuring a responsive React + Tailwind frontend, Node.js/Express API with MongoDB persistence, project/contact management, and an admin dashboard UI. Includes theme switcher, modern UI animations, robust routes, and local-first development flow.
=======
# Modern Portfolio Website

A full-stack personal portfolio website built with React, Node.js, and MongoDB featuring smooth animations and modern design.

## Tech Stack

### Frontend
- React with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- Axios for API calls

### Backend
- Node.js with Express
- MongoDB with Mongoose
- CORS for cross-origin requests
- dotenv for environment variables

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/light mode toggle
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast loading performance
- 📧 Contact form with MongoDB storage
- 🎯 SEO optimized
- 📊 Dynamic project management

## Project Structure

```
portfolio-website/
├── frontend/          # React frontend
├── backend/           # Node.js backend
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Backend Setup
1. Navigate to backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create `.env` file with your MongoDB connection string
4. Start server: `npm run dev`

### Frontend Setup
1. Navigate to frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Environment Variables
Create `.env` file in backend folder:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Backend (Render)
1. Push code to GitHub
2. Create new web service on Render
3. Connect repository and deploy

### Database (MongoDB Atlas)
1. Create cluster on MongoDB Atlas
2. Get connection string
3. Add to environment variables

## API Endpoints

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `POST /api/contact` - Submit contact form

## License

MIT License
>>>>>>> 0944bdd (Initial portfolio project commit)
