import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-4 text-white text-center">
      <p>&copy; {currentYear} Ilham. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
