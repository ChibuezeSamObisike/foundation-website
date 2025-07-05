import React from 'react';

const HomePage = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      {/* Background image */}
      <div
        style={{
          backgroundImage: 'url(/harry-child.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          background:
            'linear-gradient(to bottom right, rgba(255,165,0,0.7), rgba(0,128,0,0.75))',
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Harry Amadi Foundation
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
