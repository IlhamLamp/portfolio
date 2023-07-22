import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-whiteSec/5 py-4 text-white text-center">
      <p><span className='text-whiteSec'>&copy;</span> {currentYear} <span className='text-primary textShadow'>Ilham.</span> All rights reserved.</p>
    </footer>
  );
};

export default Footer;
