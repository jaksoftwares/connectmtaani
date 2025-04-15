"use client";

import Link from "next/link";
import React from "react";

interface NavbarProps {
  accountType: "client" | "jobSeeker" | null;
  handleJoinClick?: () => void;
}

const AuthNavbar: React.FC<NavbarProps> = ({ accountType, handleJoinClick }) => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-[#446688] p-4 border-b-2 border-r-2 border-l-2 mx-16">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left-side: Logo using Next.js Link */}
          <Link href="/" className="text-white text-2xl font-bold">
            ConnectMtaani
          </Link>

          {/* Right-side: Conditional dynamic content */}
          <div className="text-xl text-white">
            {accountType === "client" && (
              <span>
                Looking for work?{" "}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (handleJoinClick) handleJoinClick();
                  }}
                  className="text-[#E15200] font-bold hover:underline focus:outline-none"
                >
                  Apply as an aspirant
                </button>
              </span>
            )}
            {accountType === "jobSeeker" && (
              <span>
                Here to hire skills?{" "}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (handleJoinClick) handleJoinClick();
                  }}
                  className="text-blue-600 font-bold hover:underline focus:outline-none"
                >
                  Join as a client
                </button>
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AuthNavbar;
