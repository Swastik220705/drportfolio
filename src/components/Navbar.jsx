import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/frontend/assets';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToServices = () => {
    // If the current path is not '/', navigate to the home page
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay to ensure the DOM is loaded
    } else {
      // If already on '/', just scroll
      const servicesSection = document.getElementById('services');
      servicesSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu on mobile
  };

  return (
    <nav className='top-0 sticky z-[100] flex items-center justify-between px-5 text-lg bg-[#021b67] text-white'>
      <NavLink to={'/'}>
        <div className='cursor-pointer flex items-center space-x-[-25px]'>
        <img src={assets.logo} className='w-20' alt="" />
          <div >
            <p className='text-md tracking-wide'>Dr. Sadhna Sharma</p>
            <p className='text-sm font-light'>Homeopathy Consultant</p>
          </div></div>

      </NavLink>

      {/* Hamburger Menu for Small Screens */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='focus:outline-none'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex-row md:flex md:space-x-16 space-y-5 md:space-y-0 absolute md:static bg-[#021b67] md:bg-transparent z-10 md:z-auto left-0 right-0 top-[60px] md:top-auto px-5 md:px-0 py-5 md:py-0 ${isMenuOpen ? 'flex' : 'hidden'
          }`}
      >
        <ul className='flex flex-col md:flex-row md:space-x-16'>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? 'text-gray-200 underline underline-offset-4' : ''
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive ? 'text-gray-200 underline underline-offset-4' : ''
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to={'/research'}
              className={({ isActive }) =>
                isActive ? 'text-gray-200 underline underline-offset-4' : ''
              }
            >
              Research
            </NavLink>
          </li>
          <li>
          <NavLink
              to={'/services'}
              className={({ isActive }) =>
                isActive ? 'text-gray-200 underline underline-offset-4' : ''
              }
            >
              Services
            </NavLink>
            
          </li>
         
        </ul>
        {/* Contact Button for Mobile Menu */}
        <div className='mt-5 md:hidden'>
          <NavLink to={'/contact'} className='w-full rounded-full border-2 border-white px-3 py-2'>
            Contact Now
          </NavLink>
        </div>
      </div>

      {/* Contact Button for Desktop */}
      <div className='hidden md:block'>
        <NavLink to={'/contact'} className='rounded-full border-2 border-white px-3 py-1'>
          Contact Now
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
