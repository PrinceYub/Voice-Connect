import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaUsers, FaChartBar, FaClinicMedical } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userName = user?.firstName || 'Admin';
  const fullName = `${user?.firstName || 'Admin'} ${user?.lastName || ''}`;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-blue-50 p-6 flex flex-col items-center border-r-4 border-blue-500">
          <FaUserCircle size={64} className="text-blue-600 mb-2" />
          <h3 className="text-lg font-semibold text-center">{fullName}</h3>
          <ul className="mt-6 text-gray-700 space-y-3 text-sm w-full text-center">
            <li className="hover:underline cursor-pointer">Profile</li>
            <li className="hover:underline cursor-pointer">Setting</li>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              onClick={() => navigate('/admin/manage-users')}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
            >
              <FaUsers size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">Manage Users</p>
            </div>

            <div
              onClick={() => navigate('/admin/hospital-access')}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
            >
              <MdLocalHospital size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">Hospitalisation Access</p>
            </div>

            <div
              onClick={() => navigate('/admin/analytics')}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
            >
              <FaChartBar size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">System Analytics</p>
            </div>

            <div
              onClick={() => navigate('/admin/gp-management')}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
            >
              <FaClinicMedical size={32} className="text-blue-600 mb-2" />
              <p className="font-medium text-center">GP/Practice Management</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
