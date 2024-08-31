const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/connection')
const cors = require('cors')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

//for client route
const client=require("./routes/clientRouter")
app.use("/client",client)

dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`server running on ${port}`);
    })
}).catch((err)=>{
    console.error('Database connection failed:', err);
})