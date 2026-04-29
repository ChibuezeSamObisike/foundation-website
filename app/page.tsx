'use client';
import { About } from '@/component/about';
import { FocusArea } from '@/component/focus-area';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import { Header } from '@/component/header';
import ProjectCarousel from '@/component/carousel';
import { Navbar } from '@/component/nav';
import { EventSponsorshipModal, SpeakerEngagementModal } from '@/component/form';
import BeneficiariesSection from '@/component/beneficiaries';

const sections = {
  about: `Harry Excellent Amadi is not just a name, he is a movement. A man with an uncommon passion for people and a deep burden to rewrite stories that were once labeled “hopeless.” Born with nothing but a dream and relentless faith, Harry rose from humble beginnings to build a global-impact brand — Hamrex and Growmie Group, with subsidiaries spanning real estate, tech, education, media, construction, and philanthropy.

Through everything he has built, one truth remains constant: he believes people matter.

And this is the heartbeat behind the Harry Excellent Amadi Foundation, a platform birthed not for fame, but for impact. Harry believes that no child should go to bed hungry. No youth should wander life purposelessly. No widow should cry alone. And no dream should die just because of lack of support.

With every land sold, every business built, and every stage he stands on he is giving back. Not out of excess, but out of purpose.

A builder of people. A restorer of hope. A voice for the forgotten. A father to the next generation of dreamers. He is not just working for now — he is building for eternity.`,

  vision: `To build a world where no dream dies in silence, no child goes to bed hungry, and no purpose is buried by poverty. `,

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
  <article className='promise-card soft-card reveal-up'>
    {image && (
      <div className='promise-card__image'>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    )}

    <div className='promise-card__body'>
      <p className='eyebrow' style={{ marginBottom: '0.75rem' }}>
        Foundation promise
      </p>
      <h2 className='promise-card__title'>
        {title}
      </h2>
      <p>
        {children}
      </p>
    </div>
  </article>
);

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSpeakerModal, setOpenSpeakerModal] = useState(false);
  return (
    <>
      <EventSponsorshipModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
      <SpeakerEngagementModal
        isOpen={openSpeakerModal}
        onClose={() => {
          setOpenSpeakerModal(false);
        }}
      />
      <div>
        <Navbar
          openAppModal={() => {
            setOpenModal(true);
          }}
          openSpeakerModal={() => {
            setOpenSpeakerModal(true);
          }}
        />
        <Header
          openAppModal={() => {
            setOpenModal(true);
          }}
          openSpeakerModal={() => {
            setOpenSpeakerModal(true);
          }}
        />
        <About />
        <section className='section-shell landing-band promise-grid'>
          <ImageSection image='/mission.jpeg' title='Mission Statement'>
            {sections.mission}
          </ImageSection>
          <ImageSection image='/vision.jpeg' title='Vision Statement'>
            {sections.vision}
          </ImageSection>
        </section>

        <FocusArea />

        <BeneficiariesSection />

        <ProjectCarousel />

        <footer className='site-footer'>
          <div className='section-shell site-footer__inner'>
            <div className='site-footer__grid'>
              <div>
                <h3>Harry Excellent Amadi Foundation</h3>
                <p style={{ marginTop: 16 }}>
                  Restoring dignity through food relief, family support,
                  mentorship, medical assistance, and practical opportunities for
                  people who need a hand up.
                </p>
              </div>
              <div>
                <h4>Explore</h4>
                <a href='#about'>About the Foundation</a>
                <a href='#focus'>Core Focus Areas</a>
                <a href='#projects'>Projects</a>
              </div>
              <div>
                <h4>Get Support</h4>
                <button type='button' onClick={() => setOpenModal(true)}>
                  Event Sponsorship
                </button>
                <button type='button' onClick={() => setOpenSpeakerModal(true)}>
                  Speaker Engagement
                </button>
                <a href='https://growmieuniversity.com/'>Business Grant</a>
              </div>
            </div>
            <div className='site-footer__bottom'>
              <span>
                &copy; {new Date().getFullYear()} Harry Excellent Amadi Foundation.
                All rights reserved.
              </span>
              <strong>{sections.slogan}</strong>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
