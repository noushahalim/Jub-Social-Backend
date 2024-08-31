const signupModel = require("../models/signupModel")
const signupValidation = require("../utilities/signupValidation")
const nodemailer = require('../utilities/otpController')
const otpGenerator = require('otp-generator')
const bcrypt = require("bcrypt")
const emailContent = require("../utilities/emailContent");

const generateOtp = ()=>{
    return otpGenerator.generate(4, { 
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false, 
        specialChars: false 
    });
}

exports.clientSignup = async (req,res)=>{
    try{
        const {fullName,email,password}=req.body
        const existClient = await signupModel.findOne({email})

        if(existClient){
            if(existClient.status=='pending'){

                const emailOtp = generateOtp()
                const sentMail = await emailContent.generateEmailContent(emailOtp);
            
                const mailOptions = {
                    from:process.env.NODE_MAILER_GMAIL,
                    to:email,
                    subject:'Welcome to Jub Social! Verify Your Account',
                    html: sentMail
                }
    
                nodemailer.sentMailOtp(mailOptions)

                // Generate a random salt
                const saltRounds = 10;
                const salt = await bcrypt.genSalt(saltRounds)
        
                // Hash the password with the generated salt
                const hasedPassword = await bcrypt.hash(password, salt)

                await signupModel.findOneAndUpdate(
                    {_id:existClient._id},
                    {
                        fullName:fullName,
                        password:hasedPassword,
                        otp:emailOtp
                    }
                )

                res.status(200).json({clientId:existClient._id,email:existClient.email})

            }
            else{
                return res.status(400).json('email already exist')
            }
        }
        else if(!signupValidation.validationFields([fullName,email,password])){
            return res.status(400).json('All fields are required')
        }
        else if(!signupValidation.emailValidation(email)){
            return res.status(400).json('Invalid email format')
        }
        else if(!signupValidation.pwdValidation(password)){
            return res.status(400).json('Invalid password format')
        }
        else{

            const emailOtp = generateOtp()
            const sentMail = await emailContent.generateEmailContent(emailOtp);
            
            const mailOptions = {
                from:process.env.NODE_MAILER_GMAIL,
                to:email,
                subject:'Welcome to Jub Social! Verify Your Account',
                html: sentMail
            }

            nodemailer.sentMailOtp(mailOptions)

            // Generate a random salt
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds)
    
            // Hash the password with the generated salt
            const hasedPassword = await bcrypt.hash(password, salt)
            
            const newClient = new signupModel({
                fullName,
                email,
                password:hasedPassword,
                otp:emailOtp
            })
            const client = await newClient.save()

            res.status(200).json({clientId:client._id,email:client.email})

        }
    }
    catch(err){
        console.log('error on clientSignup',err)
        res.status(500).json('Internal server error');
    }
}
