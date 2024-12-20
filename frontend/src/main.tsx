import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LandingPage from './Pages/Home/HomePage';
import LoginPage from './Pages/Auth/Login/LoginPage';
import SignUpPage from './Pages/Auth/Signup/SignupPage';
import DashboardPage from './Pages/Dashboards/Workers/WorkersDashboardPage';
import HiringPage from './Pages/Hiring/HiringPage';
import WorkerPage from './Pages/Workers/Workers';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import PasswordReset from './Pages/Auth/PasswordReset/Passwordreset';
import ResourcesPage from './Pages/Resources/Resources';
import BlogPage from './Pages/Resources/sections/blogpage';
import PopularJobCategories from './Pages/jobcategories/popularCategories';

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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset" element={<PasswordReset/>}/>
        <Route path="/Resources" element={<ResourcesPage/>}/>
        <Route path="/blogs" element={<BlogPage/>}/>
        <Route path="/popularjobcategories" element={<PopularJobCategories/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);