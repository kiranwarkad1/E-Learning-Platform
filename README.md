# MERN E-Learning Platform

A full-stack E-Learning platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project aims to provide a robust learning management system with features for students and instructors.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization (JWT, roles: student/instructor/admin)
- Course creation, management, and enrollment
- Video and resource uploads
- Progress tracking
- Interactive quizzes and assignments
- Admin dashboard for managing users and content
- Responsive frontend for web and mobile devices

## Tech Stack

- **Frontend**: React.js, Redux, Axios, Bootstrap/TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT, bcrypt
- **Cloud Storage**: Cloudinary
- **Other**: Multer (file uploads), dotenv, CORS

## Project Structure

```
/client             # React frontend
/server             # Node.js/Express backend
/server/models      # Mongoose models
/server/routes      # Express routes (API)
/server/controllers # Route controllers
/server/middleware  # Auth and other middleware
/server/utils       # Utility functions
.env                # Environment variables
README.md           # This file
package.json        # Project metadata (both client and server)
```

## Installation

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB instance (local or cloud)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanketkanse999/MERN_E-Learning-Platform.git
   cd MERN_E-Learning-Platform
   ```

2. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in `/server`.
   - Example for backend:
     ```
   
      MONGO_URI=your_mongodb_uri_here
     
      JWT_SECRET=your_jwt_secret_here
     
      CLOUDINARY_CLOUD_NAME=your_cloud_name_here
      CLOUDINARY_API_KEY=your_cloudinary_api_key_here
      CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here
     
      STRIPE_SECRET_KEY=your_stripe_secret_key_here
     
      PORT=5000
     ```

5. **Run the application:**
   - **Backend:**
     ```bash
     cd server
     npm run dev
     ```
   - **Frontend:**
     ```bash
     cd client
     npm run dev
     ```

## Usage

- Register as a new user or login.
- Browse available courses and enroll.
- Instructors can create and manage courses.
- Admins can manage users and content.
- Track your course progress and complete assignments.

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT
- `GET /api/courses` — List all courses
- `POST /api/courses` — Create a new course (instructor only)
- `GET /api/users/profile` — Get user profile

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Contact

- **Author1:** Sanket Kanase                                                   
- **GitHub:** [sanketkanse999](https://github.com/sanketkanse999)

- **Author2:** Kiran Warkad                                                   
- **GitHub:** [kiranwarkad1](https://github.com/kiranwarkad1)

[⬆️ Back to top](#mern-e-learning-platform)                                                                                                                                                                                   
---
