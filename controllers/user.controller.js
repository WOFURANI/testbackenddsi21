const User = require('../models/user.model')
import { v4 as uuidv4 } from 'uuid'
const bcrypt = require('bcrypt')
const usercontroller = {
    findall: async (req, res) => {
        const users = await User.findAll().catch((err) => {
            console.log("error in showing users", err.message)
        }).then(() => {
            console.log("showing function is working ")
        })
        res.send(users)
        //  return res.status(200).json(users)
    },
    adduser: async (req, res) => {
        const { firstname, lastname } = req.body
        const user = new User({ firstname, lastname })
        await user.create(user).catch((err) => {
            console.log("error in create new user", err.message)
        }).then(() => {
            console.log('user created!!')
        })
    }, register: async (req, res) => {
        try {
            const { username, password, firstname, lastname } = req.body
            const userexist = await User.findOne({ username: username })
            if (userexist) {
                return res.status(500).json({ message: 'username is used ' })

            }
            const id = uuidv4()
            const hashbpassword = bcrypt.hash(password, 10)
            const user = await User.create({
                id,
                firstname, lastname, username,
                password: hashbpassword
            }).catch((err) => {
                res.status(500).json({ message: "error in creating user" })
                console.log("error in creating user ", err)
            })

            res.status(201).json({ message: 'user created!!! ' })
        } catch (err) {
            res.status(500).json({ message: 'error creation ' })
            console.log('error creation ', err.message)
        }
    }


}
module.exports = usercontroller