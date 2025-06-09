import React, { useState } from 'react';

function LoveMessage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <button
        onClick={handleClick}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#2196f3',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        Click Me
      </button>

      {showMessage && (
        <p style={{ fontSize: '24px', color: '#e91e63', marginTop: '20px' }}>
          ❤️ I love you
        </p>
      )}
    </div>
  );
}

export default LoveMessage;
