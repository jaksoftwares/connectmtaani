"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#123456] text-white">
      <div className="flex flex-col sm:flex-wrap lg:flex-row justify-between items-start py-10 px-6 sm:px-12 gap-10">
        {/* About Us */}
        <div className="w-full sm:w-[45%] lg:w-[20%]">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-sm leading-relaxed mb-4">
            ConnectMtaani is Kenya&apos;s premier platform connecting job seekers and employers in the informal sector. Our goal is to bridge the gap between talent and opportunity with reliability and efficiency.
          </p>
          <Link href="/about" className="text-sm text-blue-300 hover:underline">
            Learn More About Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-[45%] lg:w-[15%]">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/features" className="hover:underline">Features</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="w-full sm:w-[45%] lg:w-[15%]">
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="text-sm space-y-2">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/user-guidelines" className="hover:underline">User Guidelines</Link></li>
            <li><Link href="/support" className="hover:underline">Support Centre</Link></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="w-full sm:w-[45%] lg:w-[20%]">
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 text-2xl mb-6">
            <a href="https://facebook.com" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" className="hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
          </div>
          <form className="text-sm w-full">
            <label htmlFor="newsletter" className="block mb-2">
              Subscribe to our newsletter for updates and opportunities:
            </label>
            <div className="flex flex-col sm:flex-row w-full">
              <input
                type="email"
                id="newsletter"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-md mb-2 sm:mb-0 sm:rounded-l-md border-none outline-none text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full sm:w-[45%] lg:w-[20%]">
          <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:support@connectmtaani.com" className="hover:underline">
              support@connectmtaani.com
            </a>
          </p>
          <p className="text-sm">Phone: +254 700 123 456</p>
          <p className="text-sm">Address: 123 Connect Street, Nairobi, Kenya</p>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-[#123456] text-center py-4 border-t border-white/20">
        <p className="text-sm">© 2024 ConnectMtaani. All Rights Reserved.</p>
        <p className="italic text-sm">Empowering Kenya’s Workforce, One Connection at a Time.</p>
      </div>
    </footer>
  );
};

export default Footer;
