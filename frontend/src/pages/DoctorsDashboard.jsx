import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMicrophone, FaRegCommentDots, FaUserMd } from 'react-icons/fa';
import axios from 'axios';

const DoctorsDashboard = () => {
  const navigate = useNavigate();

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`;
  const shortName = user?.firstName || 'Doctor';

  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);

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
        setPatients(res.data.data.assignedPatients || []);
      } catch (err) {
        console.error('Dashboard fetch error:', err.response?.data || err.message);
      }
    };

    fetchDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-blue-50 p-6 flex flex-col items-center border-r-4 border-blue-500">
        <FaUserMd size={64} className="text-blue-600 mb-2" />
        <h3 className="text-lg font-semibold text-center">Dr. {fullName}</h3>
        <ul className="mt-6 text-gray-700 space-y-3 text-sm w-full text-center">
          <li><Link to="/my-profile" className="hover:underline">Profile</Link></li>
          <li><Link to="/my-appointments" className="hover:underline">Appointments</Link></li>
          <li><Link to="/settings" className="hover:underline">Settings</Link></li>
          <li>
            <button onClick={handleLogout} className="hover:underline text-red-500 w-full">
              Sign out
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-xl font-bold text-blue-700 mb-8">
          Welcome back, Dr. {shortName}!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
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
        </div>
      </main>
    </div>
  );
};

export default DoctorsDashboard;
