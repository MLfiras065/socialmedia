const route =require('express').Router()
const {getUser,register,login,updateUser,getUserEmail}=require('../controller/User')
route.get('/user',getUser)
route.get('/:email',getUserEmail)
route.post('/reg',register)
route.post("/log",login)
route.put("/upd/:id",updateUser)
module.exports=route