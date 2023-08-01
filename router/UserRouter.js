const express=require('express')
const {createUser,LoginUser}=require('../controller/UserController')

const router=express.Router()
const upload=require('../AWS/ProfileUpload')
// router.get('/singup')
router.post('/signup',upload.single("image"),createUser)


// router.get('/login')
router.post('/login',LoginUser)


module.exports=router