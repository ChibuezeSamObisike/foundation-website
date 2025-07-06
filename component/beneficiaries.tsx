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
    <section
      style={{ margin: '20px auto', width: '100%' }}
      className='py-12 bg-white flex items-center justify-center mx-auto'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-20'>Who We Serve</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {beneficiaries.map((item, index) => (
            <div
              key={index}
              style={{ padding: '10px' }}
              className='bg-white rounded-2xl shadow-md p-10 text-center transition hover:shadow-lg'
            >
              <div className='flex justify-center mb-4'>{item.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-600 text-sm'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
