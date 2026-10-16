const express = require('express')
const router=express()
const usercontroller=require('../controllers/user.controller')
router.get('/findall',usercontroller.findall)
router.post('/add',usercontroller.adduser)
module.exports=router