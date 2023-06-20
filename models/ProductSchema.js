const mongoose=require('mongoose')


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Plese Enter the products Name"]
    },
    description:{
        type:String,
        require:[true,"plese enter Products description"]
    },
    price:{
        type:Number,
        required:[true,"Plese Enter the price of the product"],
        maxlength:[8,"Price Cannot exceed 8 Character"]
    },
    image:{
        url:{
            type:String,
            require:true,

        }
    }
   
})
module.exports=new mongoose.model("Product",productSchema)