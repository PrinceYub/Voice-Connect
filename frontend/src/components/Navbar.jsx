import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // optional icon library like lucide-react or use emoji/icons

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);


const location = useLocation(); // ✅ define location
  const isDashboard = [
    '/patientsdashboard',
    '/doctorsdashboard',
    '/receptionistdashboard',
    '/admindashboard',
    '/my-profile' // ✅ Include if you want to hide Sign In/Register on profile too
  ].some(path => location.pathname.startsWith(path));
  return (
    <nav className="bg-blue-900 text-white px-4 py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <img
          src={assets.voice_logo_img}
          alt="Voice Connect Logo"
          className="w-36 cursor-pointer"
        />

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav links - desktop */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          <NavLink to="/" className="hover:text-blue-300">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-300">
            About us
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-300">
            Contact us
          </NavLink>
          {!isDashboard && (
          <NavLink to="/login" className="hover:text-blue-300">
            Sign In 
          </NavLink>
          )}
        </ul>

        {/* Register Button - desktop only */}
        {!isDashboard && (
         <button
          onClick={() => navigate('/register')}
          className="hidden md:block bg-customBlue text-white px-6 py-2 rounded-full"
        >
          Register
        </button>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-6 space-y-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block">
            About us
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block">
            Contact us
          </NavLink>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
