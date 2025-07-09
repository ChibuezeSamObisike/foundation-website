'use client';
import React from 'react';

import { StackedImages } from '@/component/stacked-images';
import { useResponsive } from '@/hook/use-screen';

const data = [
  {
    src: '/harry-child.jpeg',
    logoSrc: '/hamrex-logo.png',
    gradient:
      'linear-gradient(to top left, rgba(0, 0, 0, 0.6), rgba(255,255,255,0.3))',
  },
  {
    src: '/harry-child.jpeg',
    logoSrc: '/hamrex-logo.png',
    gradient:
      'linear-gradient(to top left, rgba(0, 0, 0, 0.6), rgba(255,255,255,0.3))',
  },

  {
    src: '/harry-child.jpeg',
    logoSrc: '/hamrex-logo.png',
    gradient:
      'linear-gradient(to top left, rgba(0, 0, 0, 0.6), rgba(255,255,255,0.3))',
  },
];

// export const Header: React.FC = () => {
//   return (
//     <div
//       style={{
//         height: '80vh',
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundImage:
//           'url("https://growmieuniversity.com/wp-content/uploads/2025/06/07.png")',
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '1159px',
//           margin: '10px auto',
//           gap: '20px',
//           // background: '#e36c3f',
//           justifyContent: 'space-between',
//           padding: '10px',
//         }}
//         className='flex items-center justify-between'
//       >
//         <div className='w-[50%]'>
//           <h1
//             className='text-6xl font-bold'
//             style={{ margin: '20px auto', color: '#e36c3f' }}
//           >
//             <span style={{ color: '#71B663' }}> Harry Amadi </span>Foundation
//           </h1>
//           <p>
//             To build a world where no dream dies in silence, no child goes to
//             bed hungry, and no purpose is buried by poverty. A world where young
//             people rise with clarity, courage, and capacity to transform their
//             lives and the lives of others because someone believed in them.
//           </p>
//         </div>

//         <StackedImages items={data} size={500} spreadAngle={15} />
//       </div>
//     </div>
//   );
// };

export const Header: React.FC = () => {
  const { isSmallScreen } = useResponsive();
  return (
    <div
      className='relative h-[100vh] flex items-center justify-center bg-center bg-cover'
      style={{
        backgroundImage: `url("https://growmieuniversity.com/wp-content/uploads/2025/06/07.png")`,
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-white/50' />

      {/* Content */}
      <div
        style={{ padding: '30px', gap: '40px' }}
        className='relative z-10 w-full max-w-[1159px] mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-6'
      >
        <div className='w-full md:w-1/2 text-white'>
          <h1 className='text-4xl text-[#e26d39] md:text-5xl text-center md:text-left lg:text-6xl font-bold mb-4'>
            <span className='text-[#71B663]'>Harry Amadi </span>Foundation
          </h1>
          <p
            style={{ marginTop: '10px' }}
            className='text-base md:text-lg leading-relaxed text-center md:text-left text-[#676b70]'
          >
            To build a world where no dream dies in silence, no child goes to
            bed hungry, and no purpose is buried by poverty. A world where young
            people rise with clarity, courage, and capacity to transform their
            lives and the lives of others because someone believed in them.
          </p>
        </div>

        <div className='w-[1/4] mx-auto md:w-1/2'>
          <StackedImages
            items={data}
            size={isSmallScreen ? 350 : 500}
            spreadAngle={15}
          />
        </div>
      </div>
    </div>
  );
};

export interface ImgItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** background image URL */
  src: string;
  /** logo in the center */
  logoSrc: string;
  /** overlay gradient */
  gradient?: string;
  /** width/height of the square */
  size?: number;
}

export const ImgItem: React.FC<ImgItemProps> = ({
  src,
  gradient = 'linear-gradient(to bottom right, rgba(153, 81, 0, 0.95), rgba(0, 51, 0, 0.92))',
  size = 500,
  style,
  ...rest
}) => (
  <div
    style={{
      position: 'relative',
      width: size,
      height: size,
      borderRadius: 8,
      overflow: 'hidden',
      ...style,
    }}
    {...rest}
  >
    {/* Background image */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }}
    />

    {/* Gradient overlay */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: gradient,
        zIndex: 1,
      }}
    />

    {/* Centered logo/content */}
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    ></div>
  </div>
);
