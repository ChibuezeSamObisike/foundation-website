'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

const ImageSection = ({
  title,
  children,
  image,
}: {
  title: string;
  children: ReactNode;
  image: string;
}) => (
  <article className='project-card soft-card reveal-up'>
    {image && (
      <div className='project-card__image'>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    )}
    <div className='project-card__body'>
      <h3 className='project-card__title'>{title}</h3>
      <p>{children}</p>
    </div>
  </article>
);

const projects = [
  {
    title: '1% for Impact Project',
    image: '/1.jpeg',
    description: 'A small contribution from many creates big change.',
  },
  {
    title: 'Feed the Future Campaign',
    image: '/2.jpeg',
    description: 'Ending hunger through sustainable food programs.',
  },
  {
    title: 'Home Again Initiative',
    image: '/3.jpeg',
    description: 'Bringing displaced individuals back to stability.',
  },
  {
    title: 'Widows Uplift Drive',
    image: '/4.jpeg',
    description: 'Support, dignity, and empowerment for widows.',
  },
  {
    title: 'Medical Mercy Missions',
    image: '/5.jpeg',
    description: 'Delivering healthcare to the underserved.',
  },
  {
    title: 'Purpose Discovery Boot Camps',
    image: '/6.jpeg',
    description: 'Helping youth uncover purpose and direction.',
  },
  {
    title: 'SkillUp Empowerment Program',
    image: '/7.jpeg',
    description: 'Equipping people with skills to thrive.',
  },
  {
    title: 'Grant-A-Dream Challenge',
    image: 'https://images.pexels.com/photos/325531/pexels-photo-325531.jpeg',
    description: 'Turning dreams into reality through small grants.',
  },
  {
    title: 'Back-to-School Kit Drive',
    image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg',
    description: 'Giving children tools for academic success.',
  },
];

export default function ProjectGrid() {
  return (
    <section className='landing-band' id='projects'>
      <div className='section-shell'>
        <div style={{ maxWidth: 760, margin: '0 auto 48px', textAlign: 'center' }}>
          <p className='eyebrow'>Programs in motion</p>
          <h2 className='section-title' style={{ marginTop: 16 }}>
            Ongoing and Planned Projects
          </h2>
          <p className='section-copy' style={{ marginTop: 18 }}>
            Practical outreach built for visible relief today and stronger
            lives tomorrow.
          </p>
        </div>

        <div className='card-grid'>
          {projects.map((project, index) => (
            <ImageSection
              key={index}
              title={project.title}
              image={project.image}
            >
              {project.description}
            </ImageSection>
          ))}
        </div>
      </div>
    </section>
  );
}
