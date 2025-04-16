import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../assets/assets';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      console.log('Login success:', res.data);
    
      // Safe message fallback
      alert(res.data?.message || 'Login successful');
    
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);
      localStorage.setItem('user', JSON.stringify(res.data.user));
    
      switch (res.data.user.role) {
        case 'patient':
          navigate('/patientsdashboard');
          break;
        case 'doctor':
          navigate('/doctorsdashboard');
          break;
            case 'receptionist':
              navigate('/receptionistdashboard');
              break;
            case 'admin':
              navigate('/admindashboard');
              break;
        default:
          navigate('/');
      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      {/* Left Side */}
      <div className="h-full bg-blue-50 flex flex-col items-center justify-start pt-24 px-8">
    <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">
      You are almost <br /> there!
    </h2>
    <div className="w-72 max-w-full rounded-xl overflow-hidden shadow-md">
      <img
        src={assets.log_img}
        alt="Doctor comforting patient"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

      {/* Login Form */}
      <div className="h-full bg-white p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
            onChange={handleChange}
          />

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <span className="text-blue-600 hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          No account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
