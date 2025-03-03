import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

type OnboardingNavbarProps = {
  accountType: string;
  userName: string;
};

const OnboardingNavbar = ({ accountType, userName }: OnboardingNavbarProps) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    alert("Logging out...");
    // Add logout logic here
  };

  const handleCloseAccount = () => {
    alert("Account closure process initiated...");
    // Add close account logic here
  };

  return (
    <nav className="bg-[#446688] text-white px-6 py-4">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">YourLogo</div>
          <div className="text-lg font-medium">ConnectMtaani</div>
        </div>

        {/* Profile Icon */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 bg-[#E15200] px-4 py-2 rounded-full hover:bg-[#c74300] transition"
            onClick={toggleProfileMenu}
          >
            <FontAwesomeIcon icon={faUser} className="text-white" />
          </button>

          {/* Dropdown Menu */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg w-64">
              <div className="flex items-center px-4 py-3 border-b">
                <FontAwesomeIcon icon={faUser} className="text-[#E15200] text-xl mr-3" />
                <div>
                  <p className="font-semibold">{userName || "John Doe"}</p>
                  <p className="text-sm text-gray-500">{accountType || "Aspirant"}</p>
                </div>
              </div>
              <button
                onClick={handleCloseAccount}
                className="flex items-center px-4 py-3 w-full hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon icon={faTrashAlt} className="text-[#E15200] mr-3" />
                <span>Close Account</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-3 w-full hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="text-[#E15200] mr-3" />
                <span>Log Out</span>
              </button>
              <button
                onClick={toggleProfileMenu}
                className="flex items-center px-4 py-3 w-full hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon icon={faTimes} className="text-[#E15200] mr-3" />
                <span>Close</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default OnboardingNavbar;
