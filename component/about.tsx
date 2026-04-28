import React from 'react';
import Image from 'next/image';

const aboutHighlights = [
  {
    value: '01',
    label: 'People before publicity',
  },
  {
    value: '02',
    label: 'Practical help, not empty promises',
  },
  {
    value: '03',
    label: 'Dreams funded with dignity',
  },
];

export const About = () => {
  return (
    <section className='section-shell landing-band reveal-up' id='about'>
      <div className='about-panel'>
        <div className='about-media'>
          <div className='about-photo-card'>
            <Image
              src='/excel.jpg'
              alt='Harry Excellent Amadi'
              width={560}
              height={620}
              className='about-photo'
            />
            <div className='about-photo-tag'>
              <span>Founder</span>
              <strong>Harry Excellent Amadi</strong>
            </div>
          </div>
          <div className='about-quote-card'>
            <p>
              “Giving back is not a campaign. It is a responsibility to restore
              hope where life has been hard.”
            </p>
          </div>
        </div>

        <div className='about-copy'>
          <p className='eyebrow'>About the foundation</p>
          <h2 className='section-title about-title'>
            Built for people who need hope to become visible again.
          </h2>
          <p className='about-lead'>
            Harry Excellent Amadi is not just a name, he is a movement. A man
            with an uncommon passion for people and a deep burden to rewrite
            stories that were once labeled “hopeless.” Born with nothing but a
            dream and relentless faith, Harry rose from humble beginnings to
            build a global-impact brand — Hamrex and Growmie Group, with
            subsidiaries spanning real estate, tech, education, media,
            construction, and philanthropy.
          </p>
          <p className='section-copy about-body'>
            Through everything he has built, one truth remains constant: he
            believes people matter. And this is the heartbeat behind the Harry
            Excellent Amadi Foundation, a platform birthed not for fame, but for
            impact. Harry believes that no child should go to bed hungry. No
            youth should wander life purposelessly. No widow should cry alone.
            And no dream should die just because of lack of support.
          </p>
          <div className='about-highlight-grid'>
            {aboutHighlights.map((item) => (
              <div
                key={item.value}
                className='about-highlight-card'
              >
                <span>{item.value}</span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
