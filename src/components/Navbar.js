import React from 'react';
import AuthButton from './AuthButton';

const Navbar = ({ setToken }) => {
  return (
    <nav className="navbar">
      <h1>Letter Editor</h1>
      <AuthButton setToken={setToken} />
    </nav>
  );
};

export default Navbar;