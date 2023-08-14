const comment=require("../database/models/comment")
const Post=require('../database/models/post')

const getComment=async(req,res)=>{
const comm=await comment.findAll({where:{postid:req.params.postid}})
try {
    console.log('test');
    res.json(comm)
} catch (err) {
    console.log(err);
}
}
const addcomm=async(req,res)=>{
    
    const addC=await comment.create({
        content:req.body.content,
        image:req.body.image,
        userid:req.params.userid,
    postid:req.params.postid})
    try {
        res.json(addC)
    } catch (err) {
        console.log(err);
    }
}
module.exports={getComment,addcomm}