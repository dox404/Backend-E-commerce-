const express=require('express')
const {createUser}=require('../controller/UserController')
const router=express.Router()
const upload=require('../AWS/ProfileUpload')
// router.get('/singup')
router.post('/signup',upload.single("image"),createUser)


// router.get('/login')
// router.post('/login')


module.exports=router