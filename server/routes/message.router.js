const route=require("express").Router()
const {getmess,addedMessages}=require("../controller/messages")
route.get('/getm/:senderid/:reciverid',getmess)
route.post('/postMsg/:senderId/:reciverId',addedMessages)
module.exports=route