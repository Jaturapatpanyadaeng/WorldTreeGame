const User = require('../models/user_db')

module.exports = (req,res) => {
    User.create(req.body).then(()=> {
        console.log("User register successfully!")
    }).catch((error) =>{
        console.log(error.errors)
    })
}