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

type FocusAreaItem = {
  label: string;
  icon: React.ReactNode;
  description: string;
};

const ListSection = ({
  title,
  items,
  id,
}: {
  title: string;
  items: FocusAreaItem[];
  id: string;
}) => (
  <section id={id} className='landing-band'>
    <div className='section-shell'>
      {title && (
        <div style={{ maxWidth: 760, margin: '0 auto 48px', textAlign: 'center' }}>
          <p className='eyebrow'>Where support goes</p>
          <h2 className='section-title' style={{ marginTop: 16 }}>
            {title}
          </h2>
          <p className='section-copy' style={{ marginTop: 18 }}>
            Focused programs for the needs that shape a person&apos;s tomorrow:
            food, shelter, health, mentorship, skills, and sustainable support.
          </p>
        </div>
      )}

      <div className='card-grid'>
        {items.map(({ label, icon, description }, idx) => (
          <div
            key={idx}
            className='support-card soft-card reveal-up'
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <div className='support-icon'>
              {icon}
            </div>
            <h3>{label}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FocusArea = () => {
  return <ListSection title='Core Focus Areas' items={focusAreas} id='focus' />;
};
