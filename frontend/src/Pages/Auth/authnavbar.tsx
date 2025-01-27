import React from 'react';

interface NavbarProps {
  accountType: 'client' | 'jobSeeker' | null;
  handleJoinClick?: () => void;  // handleJoinClick is now optional
}

const AuthNavbar: React.FC<NavbarProps> = ({ accountType, handleJoinClick }) => {
  return (
    <div className="bg-gray-100">
      {/* <nav className="bg-gray-100 p-4 border-b-2 border-r-2 border-l-2 mx-16"> */}
      <nav className=" bg-[#446688] p-4 border-b-2 border-r-2 border-l-2 mx-16">
   
        <div className="container mx-auto flex justify-between items-center">
          {/* Left-side: Logo */}
          {/* <a href="/" className="text-[#E15200] text-2xl font-bold">ConnectMtaani</a> */}
          <a href="/" className="text-white text-2xl font-bold">ConnectMtaani</a>
          
          {/* Right-side: Conditional dynamic content */}
          <div className="text-xl text-white">
            {accountType === 'client' && (
              <span>
                Looking for work?{' '}
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();  // Prevent the default link behavior
                    if (handleJoinClick) handleJoinClick();  // Check if handleJoinClick is defined
                  }}
                  // className="text-blue-600 hover:underline "
                  className="text-[#E15200] font-bold  hover:underline "
                >
                  Apply as an aspirant
                </a>
              </span>
            )}
            {accountType === 'jobSeeker' && (
              <span>
                Here to hire skills?{' '}
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();  // Prevent the default link behavior
                    if (handleJoinClick) handleJoinClick();  // Check if handleJoinClick is defined
                  }}
                  className="text-blue-600 hover:underline font-bold"
                >
                  Join as a client
                </a>
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AuthNavbar;
