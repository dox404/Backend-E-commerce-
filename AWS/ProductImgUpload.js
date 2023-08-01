// const express=require('express')
const multer=require('multer')
// const app=express()
// require("dotenv").config
const AWS=require('aws-sdk')
const multerS3=require('multer-s3')
const s3=new AWS.S3({
    accessKeyId: 'AKIA6LFXNV5FK4OFAKHT',
    secretAccessKey: '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',Bucket:'e-commerce-mani-mern/Product'
})

const upload=multer({
    storage:multerS3({
        s3:s3,
        bucket:'e-commerce-mani-mern/Product',
        // acl: 'public-read',
        metadata:function(req,file,cb){
            console.log(file)
            cb(null,{fileName:file.originalname})
        },
        key:function(req,file,cb){
            cb(null,file.originalname)
        }
    })

})



module.exports=upload
