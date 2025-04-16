import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

const ReceptionistDashboard = () => {
  const navigate = useNavigate();

  // Load user info
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userName = user?.firstName || 'Receptionist';
  const fullName = `${user?.firstName || 'Priya'} ${user?.lastName || 'Shah'}`;

  // Optional: Fetch extra dashboard data from backend
  const [appointments, setAppointments] = useState([]);

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
      } catch (err) {
        console.error('Dashboard error:', err.response?.data || err.message);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-blue-50 p-6 flex flex-col items-center border-r">
          <FaUserCircle size={64} className="text-blue-600 mb-2" />
          <h3 className="text-lg font-semibold text-center">{fullName}</h3>
          <ul className="mt-6 text-gray-700 space-y-3 text-sm w-full text-center">
            <li className="hover:underline cursor-pointer">Profile</li>
            <li className="hover:underline cursor-pointer">Appointments</li>
            <li className="hover:underline cursor-pointer">Settings</li>
            <li
              className="hover:underline cursor-pointer text-red-500"
              onClick={() => {
                localStorage.clear();
                navigate('/login');
              }}
            >
              Sign out
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h2 className="text-xl font-bold text-blue-700 mb-8">
            Welcome back, {userName}!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
              onClick={() => navigate('/translation-requests')}
            >
              <MdTranslate size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">Translation Requests</p>
            </div>

            <div
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
              onClick={() => navigate('/patients')}
            >
              <FaUserFriends size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">Patient List</p>
            </div>

            <div
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
              onClick={() => navigate('/appointments/schedule')}
            >
              <FaCalendarAlt size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">Schedule Appointment</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
