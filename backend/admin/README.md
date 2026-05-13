# Portfolio Admin Dashboard

A modern, responsive admin dashboard for managing your portfolio website.

## Features

- **Dashboard Overview**: View statistics, recent activity, and server status
- **Project Management**: Add, edit, and delete portfolio projects
- **Contact Management**: View and search contact form submissions
- **Analytics**: Basic analytics and insights
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Consistent with the portfolio design

## Access

Visit: `http://localhost:5001/admin`

## Authentication

The admin interface uses a simple Bearer token authentication:
- **Token**: `admin-token-123`
- **Header**: `Authorization: Bearer admin-token-123`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contacts
- `GET /api/contact` - Get all contact messages

### Health
- `GET /api/health` - Server health check

## Project Data Structure

```json
{
  "title": "Project Title",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "link": "https://project-link.com",
  "image": "https://image-url.com"
}
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Bearer Token
- **Styling**: Custom CSS with dark theme

## Security Notes

⚠️ **Important**: This is a basic implementation for development purposes. In production:

1. Use proper JWT authentication instead of simple Bearer tokens
2. Implement rate limiting for admin endpoints
3. Add input validation and sanitization
4. Use HTTPS
5. Store sensitive data securely
6. Implement proper session management

## File Structure

```
backend/
├── admin/
│   ├── index.html      # Admin dashboard HTML
│   ├── admin.css       # Admin dashboard styles
│   └── admin.js        # Admin dashboard functionality
├── models/
│   ├── Contact.js      # Contact model
│   └── Project.js      # Project model
├── routes/
│   ├── contact.js      # Contact routes
│   └── projects.js     # Project routes
├── server.js           # Main server file
└── package.json        # Dependencies
```

## Development

1. Start the backend server: `npm run dev`
2. Access admin dashboard: `http://localhost:5001/admin`
3. Make changes to admin files and refresh browser

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing

1. Make changes to the admin interface files
2. Test functionality
3. Ensure responsive design works on mobile
4. Update this README if needed