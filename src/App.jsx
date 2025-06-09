import React, { useState, useEffect } from 'react';

function Button({ children, onClick, variant = 'green', size = 'md', className = '' }) {
  const baseStyles = 'rounded-lg font-semibold shadow-md transition focus:outline-none focus:ring-4 focus:ring-opacity-50';

  const variants = {
    green: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-400',
    red: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400',
  };

  const sizes = {
    md: 'px-7 py-3 text-lg',
    lg: 'px-16 py-6 text-4xl font-extrabold rounded-xl',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}

export default function App() {
  const [showBigYes, setShowBigYes] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [animateYes, setAnimateYes] = useState(false);

  useEffect(() => {
    if (showBigYes) {
      // Add delay for animation after rendering the button
      const timer = setTimeout(() => setAnimateYes(true), 50);
      return () => clearTimeout(timer);
    }
  }, [showBigYes]);

  return (
    <div className="text-center mt-16 font-sans max-w-xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8 tracking-tight text-gray-800">
        Do you love me?
      </h2>

      {!showBigYes && !showVideo && (
        <div className="flex justify-center gap-6 mb-12">
          <Button variant="green" onClick={() => setShowVideo(true)}>
            Yes
          </Button>
          <Button variant="red" onClick={() => setShowBigYes(true)}>
            No
          </Button>
        </div>
      )}

      {showBigYes && !showVideo && (
        <Button
          variant="green"
          size="lg"
          onClick={() => setShowVideo(true)}
          className={`mx-auto transform transition-transform duration-700 ${animateYes ? 'scale-125' : 'scale-75'}`}
        >
          Yes
        </Button>
      )}

      {showVideo && (
        <div className="flex justify-center mt-14">
          <video
            className="w-[300px] h-[500px] rounded-3xl shadow-2xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            controls
            autoPlay
            loop
            muted
          >
            <source src="/happyCar.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}
