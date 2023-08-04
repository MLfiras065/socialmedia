const route=require("express").Router()
const {getmess,addedMessages}=require("../controller/messages")
route.get('/getm',getmess)
route.post('/postMsg',addedMessages)
module.exports=route