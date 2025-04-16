import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMicrophone, FaRegCommentDots, FaCalendarAlt, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; 

const PatientsDashboard = () => {
  const navigate = useNavigate();

  // Load user from localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userName = user?.firstName || 'Patient';
  const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`;

  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get(`${baseUrl}/dashboard`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setAppointments(res.data.data.appointments || []);
        setMessages(res.data.data.messages || []);
      } catch (err) {
        console.error('Error fetching dashboard:', err.response?.data || err.message);
      }
    };

    fetchDashboard();
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
           
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-blue-50 p-6 flex flex-col items-center border-r">
          <FaUserCircle size={64} className="text-blue-600 mb-2" />
          <h3 className="text-lg font-semibold text-center">{fullName}</h3>

          <ul className="mt-6 text-gray-700 space-y-3 text-sm w-full text-center">
            <li><Link to="/my-profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/my-appointments" className="hover:underline">Appointment details</Link></li>
            <li><Link to="/settings" className="hover:underline">Setting</Link></li>
            <li>
              <button
                onClick={handleSignOut}
                className="text-red-500 hover:underline w-full"
              >
                Sign out
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h2 className="text-xl font-bold text-blue-700 mb-8">
            Welcome back, {userName}! What would you like to do today?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              onClick={() => navigate('/live-translation')}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
            >
              <FaMicrophone size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">Live Translation</p>
            </div>

            <div
              onClick={() => navigate('/message-translation')}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
            >
              <FaRegCommentDots size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">Message Translation</p>
            </div>

            <div
              onClick={() => navigate('/appointments/book')}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition w-full"
            >
              <FaCalendarAlt size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">Book Appointment</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientsDashboard;
