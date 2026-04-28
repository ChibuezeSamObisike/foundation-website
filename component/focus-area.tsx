/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  FaUtensils,
  FaHome,
  FaHandsHelping,
  FaStethoscope,
  FaLightbulb,
  FaTools,
  FaSeedling,
  FaCity,
} from 'react-icons/fa';

const focusAreas = [
  {
    label: 'Feeding Hungry Children',
    icon: <FaUtensils size={24} />,
    description:
      'Providing daily meals and nutritional support for kids in underserved communities.',
  },
  {
    label: 'Housing Homeless Kids',
    icon: <FaHome size={24} />,
    description:
      'Giving shelter and structure to vulnerable children in need of safety and stability.',
  },
  {
    label: 'Widows and Family Support',
    icon: <FaHandsHelping size={24} />,
    description:
      'Helping widows and struggling families with aid, food, and emotional care.',
  },
  {
    label: 'Medical Assistance',
    icon: <FaStethoscope size={24} />,
    description:
      'Covering surgeries, medications, and treatments for the sick and vulnerable.',
  },
  {
    label: 'Youth Purpose Discovery & Mentorship',
    icon: <FaLightbulb size={24} />,
    description:
      'Guiding young people to discover purpose, clarity, and direction for life.',
  },
  {
    label: 'Skills Empowerment & Education',
    icon: <FaTools size={24} />,
    description:
      'Equipping youth with practical skills and education to break out of poverty.',
  },
  {
    label: 'Business Support & Grants',
    icon: <FaSeedling size={24} />,
    description:
      'Providing funding and mentorship to entrepreneurs and small business owners.',
  },
  {
    label: 'Community Upliftment Projects',
    icon: <FaCity size={24} />,
    description:
      'Improving infrastructure and access to clean water, light, and education in rural areas.',
  },
];

const ListSection = ({ title, items, id }: any) => (
  <section id={id} style={{ padding: '4rem 1.5rem' }}>
    <div className='max-w-6xl mx-auto px-4' style={{ margin: '0 auto' }}>
      {title && (
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#333',
            textAlign: 'center',
          }}
        >
          {title}
        </h2>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {items.map(({ label, icon, description }: any, idx: number) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              color: '#444',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#e16d40',
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              {icon}
              <span>{label}</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FocusArea = () => {
  return <ListSection title='Core focus areas' items={focusAreas} id='focus' />;
};
