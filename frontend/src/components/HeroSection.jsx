import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 flex flex-col md:flex-row w-full h-auto md:h-[500px]">
      
   
      <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-12 py-10 md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
          Breaking Barriers. <br />Building Understanding.
        </h1>
        <p className="text-gray-700 text-center md:text-left mb-6 max-w-md leading-relaxed">
          Breaking language barriers between patients and healthcare providers through real-time AI-powered translation—because everyone deserves to be understood.
        </p>
        <button
          onClick={() => navigate('/register')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>


      <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-12 py-10 md:w-1/2 overflow-hidden">
        <img
          src={assets.logo_img}
          alt="Doctor on video call"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
