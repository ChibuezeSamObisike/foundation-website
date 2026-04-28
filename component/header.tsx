"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const impactStats = [
  "Food relief",
  "Education support",
  "Youth mentorship",
  "Community care",
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

export const Header = ({
  openAppModal,
  openSpeakerModal,
}: {
  openAppModal: () => void;
  openSpeakerModal: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleEventSponsorship = () => {
    openAppModal();
    setIsDropdownOpen(false);
  };

  const handleSpeakerEngagement = () => {
    openSpeakerModal();
    setIsDropdownOpen(false);
  };

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank");
    setIsDropdownOpen(false);
  };
  return (
    <div
      className="hero-section"
    >
      {/* Overlay */}
      <div className="absolute left-[-8rem] top-28 h-80 w-80 rounded-full bg-[#f2b75d]/30 blur-3xl" />
      <div className="absolute bottom-[-6rem] right-[-5rem] h-96 w-96 rounded-full bg-[#2f6b3b]/18 blur-3xl" />

      {/* Content */}
      <div className="section-shell hero-shell">
        <div className="hero-copy">
          <p className="eyebrow reveal-up">Feeding hope. Funding dreams.</p>
          <h1 className="hero-title reveal-up delay-1">
            Harry Amadi <span>Foundation</span>
          </h1>
          <p className="hero-text reveal-up delay-2">
            To build a world where no dream dies in silence, no child goes to
            bed hungry, and no purpose is buried by poverty. A world where young
            people rise with clarity, courage, and capacity to transform their
            lives and the lives of others because someone believed in them.
          </p>
          <div className="hero-pill-row reveal-up delay-3">
            {impactStats.map((stat) => (
              <span key={stat} className="hero-pill">
                {stat}
              </span>
            ))}
          </div>
          <div
            className="hero-actions reveal-up delay-3"
            ref={dropdownRef}
          >
            <button
              type="button"
              className="primary-pill"
              onClick={toggleDropdown}
            >
              Apply for help
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    marginTop: "0.5rem",
                    right: 0,
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    minWidth: "200px",
                    zIndex: 1000,
                  }}
                >
                  <button
                    onClick={handleEventSponsorship}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.5rem 1rem",
                      color: "#374151",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.15s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9fafb")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    Event Sponsorship
                  </button>

                  <button
                    onClick={handleSpeakerEngagement}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.5rem 1rem",
                      color: "#374151",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.15s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9fafb")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    Speaker Engagement
                  </button>

                  <button
                    onClick={() =>
                      handleExternalLink("https://growmieuniversity.com/")
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.5rem 1rem",
                      color: "#374151",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.15s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9fafb")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    Business Grant
                  </button>

                  <button
                    onClick={() =>
                      handleExternalLink("https://growmieuniversity.com/")
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.5rem 1rem",
                      color: "#374151",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.15s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9fafb")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    Skill Learning
                  </button>

                  {/* <button
                    disabled
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.5rem 1rem",
                      color: "#9ca3af",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "not-allowed",
                    }}
                  >
                    Feeding Support
                  </button>

                  <button
                    disabled
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.5rem 1rem",
                      color: "#9ca3af",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "not-allowed",
                    }}
                  >
                    Accommodation Support
                  </button> */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
  logoSrc,
  gradient = "linear-gradient(to bottom right, rgba(153, 81, 0, 0.95), rgba(0, 51, 0, 0.92))",
  size = 500,
  style,
  ...rest
}) => {
  // Keep logoSrc out of DOM props when this legacy image component is used.
  void logoSrc;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: 8,
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
          zIndex: 1,
        }}
      />

      {/* Centered logo/content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      ></div>
    </div>
  );
};
