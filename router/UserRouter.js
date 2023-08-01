const express=require('express')
const {createUser}=require('../controller/UserController')
const router=express.Router()
// router.get('/singup')
router.post('/signup',createUser)
// router.get('/login')
// router.post('/login')


module.exports=router