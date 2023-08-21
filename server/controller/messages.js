const Sequelize= require('sequelize')
const Op = Sequelize.Op;
const message= require("../database/models/messages")
const getmess=async(req,res)=>{
    let arr=[parseInt(req.params.senderid),parseInt(req.params.reciverid)]
    
    console.log(req.params);
    const mess=await message.findAll({
        where:{
        senderId:{
            [Op.in]:arr
        },
        reciverId:{
            [Op.in]:arr
        }
    }
})
    try {
        
        res.json(mess)
        
    } catch (err) {
        console.log(err);
    }
}
const addedMessages=async(req,res)=>{
  console.log("hello");
    try {
        const msg=await message.create({
            content:req.body.content,
            senderId:req.params.senderId,
            reciverId:req.params.reciverId
        })
        res.json(msg)
    } catch (err) {
        console.log(err);
    }
}
module.exports={
getmess,addedMessages
}