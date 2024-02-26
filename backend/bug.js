const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const dbConnection = require('./database');
const { body, validationResult } = require('express-validator')
console.log("const packages is success")

const app = express();
app.use(express.urlencoded({ extended: false }))

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
console.log("set views is success")

app.use(express.static('public'))
app.use(cookieSession({
    name: 'session',
    keys: ['key1','key2'],
    maxAge: 3600* 1000 //1hr
}))

const ifNOtloggedIn = (req,res,next) => {
    if(!req.session.isLoggedIn){
        return res.render('login-register')
    }
    next();
}

const ifLoggedIn = (req,res,next) => {
    if(req.session.isLoggedIn){
        return res.redirect('/home')
    }
    next();
}

//root page
app.get('/', ifNOtloggedIn , (req,res,next) => {
    dbConnection.execute("SELECT name FROM users WHERE id = ?", [req.session.userID])
    .then(([row]) => {
        res.render('home',{
            name:row[0].name
        })
    })
})

//register Page
app.post('/register', ifLoggedIn, [
    body('email','Invalid Email Address!').isEmail().custom((value) => {
        return dbConnection.execute('SELECT email FROM users WHERE email = ?',[value])
        .then(([rows]) => {
            if (rows.length > 0) {
                return Promise.reject('email นี้ถูกใช้ไปแล้ว !')
            }
            return true;
        })
    }),
    body('username','โปรดกรอก Username !').trim().not().isEmpty(),
    body('password', ' รหัสผ่านสั้นเกินไปโปรดกรอกให้เกิน 6 ตัว').trim().isLength({ mim : +6}),

], //end of post data validation)
    (req, res, next) => {
        const validation_result = validationResult(req);
        const { username, password, email } = req.body;

        if (validation_result.isEmpty()) {
            bcrypt.hash(user_pass, 12).then((hash_pass) => {
                dbConnection.execute("INSERT INTO users (name, email ,password) VALUES(?,?,?)", [username,email,password])
                .then(result => {
                    res.send(`ท่านได้ทำการสมัครเสร็จสิ้น , คุณสามารถ <a href="/"> Login</a>`)
                }).catch (err=> {
                    if (err) throw err;
                })
            }).catch(err =>{
                if (err) throw err;
            })
        } else{
            res.render('login-register',{
                old_data: req.body
            })
        }
    }
)
app.listen(4000, () => console.log("server is runing"))