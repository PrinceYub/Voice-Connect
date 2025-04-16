import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cta() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-100 text-center py-12">
      <h2 className="text-xl font-bold mb-4">
        LANGUAGE SHOULD NEVER BE A BARRIER TO HEALTHCARE
      </h2>
      <p className="mb-4">
        Get a real-time AI-Powered translation for video, voice, and chat with your doctors, effortlessly and instantly.
      </p>
      <button
        onClick={() => navigate('/register')}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default Cta;
