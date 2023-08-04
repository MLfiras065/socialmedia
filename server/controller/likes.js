const likes=require("../database/models/likes")
const getlike=async(req,res)=>{
    const like=await likes.findAll({})
    try {
        res.json(like)
    } catch (err) {
        console.log(err);
    }
}
const addlike=async(req,res)=>{
    const addedlike=await likes.create({
        numberOfLikes:req.body.numberOfLikes
    })
    try {
        res.json(addedlike)
    } catch (err) {
        console.log(err);
    }
}
module.exports={getlike,addlike}