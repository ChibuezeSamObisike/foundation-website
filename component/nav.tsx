/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useResponsive } from "@/hook/use-screen";

const navLinks = ["About", "Focus", "Projects"];

export const Navbar = ({ openAppModal }: { openAppModal: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const { isSmallScreen } = useResponsive();

  // Close dropdown when clicking outside
  useEffect(() => {
   const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target &&
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

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank");
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 sm:p-6 md:px-50 mb-20"
      style={{
        backgroundColor: "white",
        color: "rgb(191, 191, 198)",
      }}
    >
      <div
        style={{ padding: isSmallScreen ? "20px" : "20px 100px" }}
        className="mx-auto py-10 flex items-center justify-between"
      >
        <div className="text-xl font-bold">
          <img
            src="/hamrex-logo.png"
            alt="jasper"
            className="w-[100px] rounded-4xl"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
              className="group relative text-gray-500 transition"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-[rgb(191,191,198)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}

          {/* Sponsor Us Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              style={{
                backgroundColor: "#e26d39",
                color: "#fff",
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                cursor: "pointer",
                gap: "4px",
              }}
              onClick={toggleDropdown}
            >
              Sponsor us
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
        <button onClick={toggleMenu} className="md:hidden">
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
            className="md:hidden overflow-hidden shadow"
          >
            <div className="flex flex-col items-start gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[#676b70] font-medium hover:text-[rgb(191, 191, 198)] transition"
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
                  Sponsor Us
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
