const Appointment = require('../models/appointment');
const User = require('../models/user');

const getDashboard = async (req, res) => {
  const { role, id } = req.user;

  try {
    let data;

    switch (role) {
      case 'patient':
        data = {
          appointments: await Appointment.find({ patientId: id }),
          messages: [], // placeholder for message data
        };
        break;

      case 'doctor':
        data = {
          assignedPatients: await User.find({ assignedDoctor: id }),
          appointments: await Appointment.find({ doctorId: id }),
        };
        break;

      case 'admin':
        data = {
          totalUsers: await User.countDocuments(),
          totalDoctors: await User.countDocuments({ role: 'doctor' }),
          recentUsers: await User.find().sort({ createdAt: -1 }).limit(5),
        };
        break;

      case 'nurse':
      case 'receptionist':
        data = {
          appointments: await Appointment.find(),
        };
        break;

      default:
        return res.status(403).json({ message: 'Unauthorized dashboard access' });
    }

    res.status(200).json({ message: 'Dashboard data fetched successfully', data });
  } catch (err) {
    res.status(500).json({ message: 'Dashboard fetch failed', error: err.message });
  }
};

module.exports = { getDashboard };