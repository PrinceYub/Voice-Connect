import React, { useState, useEffect }from 'react';
import { FaUserCircle } from 'react-icons/fa';


const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });
  
    useEffect(() => {
      const fetchProfile = async () => {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData(res.data.user); // fill with actual user data
      };
      fetchProfile();
    },
    
    []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white rounded-md shadow-md p-6 flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <FaUserCircle size={48} className="text-blue-600" />
          <h2 className="text-xl font-bold">
            {user.role === 'doctor' ? 'Dr. ' : ''}{user.firstName} {user.lastName}
          </h2>
        </div>
        <button className="text-blue-600 hover:underline">Edit</button>
      </div>

      {/* Personal Details */}
      <div className="bg-white rounded-md shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-blue-600">Personal details</h3>
          <button className="text-blue-600 hover:underline text-sm">Edit</button>
        </div>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>First name:</strong> {user.firstName}</p>
          <p><strong>Last name:</strong> {user.lastName}</p>
          <p><strong>Email address:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phoneNumber || 'Not provided'}</p>
        </div>
      </div>

      {/* Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-md shadow-md p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-blue-600 font-medium">Address</h3>
            <button className="text-blue-600 hover:underline text-sm">Edit</button>
          </div>
          <p className="text-sm text-gray-500">Not provided</p>
        </div>

        {/* Registered GP (Only for patients) */}
        {user.role === 'patient' && (
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-blue-600 font-medium">Registered GP</h3>
              <button className="text-blue-600 hover:underline text-sm">Edit</button>
            </div>
            <p className="text-sm text-gray-500">Not registered</p>
          </div>
        )}

        {/* NHS Staff Fields */}
        {['doctor', 'nurse', 'admin', 'receptionist'].includes(user.role) && (
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-blue-600 font-medium">NHS Details</h3>
              <button className="text-blue-600 hover:underline text-sm">Edit</button>
            </div>
            <p className="text-sm"><strong>Role:</strong> {user.role}</p>
            <p className="text-sm"><strong>Employee ID:</strong> {user.employeeId || 'Not provided'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
