import React from 'react';
import Image from 'next/image';

export const About = () => {
  return (
    <section
      style={{ margin: '50px 0px', padding: '20px' }}
      className='px-4 mx-auto flex items-center justify-center'
    >
      <div className='mt-5 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12'>
        <div className='flex-shrink-0'>
          <Image
            src='/excel.jpg'
            alt='Harry Excellent Amadi'
            width={500}
            height={500}
            className='rounded-xl shadow-lg object-cover'
          />
        </div>

        <div id='about' className='max-w-2xl m-10 text-center md:text-left'>
          <h2
            style={{ marginBottom: 6 }}
            className='text-4xl font-bold text-gray-800 mb-10'
          >
            About Harry Excellent Amadi
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'rgb(122, 122, 122)',
              marginTop: '12px',
            }}
            className='text-lg text-gray-700 leading-relaxed'
          >
            Harry Excellent Amadi is not just a name, he is a movement. A man
            with an uncommon passion for people and a deep burden to rewrite
            stories that were once labeled “hopeless.” Born with nothing but a
            dream and relentless faith, Harry rose from humble beginnings to
            build a global-impact brand — Hamrex and Growmie Group, with
            subsidiaries spanning real estate, tech, education, media,
            construction, and philanthropy.
            <br />
            <br />
            Through everything he has built, one truth remains constant: he
            believes people matter. And this is the heartbeat behind the Harry
            Excellent Amadi Foundation, a platform birthed not for fame, but for
            impact. Harry believes that no child should go to bed hungry. No
            youth should wander life purposelessly. No widow should cry alone.
            And no dream should die just because of lack of support.
            <br />
            <br />
            With every land sold, every business built, and every stage he
            stands on, he is giving back. Not out of excess, but out of purpose.
            A builder of people. A restorer of hope. A voice for the forgotten.
            A father to the next generation of dreamers. He is not just working
            for now — he is building for eternity.
          </p>
        </div>
      </div>
    </section>
  );
};
