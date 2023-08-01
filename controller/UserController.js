const User = require('../models/UserSchema')


async function createUser(req, res) {
console.log(req.file)
    const data = { name: req.body.name, email: req.body.email, password: req.body.password, address: req.body.address, image:req.file.location }
    const user = await User.create(data)
    user.save()
    res.status(200).json({ Success: true })

}
module.exports = {
    createUser

}