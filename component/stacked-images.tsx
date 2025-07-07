import React from 'react';
import { ImgItem } from './header';

export interface StackedImagesProps {
  items: {
    /** background image */
    src: string;
    /** logo in center */
    logoSrc: string;
    /** optional gradient override */
    gradient?: string;
  }[];
  /** size of each square */
  size?: number;
  /** how “fanned out” the stack is, in degrees */
  spreadAngle?: number;
}

export const StackedImages: React.FC<StackedImagesProps> = ({
  items,
  size = 500,
  spreadAngle = 20,
}) => {
  // middle index → zero degrees
  const mid = (items.length - 1) / 2;

  return (
    <div
      style={{ position: 'relative', width: `${size}px`, height: `${size}px` }}
    >
      {items.map((item, idx) => {
        // map index to angle between -spread/2 and +spread/2
        const angle =
          items.length === 1
            ? 0
            : ((idx - mid) / (items.length - 1)) * spreadAngle;

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: `rotate(${angle}deg)`,
              transformOrigin: 'center center',
              zIndex: idx + 1,
            }}
          >
            <ImgItem
              src={item.src}
              logoSrc={item.logoSrc}
              gradient={item.gradient}
              size={size}
            />
          </div>
        );
      })}
    </div>
  );
};
