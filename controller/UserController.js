const User = require('../models/UserSchema')


async function createUser(req, res) {
console.log(req.file)
    const data = { name: req.body.name, email: req.body.email, password: req.body.password, address: req.body.address, image:req.file.location }
    const user = await User.create(data)
    user.save()
    res.status(200).json({ Success: true })

}

async function LoginUser(req,res){
    console.log(req.body)
    const email=req.body.email
    const password=req.body.password
    const user = await User.findOne({ email: email })
    console.log(user)
    res.send(user)
}
module.exports = {
    createUser,
    LoginUser

}