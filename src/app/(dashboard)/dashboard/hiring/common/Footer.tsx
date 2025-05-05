const Footer: React.FC = () => {
    return (
      <footer className="bg-white py-4 px-6 shadow-inner">
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ConnectMtaani. All rights reserved.{' '}
          <a
            href="/privacy"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  