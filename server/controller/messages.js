const message= require("../database/models/messages")
const getmess=async(req,res)=>{
    const mess=await message.findAll({})
    try {
        res.json(mess)
    } catch (err) {
        console.log(err);
    }
}
const addedMessages=async(req,res)=>{
    const msg=await message.create({
        content:req.body.content
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