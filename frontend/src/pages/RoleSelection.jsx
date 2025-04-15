import React from 'react';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    if (role === 'patient') {
      navigate('/register/patient');
    } else if (role === 'nhs') {
      navigate('/register/nhs');
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-white to-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-[350px] text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register as:</h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSelect('patient')}
            className="py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-200"
          >
            Patient
          </button>
          <button
            onClick={() => handleSelect('nhs')}
            className="py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-200"
          >
            NHS Staff
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
