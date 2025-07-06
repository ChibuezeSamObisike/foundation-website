/* eslint-disable @typescript-eslint/no-explicit-any */
import { About } from '@/component/about';
import { FocusArea } from '@/component/focus-area';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import './globals.css';
import { Header } from '@/component/header';
import ProjectCarousel from '@/component/carousel';

const sections = {
  about: `Harry Excellent Amadi is not just a name, he is a movement. A man with an uncommon passion for people and a deep burden to rewrite stories that were once labeled “hopeless.” Born with nothing but a dream and relentless faith, Harry rose from humble beginnings to build a global-impact brand — Hamrex and Growmie Group, with subsidiaries spanning real estate, tech, education, media, construction, and philanthropy.

Through everything he has built, one truth remains constant: he believes people matter.

And this is the heartbeat behind the Harry Excellent Amadi Foundation, a platform birthed not for fame, but for impact. Harry believes that no child should go to bed hungry. No youth should wander life purposelessly. No widow should cry alone. And no dream should die just because of lack of support.

With every land sold, every business built, and every stage he stands on he is giving back. Not out of excess, but out of purpose.

A builder of people. A restorer of hope. A voice for the forgotten. A father to the next generation of dreamers. He is not just working for now — he is building for eternity.`,

  vision: `To build a world where no dream dies in silence, no child goes to bed hungry, and no purpose is buried by poverty. A world where young people rise with clarity, courage, and capacity to transform their lives and the lives of others because someone believed in them.`,

  mission: `To restore dignity and hope by feeding the hungry, housing the homeless, supporting widows and struggling families, funding purpose-driven youths, and empowering small businesses one life at a time.`,

  slogan: `Feeding Hope. Funding Dreams.`,
};

const ImageSection = ({
  title,
  children,
  image,
}: {
  title: string;
  children: ReactNode;
  image: string;
}) => (
  <section style={{ padding: '4rem 1.5rem' }}>
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {image && (
        <div style={{ width: '100%', height: '300px', position: 'relative' }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      <div style={{ padding: '2rem' }}>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#333',
          }}
        >
          {title}
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#555' }}>
          {children}
        </p>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <div
        style={{ margin: '10px auto' }}
        className='flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto'
      >
        <ImageSection image='/mission.jpeg' title='Mission Statement'>
          {sections.mission}
        </ImageSection>
        <ImageSection image='/vision.jpeg' title='Vision Statement'>
          {sections.vision}
        </ImageSection>
      </div>

      <FocusArea />

      <ProjectCarousel />

      <footer
        style={{
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#0c2c0c',
          color: '#fff',
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Harry Excellent Amadi Foundation.
          All rights reserved.
        </p>
        <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
          {sections.slogan}
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
