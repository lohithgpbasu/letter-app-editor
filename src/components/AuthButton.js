import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthButton = ({ setToken }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
      setToken(decoded.accessToken); // This should now work
      window.history.replaceState({}, document.title, "/");
    }
  }, [setToken]);

  const handleLogin = () => {
    window.location.href = 'https://letter-editor-server-app.vercel.app/auth/google';
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    window.location.href = 'https://letter-editor-server-app.vercel.app/auth/logout';
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout ({user.email})</button>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default AuthButton;
