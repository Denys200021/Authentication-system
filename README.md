# 🔐 MERN Authentication System

A modern, secure full-stack authentication system built with the MERN stack. Features include user registration, login, profile management, and JWT-based authentication with HTTP-only cookies.

## 📸 Screenshots
<table align="center">
  <tr>
    <td align="center">
      <img src="screenshots/home.png" ><br/>
      <em>Home Page</em>
    </td>
    <td align="center">
      <img src="screenshots/login.png" ><br/>
      <em>Login Screen</em>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="screenshots/register.png" ><br/>
      <em>Registration Screen</em>
    </td>
    <td align="center">
      <img src="screenshots/profile.png"><br/>
      <em>Profile Management</em>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="screenshots/dashboard.png" ><br/>
      <em>User Dashboard</em>
    </td>
     <td align="center">
      <img src="screenshots/navbar.png" ><br/>
      <em>Navigation Bar</em>
    </td>
  </tr>
</table>


## [Live Demo](https://authentication-system-lilac-nine.vercel.app)

## 🌟 Features

### 🔐 **Authentication & Security**
- User registration with validation
- Secure login system
- JWT-based authentication
- HTTP-only cookies for token storage
- Password hashing with bcrypt
- Protected routes and middleware
- Logout functionality

### 👤 **User Management**
- User profile page
- Update name and password
- Email displayed (non-editable for security)
- Password confirmation validation
- Real-time form validation
- Toast notifications for user feedback

### 🛡️ **Security Features**
- Password strength requirements
- HTTP-only cookie implementation
- JWT token expiration
- Protected API routes
- CORS configuration for production
- Environment variable management
- Error handling middleware

### 🚀 **Technical Excellence**
- Redux Toolkit for state management
- React Icons for modern iconography
- MongoDB for database
- Express.js RESTful API
- Production-ready deployment configuration

## 🛠️ Technologies Used

### Frontend (Client)
| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 18+ |
| Redux Toolkit | State Management | Latest |
| React Router | Navigation | Latest |
| React Icons | Icon Library | Latest |
| React Toastify | Notifications | Latest |
| Vite | Build Tool | Latest |

### Backend (Server)
| Technology | Purpose | Version |
|------------|---------|---------|
| Node.js | Runtime Environment | 16+ |
| Express.js | Web Framework | Latest |
| MongoDB | Database | Latest |
| Mongoose | ODM | Latest |
| JWT | Authentication | Latest |
| bcryptjs | Password Hashing | Latest |
| cookie-parser | Cookie Management | Latest |
| cors | Cross-Origin Requests | Latest |

### DevOps & Tools
| Tool | Purpose |
|------|---------|
| Git | Version Control |
| npm | Package Management |
| Postman | API Testing |
| dotenv | Environment Variables |

## 🚀 Getting Started


### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ravibhushan10/Authentication-system.git
   cd Authentication-system
   ```

2. **Install Client Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Server Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Client Environment Variables: Create `.env` file in `client/` root directory**
   ```env
   REACT_APP_API_URL="your backend url"
   ```

5. **Server Environment Variables: Create `.env` file in `server/` root directory**
   ```env
   MONGO_URI="your database url"
   PORT="your port number"
   JWT_SECRET="your JWT secret Key"
   NODE_ENV="Development or production according to use"
   CLIENT_URL="your frontend webiste url"
   ```

6. **Start the Server**
   ```bash
   cd server
   npm start
   Server will run on http://localhost:5000
   ```

7. **Start the Client** (in a new terminal)
   ```bash
   cd client
   npm start
   Client will run on http://localhost:3000
   ```

## 📖 Usage Guide

### For Users

1. **Register an Account**
   - Navigate to the Register page
   - Fill in your name, email, and password
   - Confirm your password
   - Click "Register" to create your account

2. **Login**
   - Navigate to the Login page
   - Enter your email and password
   - Click "Sign In" to access your account

3. **Profile Management**
   - Click on your name in the navigation bar
   - Select "Profile" from the dropdown
   - Update your name or password
   - Email is displayed but cannot be changed (for security)
   - Leave password fields blank if you don't want to change it

4. **Logout**
   - Click on your name in the navigation bar
   - Select "Logout" from the dropdown
   - You'll be redirected to the login page


## 🤝 Contributing

### How to Contribute

1. **Fork the Repository**
   - Click the 'Fork' button at the top right of this repository
   - This creates a copy of the project in your GitHub account

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Authentication-system.git
   cd mern-auth
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Test your changes thoroughly
   - Update documentation if needed

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to your forked repository on GitHub
   - Click **"Compare & pull request"**
   - Fill in the PR form:
     - **Title**: Brief summary (e.g., "Add password strength indicator")
     - **Description**: Explain your changes clearly:
       - What changes you made
       - Why you made them
       - Screenshots (if UI changes)
       - Related issue numbers (e.g., "Fixes #123")
   - Click **"Create pull request"**
   - Wait for review and be responsive to feedback


## 👨‍💻 Author
**Ravi Bhushan**
- LinkedIn: [https://www.linkedin.com/in/ravibhushan-kumar-55b312344](https://www.linkedin.com/in/ravibhushan-kumar-55b312344/)
- Portfolio: [https://ravibhushan-portfolio.vercel.app](https://ravibhushan-portfolio.vercel.app)
- GitHub: [@ravibhushan10](https://github.com/ravibhushan10)
- Email: ravibhushankumar87tp@gmail.com

---
<div align="center">
   
### ⭐ Star this repository if it helped you!
**Made with ❤️ by Your Name**
   
   
[Live Demo](https://authentication-system-lilac-nine.vercel.app) · [Report Bug](https://github.com/ravibhushan10/Authentication-system/issues) · [Request Feature](https://github.com/ravibhushan10/Authentication-system/issues)

</div>

---
