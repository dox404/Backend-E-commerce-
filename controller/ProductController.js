const Product = require('../models/ProductSchema')

async function GetAllProduct(req, res) {
    const Products=await Product.find()
    res.status(200).json({success:true,Products})
}
async function CreateProduct(req,res){
   const product= await Product.create(req.body)
   product.save()
   res.status(200).json({Success:true,product})
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
    DeleteProducts
    
}