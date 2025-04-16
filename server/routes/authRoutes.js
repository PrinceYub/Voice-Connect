const express = require('express');
const router = express.Router();
const {
  registerNHSUser,
  registerPatient,
  loginUser,
} = require('../controllers/authController');


router.post('/register/nhs', registerNHSUser);
router.post('/register/patient', registerPatient);
router.post('/login', loginUser);

module.exports = router;