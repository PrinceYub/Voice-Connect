const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['patient', 'doctor', 'nurse', 'admin'],
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Password must be at least 8 characters
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  // For patients only
  nhsNumber: {
    type: String,
    required: function () {
      return this.role === 'patient';
    },
  },

  // For NHS staff only (doctor, nurse, admin)
  employeeId: {
    type: String,
    required: function () {
      return ['doctor', 'nurse', 'admin'].includes(this.role);
    },
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);