ConnectMtaani: Project Setup Guide
Welcome to ConnectMtaani, a platform designed to connect informal and blue-collar workers with short-term job opportunities. This README provides all the necessary steps for setting up and running the project locally for development and collaboration.

Table of Contents
Prerequisites
Project Structure
Backend Setup
Frontend Setup
Environment Variables
Running the Project Locally
Git Workflow
Code Standards
Common Issues
Contact and Support

1. Prerequisites
Ensure the following tools are installed on your local machine:
Node.js (v16.x or higher) – Download here
npm or yarn (comes with Node.js)
MongoDB – Local or cloud instance (e.g., MongoDB Atlas)
Git – Download here
AWS CLI (for contributors managing cloud services) – Setup instructions
Code Editor – VS Code recommended (Download here)

2. Project Structure
The project is divided into two main directories:
backend/: Node.js with Express, managing APIs and database interactions.
frontend/: React.js, managing the user interface.
connectmtaani/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── utils/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
└── README.md


3. Backend Setup
Step 1: Navigate to the Backend Directory
cd backend

Step 2: Install Dependencies
npm install

Step 3: Setup Environment Variables
Create a .env file in the backend/ directory.

Use the following template:
env
PORT=5000
MONGO_URI=<your-mongo-connection-string>
JWT_SECRET=<your-jwt-secret-key>
AWS_ACCESS_KEY_ID=<your-aws-access-key>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-key>
AWS_REGION=<your-region>
AWS_S3_BUCKET=<your-bucket-name>

Step 4: Start the Backend Server
npm run dev

The backend will start on http://localhost:5000.

4. Frontend Setup
Step 1: Navigate to the Frontend Directory
cd frontend

Step 2: Install Dependencies
npm install

Step 3: Setup Environment Variables
Create a .env file in the frontend/ directory.
Use the following template
VITE_API_BASE_URL=http://localhost:5000


Step 4: Start the Frontend Application
npm run dev

The frontend will start on http://localhost:5173.

5. Environment Variables
Backend
The .env file in the backend/ directory should include:
PORT: Port number for the backend server.
MONGO_URI: MongoDB connection string.
JWT_SECRET: Secret key for JSON Web Tokens.
AWS keys for cloud storage (if used).
Frontend
The .env file in the frontend/ directory should include:
VITE_API_BASE_URL: Base URL of the backend API.

6. Running the Project Locally
Start the backend server:
cd backend
npm run dev


Start the frontend:

cd frontend
npm run dev


Visit http://localhost:5173 to access the application.

7. Git Workflow
Follow these steps to contribute:
Clone the repository:
bash
Copy code
git clone https://github.com/jaksoftwares/connectmtaani
cd connectmtaani


Create a new branch:
git checkout -b feature/(branch-name)


Make changes and commit:
git add .
git commit -m "Your commit message"


Push your branch:
git push origin feature/(branch-name)


Create a pull request on GitHub.

8. Code Standards
JavaScript/TypeScript: Follow ESLint and Prettier rules.
Folder Structure: Maintain modular structure for both backend and frontend.
Comments: Add meaningful comments for complex logic.
Commits: Write descriptive commit messages.


9. Common Issues
Port Conflict: If the backend or frontend doesn’t start, check for port conflicts and update the .env file accordingly.
Database Connection Issues: Ensure MONGO_URI is correctly set in the backend .env file.
CORS Errors: Ensure the backend allows requests from http://localhost:5173.
