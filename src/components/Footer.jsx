import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-zinc-900">
      <p className="text-zinc-600 text-sm">
        &copy; {new Date().getFullYear()} Janriz Mathew Libres. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
