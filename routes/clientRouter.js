const express = require('express')
const clientRouter = express.Router()

const authController = require('../controllers/authController')

clientRouter.post('/signup',authController.clientSignup)
clientRouter.post('/signupOtpVerification',authController.signupOtpVerification)
clientRouter.post('/signupResendOtp',authController.signupResendOtp)
clientRouter.post('/forgotPassword',authController.forgotPassword)
clientRouter.post('/forgotOtpVerification',authController.forgotOtpVerification)
clientRouter.post('/forgotResendOtp',authController.forgotResendOtp)
clientRouter.post('/changePassword',authController.changePassword)
clientRouter.post('/login',authController.login)

module.exports = clientRouter