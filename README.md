
# Todo Fullstack Application

A modern, full-stack todo application built with React.js frontend and Node.js/Express backend, featuring MongoDB integration and a clean, responsive user interface.

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete todo tasks
- **Real-time Updates**: Instant UI updates with backend synchronization
- **Responsive Design**: Modern, mobile-friendly interface
- **Dashboard View**: Analytics and task overview
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **RESTful API**: Clean, well-structured backend endpoints
- **React Router**: Client-side routing for seamless navigation

## 🏗️ Project Structure

```
todo-fullstack/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   └── App.js         # Main application component
│   └── package.json       # Frontend dependencies
├── server/                 # Node.js backend application
│   ├── models/            # Database models
│   ├── routes/            # API route handlers
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
└── README.md              # This file
```

## 🛠️ Tech Stack

### Frontend
- **React.js 19.1.1** - Modern JavaScript library for building user interfaces
- **React Router DOM 7.8.2** - Client-side routing
- **Axios 1.11.0** - HTTP client for API requests
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.18.0** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd todo-fullstack
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

### 4. Environment Configuration
Create a `.env` file in the `server` directory:

```bash
cd ../server
touch .env
```

Add the following environment variables:
```env
MONGO_URI=mongodb://localhost:27017/todo-app
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-app
PORT=5000
NODE_ENV=development
```

## 🏃‍♂️ Running the Application

### Development Mode

#### Start the Backend Server
```bash
cd server
npm run dev
```
The server will start on `http://localhost:5000`

#### Start the Frontend Application
```bash
cd client
npm start
```
The React app will open in your browser at `http://localhost:3000`

### Production Mode

#### Build the Frontend
```bash
cd client
npm run build
```

#### Start Production Server
```bash
cd ../server
npm start
```

## 📱 Application Features

### Todo Management
- **Add New Tasks**: Create new todo items with titles
- **Mark Complete**: Toggle task completion status
- **Edit Tasks**: Modify existing task titles
- **Delete Tasks**: Remove completed or unwanted tasks
- **Real-time Updates**: Changes reflect immediately across the interface

### Dashboard
- **Task Overview**: Visual representation of task completion
- **Statistics**: Total tasks, completed tasks, and pending tasks
- **Progress Tracking**: Monitor your productivity

### Navigation
- **Responsive Navbar**: Clean navigation with app branding
- **Route Navigation**: Seamless switching between Todo and Dashboard views

## 🔌 API Endpoints

The backend provides the following RESTful API endpoints:

- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a specific task
- `DELETE /api/tasks/:id` - Delete a specific task

## 🗄️ Database Schema

### Task Model
```javascript
{
  title: String,        // Task title (required)
  completed: Boolean,    // Completion status (default: false)
  createdAt: Date,      // Creation timestamp
  updatedAt: Date       // Last update timestamp
}
```

## 🧪 Testing

### Frontend Testing
```bash
cd client
npm test
```

### Backend Testing
Currently, the backend doesn't include automated tests. Consider adding:
- Unit tests with Jest
- Integration tests with Supertest
- API endpoint testing

## 🚀 Deployment

### Frontend Deployment
- Build the React app: `npm run build`
- Deploy the `build` folder to your hosting service
- Configure routing for single-page application

### Backend Deployment
- Set environment variables for production
- Use process managers like PM2
- Deploy to platforms like Heroku, Vercel, or AWS

## 🔧 Configuration Options

### Environment Variables
- `MONGO_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment mode (development/production)

### Frontend Proxy
The React app is configured to proxy API requests to the backend server during development.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request




