const route=require("express").Router()
const {getFollow}=require('../controller/follow')
route.get('/',getFollow)
module.exports=route