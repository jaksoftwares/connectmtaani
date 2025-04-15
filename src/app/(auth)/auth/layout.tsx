// app/layouts/authLayout.tsx

import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>ConnectMtaani - Authentication</title>
          {/* Add any other head elements here, such as meta tags or links to stylesheets */}
        </head>
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
