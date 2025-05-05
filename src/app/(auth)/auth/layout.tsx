// app/layouts/authLayout.tsx

import React, { ReactNode } from 'react';
import "@/styles/globals.css"

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body className="bg-gray-100">
          <div className="min-h-screen flex flex-col">
            {/* Here you can put a navigation bar or any global component */}

            {/* The children content of each auth page will be injected here */}
            {children}
          </div>
        </body>
      </html>
    </>
  );
};

export default AuthLayout;
