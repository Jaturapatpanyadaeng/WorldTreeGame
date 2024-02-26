const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const mongoose = require('mongoose')
const Quote = require('inspirational-quotes')
require("dotenv").config()
const blogRoute = require('./routes/blog')
const authRoute = require('./routes/auth')

const app = express()

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
})
.then(()=>console.log("เชื่อมต่อเสร็จสิ้น"))
.catch((err)=>console.log(err))
const port = process.env.PORT || 3001



//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(express.static('public'))

//route
app.use('/api',blogRoute)
app.use('/api',authRoute)


app.listen(port, () => console.log(`server is runing port ${port}`))