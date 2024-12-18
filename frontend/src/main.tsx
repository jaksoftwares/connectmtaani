import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LandingPage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
import SignUpPage from './Pages/Signup/SignupPage';
import DashboardPage from './Pages/Dashboards/Workers/WorkersDashboardPage';
import HiringPage from './Pages/Hiring/HiringPage';
import WorkerPage from './Pages/Workers/Workers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/hiring" element={<HiringPage/>}/>
        <Route path="/workers" element={<WorkerPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);