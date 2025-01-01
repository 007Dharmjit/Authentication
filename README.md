# **Authentication System**

A robust full-stack authentication system leveraging modern technologies. The project includes secure user registration, login functionality, and token-based authentication, designed with scalability and maintainability in mind.

---

## **Table of Contents**

1. [Features](#features)  
2. [Technology Stack](#technology-stack)  
3. [Prerequisites](#prerequisites)  
4. [Installation and Setup](#installation-and-setup)  
5. [Usage](#usage)  
6. [Project Structure](#project-structure)  
7. [License](#license)

---

## **Features**

- **Secure Authentication**: Implements JSON Web Token (JWT)-based authentication with hashed passwords for added security.  
- **Modern UI/UX**: Built with React and styled using Tailwind CSS for responsiveness and aesthetics.  
- **API Integration**: Clean and modular RESTful API endpoints.  
- **Cross-Origin Compatibility**: Configured to handle CORS policies seamlessly.  
- **Code Quality**: Integrated ESLint for maintaining high code standards.  

---

## **Technology Stack**

### **Frontend**
- **React**: Component-based architecture for dynamic and responsive UI.  
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.  
- **React Router DOM**: Declarative routing for seamless navigation.  
- **Axios**: Promise-based HTTP client for API communication.  
- **JWT Decode**: For token parsing and decoding.  

### **Backend**
- **Node.js**: Asynchronous JavaScript runtime for server-side logic.  
- **Express**: Lightweight web framework for building RESTful APIs.  
- **Mongoose**: Elegant MongoDB object modeling for schema management.  
- **JWT**: Stateless token-based authentication.  
- **Bcrypt**: Secure password hashing.  
- **Cors**: Handles cross-origin requests.  
- **Cookie-Parser**: Simplifies cookie management.

---

## **Prerequisites**

Before you begin, ensure you have the following installed:  
- **Node.js** (v18 or higher)  
- **MongoDB** (local instance or cloud-based service)  
- **Package Manager**: npm or yarn  

---

## **Installation and Setup**

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
2. **Set Up the Frontend**
   ```bash
   cd frontend
   npm install
3. **Set Up the Backend**
   ```bash
   cd ../backend
   npm install
4.**Run the Application**
  1. Start the Backend Server:
      ```bash
      npm start
      
  2.Start the Frontend:
     
     ```bash
      npm start 
   Open your browser and navigate to http://localhost:5173. 
   
##🧮 Usage
   1. Frontend Development: React application with hot module reloading for a seamless development experience.
   2. Backend Development: Express server with integrated MongoDB for dynamic and secure data management.

##Project Structure
   project-root
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Route-specific pages
│   │   ├── styles/     # Custom styling
│   │   └── App.js      # Entry point
│   └── package.json    # Frontend dependencies
├── backend/
│   ├── models/         # Database schemas
│   ├── routes/         # API endpoints
│   ├── server.js       # Main server file
│   └── package.json    # Backend dependencies
└── README.md


##📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🧑‍💻 Author
Dharmjit Chauhan

GitHub: 007Dharmjit
