'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

// 👇 Your ImageSection component (refactored with Tailwind for style clarity)
const ImageSection = ({
  title,
  children,
  image,
}: {
  title: string;
  children: ReactNode;
  image: string;
}) => (
  <div className='bg-white rounded-xl shadow-sm overflow-hidden flex flex-col'>
    {image && (
      <div className='relative w-full h-56'>
        <Image src={image} alt={title} fill className='object-cover' priority />
      </div>
    )}
    <div className='p-10' style={{ padding: '10px' }}>
      <h3 className='text-xl font-semibold text-gray-800 mb-3'>{title}</h3>
      <p className='text-gray-600 text-base leading-relaxed'>{children}</p>
    </div>
  </div>
);

// 👇 Project data with image + description
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
    title: 'Community Light-Up Project',
    image: 'https://images.pexels.com/photos/935951/pexels-photo-935951.jpeg',
    description: 'Powering rural communities with light and hope.',
  },
  {
    title: 'Back-to-School Kit Drive',
    image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg',
    description: 'Giving children tools for academic success.',
  },
];

export default function ProjectGrid() {
  return (
    <section
      style={{ margin: 'auto', marginBottom: '50px', padding: '4rem 1.5rem' }}
      className='py-16 px-4 '
    >
      <div className='max-w-6xl mx-auto' style={{ margin: 'auto' }}>
        <h2
          style={{ marginBottom: '50px' }}
          className='text-3xl font-bold text-center mb-10'
        >
          Ongoing and Planned Projects
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
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
