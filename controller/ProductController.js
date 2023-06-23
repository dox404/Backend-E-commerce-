const Product = require('../models/ProductSchema')
const ErrorHandler=require('../utils/errorHandler')

async function GetAllProduct(req, res) {
    const Products=await Product.find()
    res.status(200).json({success:true,Products})
}
async function GetProductDetails(req, res) {
    const Products=await Product.findById(req.params.id)
    if(!Product){
        return next(new ErrorHandler("Product Not Found",404) )
    }
    res.status(200).json({success:true,Products})
}
async function CreateProduct(req,res){
    // console.log(req.body.img)
//    const product= await Product.create(req.body)
   console.log(req.body)
//    product.save()
//    res.status(200).json({Success:true,product})
res.send("success")
}

async function UpdateProducts(req,res){
   let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidetors:true,useFindAndModify:false})
    res.status(200).json({success:true,product})
 }


 async function DeleteProducts(req,res){
    const product = await Product.findById(req.params.id)
     if(!product){
         return res.status(500).json({
             success:false,
             message:"Product not found"
         })
     }
 
     await product.deleteOne();

     res.status(200).json({success:true,message:"Product deleted Successfully"})
  }


module.exports = {
    GetAllProduct,
    CreateProduct,
    UpdateProducts,
    DeleteProducts,
    GetProductDetails
    
}