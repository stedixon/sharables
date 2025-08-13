# Sharables Application

A full-stack application with a TypeScript React frontend and Spring Boot backend.

## Project Structure

```
sharables/
├── frontend/          # React TypeScript frontend
│   ├── src/
│   │   ├── App.tsx   # Main application component with login form
│   │   ├── index.tsx # Application entry point
│   │   └── App.css   # Styling for the login form
│   └── package.json  # Frontend dependencies
└── backend/           # Spring Boot backend
    ├── src/main/java/com/sharables/
    │   ├── SharablesApplication.java  # Main Spring Boot class
    │   ├── controller/AuthController.java  # Authentication endpoints
    │   ├── service/AuthService.java   # Authentication business logic
    │   ├── dto/                       # Data Transfer Objects
    │   └── config/SecurityConfig.java # Security configuration
    ├── src/main/resources/application.properties
    └── pom.xml                        # Maven dependencies
```

## Prerequisites

- Java 17 or higher
- Node.js 16 or higher
- Maven 3.6 or higher

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:8080`

**Test Credentials:**
- Username: `admin`
- Password: `password`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will start on `http://localhost:3000`

## Features

### User Interface
- **Login Screen**: Secure authentication with username/password
- **Home Dashboard**: Personalized welcome page with feature overview
- **Settings Panel**: Account preferences, notifications, and security options
- **Navigation Menu**: Dropdown menu with Home, Settings, and Logout options
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Frontend
- **TypeScript**: Full TypeScript support with proper type definitions
- **Modern UI**: Clean, responsive login form with gradient background
- **Navigation**: Menu bar with dropdown navigation (Home, Settings)
- **Home Page**: Welcome screen with user information and feature cards
- **Settings Page**: User preferences and account management
- **Form Validation**: Client-side validation and error handling
- **Loading States**: Visual feedback during authentication
- **Token Storage**: JWT token storage in localStorage

### Backend
- **Spring Boot 3.2.3**: Latest Spring Boot version with Java 17
- **Spring Security 6.1+**: Modern security configuration with CORS support
- **JWT Support**: Latest JWT library (0.12.5) for authentication
- **Validation**: Bean validation with custom error handling
- **H2 Database**: In-memory database for development
- **RESTful API**: Clean REST endpoints with proper exception handling

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
  - Request body: `{"username": "string", "password": "string"}`
  - Response: `{"success": boolean, "message": "string", "token": "string"}`

## Development

### Frontend Development
- The frontend uses TypeScript for better type safety
- CSS is organized with modern practices (flexbox, CSS Grid, transitions)
- Form state is managed with React hooks
- Error handling includes both network and validation errors

### Backend Development
- Spring Boot with Spring Security for authentication
- CORS is configured to allow frontend communication
- Simple in-memory authentication (replace with database in production)
- JWT token generation for session management

## Production Considerations

- Replace H2 database with a production database (PostgreSQL, MySQL)
- Implement proper password hashing (BCrypt)
- Add JWT token validation and refresh mechanisms
- Implement user registration and password reset
- Add proper logging and monitoring
- Configure HTTPS and security headers

## Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 3000 (frontend) and 8080 (backend) are available
2. **CORS errors**: Backend CORS is configured for `http://localhost:3000`
3. **Build errors**: Ensure Java 17+ and Node.js 16+ are installed
4. **Authentication fails**: Use the test credentials: admin/password

### Logs
- Backend logs are available in the console where you run `mvn spring-boot:run`
- Frontend logs are available in the browser console and terminal
