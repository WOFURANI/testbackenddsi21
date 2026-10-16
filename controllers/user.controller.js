const User = require('../models/user.model')
const usercontroller = {
    findall: async (req, res) => {
        const users = await User.findAll().catch((err) => {
            console.log("error in showing users", err.message)
        }).then(()=>{
            console.log("showing function is working ")
        })
        res.send(users)
        //  return res.status(200).json(users)
    },
    adduser: async (req, res) => {
        const { firstname, lastname } = req.body
        const user = new User({ firstname, lastname })
        await user.save().catch((err)=>{
            console.log("error in create new user",err.message)
        }).then(()=>{
            console.log('user created!!')
        })
    }


}
module.exports=usercontroller