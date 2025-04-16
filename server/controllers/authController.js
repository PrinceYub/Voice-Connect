const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ==================== NHS STAFF REGISTRATION ====================
const registerNHSUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    employeeId,
    phoneNumber,
    role,
  } = req.body;

  try {
    const allowedRoles = ['doctor', 'nurse', 'admin', 'receptionist'];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: 'Invalid role selected' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      employeeId,
      role,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({ message: 'NHS staff registered successfully', token, user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

// ==================== PATIENT REGISTRATION ====================
const registerPatient = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    nhsNumber,
    phoneNumber,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      nhsNumber,
      role: 'patient',
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({ message: 'Patient registered successfully', token, user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

// ==================== LOGIN ====================
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

// EXPORT ALL
module.exports = {
  registerNHSUser,
  registerPatient,
  loginUser,
};