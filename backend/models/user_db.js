const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrybt = require('bcrypt')

const UserSchenma=new Schema({
    email:{
        type:String,
        require:[true,'ท่านไม่ได้กรอก email']
    },
    username:{
        type:String,
        required:[true,'ท่านไม่ได้กรอก username']
    },
    password:{
        type:String,
        required:[true,'ท่านไม่ได้กรอก password']
    },
    firstname:{
        type:String,
        required:[true,'ท่านไม่ได้กรอก firstname']
    },
    lastname:{
        type:String,
        required:[true,'ท่านไม่ได้กรอก lastname']
    }
})

UserSchenma.pre('save',function(next){
    const user = this

    bcrybt.hash(user.password,10).then(hash =>{
        user.password = hash
        next()
    }).console.error(error)
})

const User = mongoose.model('User',UserSchenma)
module.exports = User