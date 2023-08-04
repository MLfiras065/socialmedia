const route=require("express").Router()
const {getlike,addlike}=require('../controller/likes')
route.get('/',getlike)
route.post('/add',addlike)
module.exports=route