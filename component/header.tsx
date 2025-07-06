import React from 'react';

import Image from 'next/image';

const sections = {
  vision: `To build a world where no dream dies in silence, no child goes to bed hungry, and no purpose is buried by poverty. A world where young people rise with clarity, courage, and capacity to transform their lives and the lives of others because someone believed in them.`,

  mission: `To restore dignity and hope by feeding the hungry, housing the homeless, supporting widows and struggling families, funding purpose-driven youths, and empowering small businesses one life at a time.`,

  slogan: `Feeding Hope. Funding Dreams.`,
};

export const Header = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
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
      <div
        style={{
          background:
            'linear-gradient(to bottom right, rgba(153, 81, 0, 0.95), rgba(0, 51, 0, 0.92))',
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />
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
          flexDirection: 'column',
          padding: '0 1rem',
        }}
      >
        <div className='bg-white rounded-2xl flex items-center justify-center'>
          <Image src='/hamrex-logo.png' alt='' width='100' height='10' />
        </div>
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '4rem',
          }}
        >
          Harry Amadi Foundation
        </h1>
        <p
          style={{
            maxWidth: 700,
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.6,
          }}
        >
          {sections.vision}
        </p>
        <button
          style={{
            padding: '10px 50px',
            borderRadius: '8px',
            marginTop: '10px',
          }}
          className='bg-white hover:bg-transparent text-black hover:text-white pointer'
        >
          Join us
        </button>
      </div>
    </div>
  );
};
