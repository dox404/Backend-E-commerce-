const mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
  .then(() => console.log('Connected! To the Database')).catch((err)=>{
    concole.log(err)
  })