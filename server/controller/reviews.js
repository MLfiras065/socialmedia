const reviews=require("../database/models/reviews")


const getReview=async(req,res)=>{
const rev=await reviews.findAll({})
try {
    console.log('test');
    res.json(rev)
} catch (err) {
    console.log(err);
}
}
const addRev= async(req,res)=>{
    
    const rev= await reviews.create({
         content:req.body.content
    })
    try {
        res.json(rev)
    } catch (err) {
        console.log(err);
    } 
}
module.exports={getReview,addRev}