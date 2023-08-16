const message= require("../database/models/messages")
const getmess=async(req,res)=>{
    const mess=await message.findAll({where:{senderId:req.params.senderId}})
    try {
        
        if(senderId===senderid&&reciverId===reciverId){
            res.json(mess)
        }
    } catch (err) {
        console.log(err);
    }
}
const addedMessages=async(req,res)=>{
    const msg=await message.create({
        content:req.body.content,
        senderId:req.params.senderId,
        reciverId:req.params.reciverId
    })
    try {
        res.json(msg)
    } catch (err) {
        console.log(err);
    }
}
module.exports={
getmess,addedMessages
}