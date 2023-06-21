const express=require('express')
const {GetAllProduct,CreateProduct,UpdateProducts,DeleteProducts,GetProductDetails}=require('../controller/ProductController')
const router=express.Router()


// user Routes
router.get('/products',GetAllProduct)
router.get('/products/:id',GetProductDetails)


//admin routes
router.post('/products/new',CreateProduct)

router.put('/products/:id',UpdateProducts)
router.delete('/products/:id',DeleteProducts)
module.exports=router