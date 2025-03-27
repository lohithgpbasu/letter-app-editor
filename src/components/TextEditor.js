import React, { useState } from 'react';
import axios from 'axios';

const TextEditor = ({ token }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const handleSave = async () => {
    if (!token) {
      alert('Please login first');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/drive/save', {
        token,
        content,
        title
      });
      alert(`Letter saved to Google Drive with ID: ${response.data.fileId}`);
    } catch (error) {
      alert('Error saving letter: ' + error.message);
    }
  };

  return (
    <div className="editor">
      <input
        type="text"
        placeholder="Letter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your letter here..."
      />
      <button onClick={handleSave}>Save to Google Drive</button>
    </div>
  );
};

export default TextEditor;