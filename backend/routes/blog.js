const express = require("express")
const router = express.Router()
const { create,getAllblogs,singleBlog, remove ,update} = require('../controller/blogController')
const {requireLogin} = require("../controller/authController")

//การเรียกใช้งาน
router.get('/blogs',getAllblogs)
router.get('/blog/:slug',singleBlog)

router.post('/create',requireLogin,create)
router.delete('/blog/:slug',requireLogin,remove)
router.put('/blog/:slug',requireLogin,update)

module.exports=router