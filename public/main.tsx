import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LandingPage from './Pages/Home/HomePage';
import LoginPage from './Pages/Auth/Login/LoginPage';
// import SignUpPage from './Pages/Auth/Signup/SignupPage';
import DashboardPage from './Pages/Dashboards/Workers/WorkersDashboardPage';
import HiringPage from './Pages/Hiring/HiringPage';
import WorkerPage from './Pages/Workers/Workers';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import PasswordReset from './Pages/Auth/PasswordReset/Passwordreset';
import ResourcesPage from './Pages/Resources/Resources';
import BlogPage from './Pages/Resources/sections/blogpage';
import PopularJobCategories from './Pages/JobCategories/popularCategories';
import EmployersDashboard from './Pages/Dashboards/Hiring/HiringDashboardPage';
import JobSeekersDashboard from './Pages/Dashboards/Workers/WorkersDashboardPage';
import AdminLayout from './Pages/Dashboards/Admin/AdminLayout';
import SignUpChoices from './Pages/Auth/Signup/signupchoices';
import AuthNavbar from './Pages/Auth/authnavbar';
import AuthFooter from './Pages/Auth/authfooter';
import OnboardingDashboard from './Pages/Auth/onboarding/onboarding';
import EmailVerification from './Pages/Auth/onboarding/emailverification';
import OnboardingNavbar from './Pages/Auth/onboarding/onboardingnav';
import AspirantOnboardingDashboard from './Pages/Auth/onboarding/aspirantonboarding';
import ClientOnboardingDashboard from './Pages/Auth/onboarding/Clientonboarding/onboardingdashboard';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/hiring" element={<HiringPage />} />
        <Route path="/workers" element={<WorkerPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/hireworkers" element={<EmployersDashboard />} />
        <Route path="/popularjobcategories" element={<PopularJobCategories />} />
        <Route path="/findwork" element={<JobSeekersDashboard />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/signup" element={<SignUpChoices />} />
        <Route path="/authnav" element={<AuthNavbar accountType={null}  />} />
        <Route path="/authFooter" element={<AuthFooter />} />
        <Route path="/onboarding" element={<OnboardingDashboard/>}/>
        <Route path="/email-verification" element={<EmailVerification/>}/>
        <Route path="/onboardingnavigation" element={<OnboardingNavbar accountType={''} userName={''}/>}/>
        <Route path="/aspirantonboarding" element={<AspirantOnboardingDashboard/>}/>
        <Route path="/client-onboarding" element={<ClientOnboardingDashboard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

