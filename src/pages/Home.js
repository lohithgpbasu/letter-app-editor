import React, { useState } from 'react';
import TextEditor from '../components/TextEditor';
import Navbar from '../components/Navbar'; // Import Navbar

const Home = () => {
  const [token, setToken] = useState(null);

  return (
    <div className="home">
      {/* Pass both token and setToken to Navbar */}
      <Navbar setToken={setToken} />
      <h2>Welcome to Letter Editor</h2>
      <TextEditor token={token} setToken={setToken} />
    </div>
  );
};

export default Home;