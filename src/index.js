const express=require('express')
require('./Db/index')
require('dotenv').config()

const ProductRouter=require('../router/ProductRouter')
const app=express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())


//router
app.use('/api/v1',ProductRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server is started at port ${process.env.PORT}`)
})