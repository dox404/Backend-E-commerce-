const Product = require('../models/ProductSchema')
const ErrorHandler = require('../utils/errorHandler')
const upload=require('../AWS/upload')


async function GetAllProduct(req, res) {
    // const page = req.query.page || 1
    // const keyword = req.query.keyword || null

    // const skip = page - 1 * 5
    
    const Products = await Product.find()

    // { skip: 10, limit: 5 }
    res.status(200).json({ success: true, Products })
}
async function GetProductDetails(req, res) {
    const Products = await Product.findById(req.params.id)
    if (!Product) {
        return next(new ErrorHandler("Product Not Found", 404))
    }
    res.status(200).json({ success: true, Products })
}
async function CreateProduct(req, res) {
    console.log(req.body,req.file)
    console.log(req.body.name)
    console.log(req.body.description)
    console.log(req.body.price)
    console.log(req.file.location)
    const data={name:req.body.name,description:req.body.description,price:req.body.price,image:req.file.location}
    const product = await Product.create(data)
    //    console.log(req.body)
    product.save()
    res.status(200).json({ Success: true, product })
    // res.send("success")
}

async function UpdateProducts(req, res) {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidetors: true, useFindAndModify: false })
    res.status(200).json({ success: true, product })
}


async function DeleteProducts(req, res) {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.deleteOne();

    res.status(200).json({ success: true, message: "Product deleted Successfully" })
}


module.exports = {
    GetAllProduct,
    CreateProduct,
    UpdateProducts,
    DeleteProducts,
    GetProductDetails

}