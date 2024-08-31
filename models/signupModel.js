const mongoose = require('mongoose')

const signupSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'pending'
    },
    role:{
        type:String,
        default:'client'
    },
    otp:{
        type:String
    },
    profile:{
        type:String
    },
    about:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const signupModel = mongoose.model('signupDatas',signupSchema)

module.exports = signupModel