const express=require('express')
require('./Db/index')
require('dotenv').config()

const ProductRouter=require('../router/ProductRouter')
const errorMiddleware=require('../middleware/error')
const cors = require('cors')
const app=express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(errorMiddleware)



// using cors for api coonection to the frontend
app.use(cors())

//middleware for error handeling

//router
app.use('/api/v1',ProductRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server is started at port ${process.env.PORT}`)
})