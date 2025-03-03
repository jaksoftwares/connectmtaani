// app/layout.tsx

// import "../styles/globals.css"
import '../styles/globals.css';

import React from 'react';
import Header from '@/components/Common/Header/Header';
import Footer from '@/components/Common/Footer/Footer';
// import Sidebar from '@/components/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="main-content">
          {/* <Sidebar /> */}
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
