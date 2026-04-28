import {
  Users,
  Heart,
  Home,
  Compass,
  Briefcase,
  Hospital,
  Globe,
} from 'lucide-react';

const beneficiaries = [
  {
    icon: <Users className='w-8 h-8 text-orange-500' />,
    title: 'Children in Underserved Communities',
    description:
      'Empowering the next generation with education, nourishment, and safe environments.',
  },
  {
    icon: <Heart className='w-8 h-8 text-orange-500' />,
    title: 'Widows and Single Mothers',
    description:
      'Providing support systems, skills training, and resources for independent living.',
  },
  {
    icon: <Home className='w-8 h-8 text-orange-500' />,
    title: 'Struggling Families',
    description:
      'Helping families get back on their feet with financial, emotional, and housing support.',
  },
  {
    icon: <Compass className='w-8 h-8 text-orange-500' />,
    title: 'Youth Without Direction or Support',
    description:
      'Offering mentorship, opportunities, and pathways for personal and professional growth.',
  },
  {
    icon: <Briefcase className='w-8 h-8 text-orange-500' />,
    title: 'Aspiring Entrepreneurs & Small Business Owners',
    description:
      'Fueling dreams through training, funding, and real-world mentorship.',
  },
  {
    icon: <Hospital className='w-8 h-8 text-orange-500' />,
    title: 'Sick and Vulnerable Individuals',
    description:
      'Providing medical aid, care, and community for those in fragile conditions.',
  },
  {
    icon: <Globe className='w-8 h-8 text-orange-500' />,
    title: 'Communities in Need',
    description:
      'Strengthening entire communities through sustainable, impact-driven solutions.',
  },
];

export default function BeneficiariesSection() {
  return (
    <section className='landing-band'>
      <div className='section-shell'>
        <div style={{ maxWidth: 760, margin: '0 auto 48px', textAlign: 'center' }}>
          <p className='eyebrow'>People first</p>
          <h2 className='section-title' style={{ marginTop: 16 }}>
            Who We Serve
          </h2>
          <p className='section-copy' style={{ marginTop: 18 }}>
            Every program starts with people whose needs are real, urgent, and
            worthy of thoughtful support.
          </p>
        </div>
        <div className='card-grid'>
          {beneficiaries.map((item, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.06}s` }}
              className='serve-card soft-card reveal-up'
            >
              <div className='serve-icon'>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
