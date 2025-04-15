"use client"

import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import AuthFooter from '../authfooter';
import AuthNavbar from '../authnavbar';
import { useRouter } from 'next/navigation'; 

const SignUpChoices: React.FC = () => {
  const [accountType, setAccountType] = useState<'client' | 'jobSeeker' | null>(null);
  const [showForm, setShowForm] = useState(false);
   


  // State to handle form input values and errors
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    county: 'Kenya',
    termsAccepted: false,
    emailsAccepted: false,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    termsAccepted: '',
    emailsAccepted: '',
  });

  const handleAccountTypeSelection = (type: 'client' | 'jobSeeker') => {
    setAccountType(type);
    setShowForm(false);
  };

  const handleJoinClick = () => setShowForm(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let valid = true;

    // Validate required fields and give specific feedback
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
      valid = false;
    } else {
      newErrors.firstName = '';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    } else {
      newErrors.lastName = '';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'A valid email address is required';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    } else {
      newErrors.password = '';
    }

    if (accountType === 'client') {
      if (!formData.companyName) {
        newErrors.companyName = 'Company name is required';
        valid = false;
      } else {
        newErrors.companyName = '';
      }
      // if (!formData.jobTitle) {
      //   newErrors.jobTitle = 'Job title is required';
      //   valid = false;
      // } else {
      //   newErrors.jobTitle = '';
      // }
      // if (!formData.projectDescription) {
      //   newErrors.projectDescription = 'Project description is required';
      //   valid = false;
      // } else {
      //   newErrors.projectDescription = '';
      // }
    }

    if (accountType === 'jobSeeker') {
      // if (!formData.skills) {
      //   newErrors.skills = 'Skills are required';
      //   valid = false;
      // } else {
      //   newErrors.skills = '';
      // }
      // if (!formData.aboutMe) {
      //   newErrors.aboutMe = 'About me section is required';
      //   valid = false;
      // } else {
      //   newErrors.aboutMe = '';
      // }
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'This field is required';
      valid = false;
    } else {
      newErrors.termsAccepted = '';
    }

    if (!formData.emailsAccepted) {
      newErrors.emailsAccepted = 'You must accept the email preferences';
      valid = false;
    } else {
      newErrors.emailsAccepted = '';
    }

    setErrors(newErrors);
    return valid;
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     // Proceed with form submission
  //     console.log('Form submitted successfully');
  //   }
  // };

  const renderClientFields = () => (
    <>
      <input
        type="text"
        placeholder="Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.companyName && <div className="text-red-500 text-sm">{errors.companyName}</div>}

      {/* <input
        type="text"
        placeholder="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.jobTitle && <div className="text-red-500 text-sm">{errors.jobTitle}</div>}

      <textarea
        placeholder="Project Description"
        name="projectDescription"
        value={formData.projectDescription}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.projectDescription ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.projectDescription && <div className="text-red-500 text-sm">{errors.projectDescription}</div>} */}

      <select
        name="county"
        value={formData.county}
        onChange={handleInputChange}
        className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E15200] transition-all"
      >
        <option value="Kenya">Please select your county</option>
        <option value="Kenya">Mombasa</option>
        <option value="Kenya">Kisumu</option>
        <option value="Kenya">Nakuru</option>
        <option value="Kenya">Uasin Gishu</option>
        <option value="Kenya">Baringo</option>
        <option value="Kenya">Trans Nzoia</option>
        {/* Add other countries */}
      </select>
    </>
  );

  const renderJobSeekerFields = () => (
    <>
      {/* <input
        type="text"
        placeholder="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.jobTitle && <div className="text-red-500 text-sm">{errors.jobTitle}</div>} */}

      {/* <input
        type="text"
        placeholder="Skills"
        name="skills"
        value={formData.skills}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.skills ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.skills && <div className="text-red-500 text-sm">{errors.skills}</div>}

      <textarea
        placeholder="About Me"
        name="aboutMe"
        value={formData.aboutMe}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.aboutMe ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.aboutMe && <div className="text-red-500 text-sm">{errors.aboutMe}</div>} */}

     <select
        name="county"
        value={formData.county}
        onChange={handleInputChange}
        className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E15200] transition-all"
      >
        <option value="Kenya">Please select your county</option>
        <option value="Kenya">Mombasa</option>
        <option value="Kenya">Kisumu</option>
        <option value="Kenya">Nakuru</option>
        <option value="Kenya">Uasin Gishu</option>
        <option value="Kenya">Baringo</option>
        <option value="Kenya">Trans Nzoia</option>
        {/* Add other countries */}
      </select>
    </>
  );

  const renderSharedFields = () => (
    <>
      <div className="flex gap-4 mb-6">
      <button
          type="button"
          className="flex items-center justify-center w-full py-2 px-4 border rounded-lg bg-gray-100 hover:bg-gray-200"
          onClick={() => {
            // Logic to handle Apple authentication directly
            console.log('Apple authentication initiated.');
          }}
        >
          <FontAwesomeIcon icon={faApple} className="text-gray-800 mr-2" />
          Continue with Apple
        </button>

        <button
          type="button"
          className="flex items-center justify-center w-full py-2 px-4 border rounded-lg bg-gray-100 hover:bg-gray-200"
          onClick={() => {
            // Logic to handle Google authentication directly
            console.log('Google authentication initiated.');
          }}
        >
          <FontAwesomeIcon icon={faGoogle} className="text-gray-800 mr-2" />
          Continue with Google
        </button>

      </div>
      <div className="flex gap-10">
      <input type="text"  placeholder="First Name"  name="firstName" value={formData.firstName}
        onChange={handleInputChange}
        className={` w-[350px] p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300 '}`}
      />
      {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}

      <input type="text"  placeholder="Last Name" name="lastName"  value={formData.lastName}
        onChange={handleInputChange}
        className={`w-[350px] p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}

      </div>

      <input
        type="email"
        placeholder =  {accountType === 'client' ? 'Please enter your work email address' :
          accountType === 'jobSeeker' ? 'Please enter your email address' :
          'Please Enter Your Email Address'}
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

      <input
        type="password"
        placeholder="Password (8 or more characters)"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
      <input
        type="password"
        placeholder="Please confirm your password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className={`w-full p-4 mb-4 border-2 rounded-lg focus:ring-2 transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
    </>

    
  );
  
  const router = useRouter(); // Replace useNavigate with useRouter
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm(); // Assuming validateForm is defined elsewhere
    console.log("Form is valid:", isValid);

    if (isValid) {
      setIsSubmitting(true); // Disable the button during submission
      setShowSuccessMessage(true); // Show the success message
      setShowForm(false); // Hide the form after submission

      // After 3 seconds, hide the success message and redirect
      setTimeout(() => {
        setShowSuccessMessage(false); // Hide the success message
        router.push('/email-verification'); // Use router.push for navigation
      }, 3000); // Adjust the delay if necessary

      console.log('Form submitted successfully');
    }
  };
  


  return (
    <>
      <AuthNavbar accountType={accountType} handleJoinClick={handleJoinClick} />
  
      {/* Full-page success message */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-75 flex justify-center items-center z-50">
          <div className="text-green-500 text-xl text-center bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-[50%]">
            <h2 className="font-bold text-3xl mb-4">Congratulations!</h2>
            <p className="text-lg mb-4">Details saved successfully. Please wait to be redirected...</p>
            <p className="text-sm text-gray-600">You will be redirected shortly...</p>
          </div>
        </div>
      )}
  
      {/* Main Form */}
      {!showSuccessMessage && (
        <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
          <div className="w-[800px] p-12 bg-white rounded-lg shadow-lg flex flex-col">
            <h2 className="text-3xl font-bold text-center text-white -mx-[47px] h-[100px] -mt-[47px] mb-8 pt-[30px] bg-[#446688]">
              {accountType === 'client' ? 'Sign up to hire approved skill for your need.' :
                accountType === 'jobSeeker' ? 'Sign up to find work you love' :
                'Join as a client or an aspirant'}
            </h2>
  
            {!showForm ? (
              <div className="flex-grow">
                {/* Account selection buttons */}
                <div className="mt-6 flex justify-between space-x-6">
                  <button
                    onClick={() => handleAccountTypeSelection('client')}
                    className={`w-full py-8 text-xl font-semibold justify-between ${
                      accountType === 'client' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    } border border-gray-300 rounded-lg hover:bg-blue-400 focus:outline-none transition duration-300`}
                  >
                    <div className="flex justify-between mr-2 ml-4">
                      <FontAwesomeIcon icon={faUser} className="text-white text-3xl mb-2" />
                      <span className="w-8 h-8 rounded-full border-2 border-gray-600">{accountType === 'client' ? '✔' : ''}</span>
                    </div>
                    <span className="text-left ml-2">I&apos;m a client, hiring for a project</span>
                  </button>
  
                  <button
                    onClick={() => handleAccountTypeSelection('jobSeeker')}
                    className={`w-full py-8 text-xl font-semibold ${
                      accountType === 'jobSeeker' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    } border border-gray-300 rounded-lg hover:bg-blue-400 focus:outline-none transition duration-300`}
                  >
                    <div className="flex justify-between ml-2 mr-4">
                      <FontAwesomeIcon icon={faBriefcase} className="text-white text-3xl mb-2" />
                      <span className="w-8 h-8 rounded-full border-2 border-gray-600 flex items-center justify-center">
                        {accountType === 'jobSeeker' ? '✔' : ''}
                      </span>
                    </div>
                    <span className="flex-grow text-left ml-2">I&apos;m an aspirant, looking for work</span>
                  </button>
                </div>
  
                <div className="mt-6 text-center">
                  <button
                    onClick={handleJoinClick}
                    className={`bg-[#E15200] text-white border-2 border-transparent py-2 px-6 text-lg font-bold rounded transition-all ease-in-out duration-300 hover:bg-white hover:text-[#E15200] hover:border-[#E15200] ${
                      accountType === null ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={accountType === null}
                  >
                    {accountType === 'client' ? 'Join as Client' : accountType === 'jobSeeker' ? 'Join as Aspirant' : 'Create Account'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                {renderSharedFields()}
                {accountType === 'client' ? renderClientFields() : renderJobSeekerFields()}
  
                {/* Terms of Service Checkbox */}
                <div className="mb-4">
                  <label htmlFor="termsAccepted" className="flex items-center text-base">
                    <input
                      id="termsAccepted"
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleCheckboxChange}
                      className="w-6 h-6 mr-3 accent-[#E15200] cursor-pointer"
                    />
                    <span className="text-[#333]">
                      I agree to the 
                      <a href="/terms" className="text-[#E15200] hover:underline mx-1">Terms of Service</a>, 
                      including the 
                      <a href="/user-agreement" className="text-[#E15200] hover:underline mx-1">User Agreement</a>, 
                      and 
                      <a href="/privacy-policy" className="text-[#E15200] hover:underline mx-1">Privacy Policy</a>.
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <div className="text-[#E15200] text-sm mt-1">{errors.termsAccepted}</div>
                  )}
                </div>
              
                {/* Helpful Emails Checkbox */}
                <div className="mb-4">
                  <label htmlFor="emailsAccepted" className="flex items-center text-base">
                    <input
                      id="emailsAccepted"
                      type="checkbox"
                      name="emailsAccepted"
                      checked={formData.emailsAccepted}
                      onChange={handleCheckboxChange}
                      className="w-6 h-6 mr-3 accent-[#E15200] cursor-pointer"
                    />
                    <span className="text-[#333]">
                      Send me helpful emails to find rewarding work and job leads.
                    </span>
                  </label>
                  {errors.emailsAccepted && (
                    <div className="text-[#E15200] text-sm mt-1">{errors.emailsAccepted}</div>
                  )}
                </div>
  
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#E15200] text-white border-2 border-transparent py-2 px-6 text-lg font-bold rounded transition-all ease-in-out duration-300 hover:bg-white hover:text-[#E15200] hover:border-[#E15200]"
                  disabled={isSubmitting} 
                >
                  Create Account
                </button>
              </form>
            )}
  
            <div className="mt-6 text-center text-gray-600">
              <p>
                Already have an account?{' '}
                <a href="/login" className="text-blue-500 hover:underline">
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      
    
    </>
  );
};

export default SignUpChoices;