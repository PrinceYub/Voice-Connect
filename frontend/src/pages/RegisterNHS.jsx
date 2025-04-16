import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // ✅ added axios import

function RegisterNHS() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    employeeId: '',
    phoneNumber: '',
    role: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register/nhs', form);
      console.log('Success:', response.data);
      alert(res.data.message);
      navigate('/login'); 
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      <div className="h-full bg-blue-50 flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          Register and talk in <br /> your language!
        </h2>
      </div>

      <div className="h-full bg-white p-10 flex flex-col justify-center">
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
            name="employeeId"
            placeholder="Work ID / Employee Number"
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

          <select
            name="role"
            className="w-full p-2 border-b border-gray-400 focus:outline-none bg-white text-gray-700"
            onChange={handleChange}
            defaultValue=""
            required
          >
            <option value="" disabled>Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="admin">Admin</option>
          </select>

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
  );
}

export default RegisterNHS;
