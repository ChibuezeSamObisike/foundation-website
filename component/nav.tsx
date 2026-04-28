/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = ["About", "Focus", "Projects"];

export const Navbar = ({
  openAppModal,
  openSpeakerModal,
}: {
  openAppModal: () => void;
  openSpeakerModal: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
    <nav className="site-nav">
      <div className="site-nav__inner">
        <a href="#" className="flex items-center gap-3 text-xl font-bold">
          <img
            src="/hamrex-logo.png"
            alt="Hamrex Foundation logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="hidden text-sm font-bold text-[#14371d] sm:block">
            Harry Amadi Foundation
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
              className="group relative text-sm text-[#667164] transition hover:text-[#14371d]"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-[#df6f3a] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}

          {/* Sponsor Us Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              style={{
                background: "linear-gradient(135deg, #df6f3a, #be5526)",
                color: "#fff",
                padding: "10px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                cursor: "pointer",
                gap: "4px",
                boxShadow: "0 12px 25px rgba(223, 111, 58, 0.25)",
              }}
              onClick={toggleDropdown}
            >
              Apply for help
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
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
                    zIndex: 50,
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="rounded-full border border-[#2f6b3b24] p-2 text-[#14371d] md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-4 overflow-hidden rounded-3xl border border-[#2f6b3b24] bg-[#fffdf8] shadow md:hidden"
          >
            <div className="flex flex-col items-start gap-4 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-[#667164] transition hover:text-[#14371d]"
                  style={{ padding: "2px 10px" }}
                >
                  {link}
                </a>
              ))}

              {/* Mobile Sponsor Dropdown */}
              <div className="w-full">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full text-[#676b70] font-medium hover:text-[rgb(191, 191, 198)] transition"
                  style={{ padding: "2px 10px" }}
                >
                  Apply for help
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      <button
                        onClick={() => {
                          handleEventSponsorship();
                          setIsOpen(false);
                        }}
                        className="block w-full text-left text-sm text-gray-600 hover:text-[rgb(191, 191, 198)] transition"
                        style={{ padding: "4px 10px" }}
                      >
                        Event Sponsorship
                      </button>

                      <button
                        onClick={() => {
                          handleSpeakerEngagement();
                          setIsOpen(false);
                        }}
                        className="block w-full text-left text-sm text-gray-600 hover:text-[rgb(191, 191, 198)] transition"
                        style={{ padding: "4px 10px" }}
                      >
                        Speaker Engagement
                      </button>

                      <button
                        onClick={() => {
                          handleExternalLink("https://growmieuniversity.com/");
                          setIsOpen(false);
                        }}
                        className="block w-full text-left text-sm text-gray-600 hover:text-[rgb(191, 191, 198)] transition"
                        style={{ padding: "4px 10px" }}
                      >
                        Business Grant
                      </button>

                      <button
                        onClick={() => {
                          handleExternalLink("https://growmieuniversity.com/");
                          setIsOpen(false);
                        }}
                        className="block w-full text-left text-sm text-gray-600 hover:text-[rgb(191, 191, 198)] transition"
                        style={{ padding: "4px 10px" }}
                      >
                        Skill Learning
                      </button>

                      <button
                        className="block w-full text-left text-sm text-gray-400 cursor-not-allowed"
                        style={{ padding: "4px 10px" }}
                        disabled
                      >
                        Feeding Support
                      </button>

                      <button
                        className="block w-full text-left text-sm text-gray-400 cursor-not-allowed"
                        style={{ padding: "4px 10px" }}
                        disabled
                      >
                        Accommodation Support
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
