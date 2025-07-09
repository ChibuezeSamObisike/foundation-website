/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useResponsive } from '@/hook/use-screen';

const navLinks = ['About', 'Focus', 'Projects'];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { isSmallScreen } = useResponsive();

  return (
    <nav
      className='fixed top-0 left-0 w-full z-50 sm:p-6 md:px-50 mb-20'
      style={{
        backgroundColor: 'white',
        color: 'rgb(191, 191, 198)',
      }}
    >
      <div
        style={{ padding: isSmallScreen ? '20px' : '20px 100px' }}
        className='mx-auto py-10 flex items-center justify-between'
      >
        <div className='text-xl font-bold'>
          <img
            src='/hamrex-logo.png'
            alt='jasper'
            className='w-[100px] rounded-4xl'
          />
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-8 font-medium'>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
              className='group relative text-[rgb(191,191,198)] transition'
            >
              {link}
              <span className='absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-[rgb(191,191,198)] transition-transform duration-300 group-hover:scale-x-100' />
            </a>
          ))}
          <button
            style={{
              backgroundColor: '#e26d39',
              color: '#fff',
            }}
          >
            sponsor us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className='md:hidden'>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='md:hidden overflow-hidden shadow'
          >
            <div className='flex flex-col items-start gap-4 px-6 py-4'>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className='text-[rgb(191, 191, 198)] font-medium hover:text-[rgb(191, 191, 198)] transition'
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
