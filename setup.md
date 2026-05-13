# Portfolio Website Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

## Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Environment Configuration

Create `backend/.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
```

## Development Commands

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Backend (Render)
1. Push to GitHub
2. Create web service on Render
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create cluster
2. Create database user
3. Whitelist IP addresses
4. Get connection string

## Features Included

✅ Responsive design
✅ Dark/light mode toggle
✅ Smooth animations with Framer Motion
✅ Contact form with MongoDB storage
✅ Project management system
✅ SEO optimization
✅ Loading screens
✅ Error handling
✅ Form validation

## Customization

### Adding Projects
Use the API endpoints or add directly to MongoDB:
```javascript
{
  title: "Project Name",
  description: "Project description",
  techStack: ["React", "Node.js"],
  githubLink: "https://github.com/username/repo",
  liveDemo: "https://demo.com",
  image: "image-url"
}
```

### Styling
- Edit `tailwind.config.js` for theme customization
- Modify colors in the config file
- Add custom animations in CSS

### Content
- Update personal information in components
- Modify social links in Hero and Footer
- Update experience timeline in Experience component

## Troubleshooting

### Common Issues
1. **MongoDB Connection**: Check connection string and network access
2. **CORS Errors**: Ensure backend CORS is configured properly
3. **Build Errors**: Check Node.js version compatibility
4. **Animation Issues**: Verify Framer Motion installation

### Performance Tips
- Optimize images before uploading
- Use lazy loading for heavy components
- Minimize bundle size with code splitting
- Enable compression on server

## Support
For issues or questions, check the documentation or create an issue in the repository.