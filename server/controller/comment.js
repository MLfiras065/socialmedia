const comment=require("../database/models/comment")


const getComment=async(req,res)=>{
const comm=await comment.findAll({})
try {
    console.log('test');
    res.json(comm)
} catch (err) {
    console.log(err);
}
}
const addcomm=async(req,res)=>{
    const {content,image}=req.body
    const addC=await comment.create({content,image})
    try {
        res.json(addC)
    } catch (err) {
        console.log(err);
    }
}
module.exports={getComment,addcomm}