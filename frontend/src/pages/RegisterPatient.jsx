import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterPatient() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    nhsNumber: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: form validation + API call here
    console.log('Submitting:', form);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Register and talk in <br /> your language!
          </h2>
        </div>

        <div className="bg-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-1/2 p-2 border-b border-gray-400 focus:outline-none"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-1/2 p-2 border-b border-gray-400 focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 border-b border-gray-400 focus:outline-none"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border-b border-gray-400 focus:outline-none"
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 border-b border-gray-400 focus:outline-none"
              onChange={handleChange}
            />

            <input
              type="text"
              name="nhsNumber"
              placeholder="NHS Number"
              className="w-full p-2 border-b border-gray-400 focus:outline-none"
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full p-2 border-b border-gray-400 focus:outline-none"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPatient;
