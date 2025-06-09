// src/components/MyButton.jsx
import React from 'react';

function MyButton({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {label}
    </button>
  );
}

export default MyButton;
