'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-transparent'>
      <nav className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto text-white'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <Image src='/hamrex-logo.png' alt='Logo' width={40} height={40} />
          <span className='font-semibold text-lg'>Harry Amadi Foundation</span>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 font-medium'>
          <li>
            <Link href='#about' className='hover:text-orange-300 transition'>
              About
            </Link>
          </li>
          <li>
            <Link href='#vision' className='hover:text-orange-300 transition'>
              Vision
            </Link>
          </li>
          <li>
            <Link
              href='#beneficiaries'
              className='hover:text-orange-300 transition'
            >
              Beneficiaries
            </Link>
          </li>
          <li>
            <Link href='#contact' className='hover:text-orange-300 transition'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className='md:hidden focus:outline-none'>
          {isOpen ? <X className='w-7 h-7' /> : <Menu className='w-7 h-7' />}
        </button>
      </nav>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='md:hidden bg-orange-700 bg-opacity-95 px-6 py-6 text-white font-medium space-y-4'
          >
            <Link
              href='#about'
              onClick={() => setIsOpen(false)}
              className='block'
            >
              About
            </Link>
            <Link
              href='#vision'
              onClick={() => setIsOpen(false)}
              className='block'
            >
              Vision
            </Link>
            <Link
              href='#beneficiaries'
              onClick={() => setIsOpen(false)}
              className='block'
            >
              Beneficiaries
            </Link>
            <Link
              href='#contact'
              onClick={() => setIsOpen(false)}
              className='block'
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
