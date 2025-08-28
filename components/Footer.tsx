
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} MetaSurfAI. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
