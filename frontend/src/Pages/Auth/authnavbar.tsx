import React from 'react';

interface NavbarProps {
  accountType: 'client' | 'jobSeeker' | null;
}

const AuthNavbar: React.FC<NavbarProps> = ({ accountType }) => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-xl font-bold">Connect Mtaani</a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-black hover:underline">Home</a></li>
          {accountType === 'client' && (
            <>
              <li><a href="/post-job" className="text-black hover:underline">Post a Job</a></li>
              <li><a href="/my-jobs" className="text-black hover:underline">My Jobs</a></li>
            </>
          )}
          {accountType === 'jobSeeker' && (
            <>
              <li><a href="/find-jobs" className="text-black hover:underline">Find Jobs</a></li>
              <li><a href="/my-applications" className="text-black hover:underline">My Applications</a></li>
            </>
          )}
          <li><a href="/contact" className="text-black hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default AuthNavbar;
