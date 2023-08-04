const route =require('express').Router()
const {getUser,register,login,updateUser}=require('../controller/User')
route.get('/user',getUser)
route.post('/reg',register)
route.post("/log",login)
route.put("/upd",updateUser)
module.exports=route