const express = require('express')
const clientRouter = express.Router()

const authController = require('../controllers/authController')

clientRouter.post('/signup',authController.clientSignup)
clientRouter.post('/signupOtpVerification',authController.signupOtpVerification)
clientRouter.post('/signupResendOtp',authController.signupResendOtp)

module.exports = clientRouter