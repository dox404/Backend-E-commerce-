const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:[true,"Plese Enter Your full Name"]
    },
    email:{
        type:String,
        // require:[true,"plese enter Your Email"]
    },
    password:{
        type:String,
        // required:[true,"Plese Enter The password"],
        // maxlength:[8,"Price Cannot exceed 8 Character"]
    },   
    address:{
        type:String,
        // required:[true,"Plese Enter The full Address"],
        // maxlength:[8,"Price Cannot exceed 8 Character"]
    },
    // image:{
        
    //         type:String,
    //         require:true,

        
    // }
   
})
module.exports=new mongoose.model("User",userSchema)