const follo= require('../database/models/follow')
const getFollow=async(req,res)=>{
const follower=await  follo.findAll({})
try {
    res.json(follower)
} catch (err) {
    console.log(err);
}
}
const addFriend=async(req,res)=>{
const {theFollowedUserid}=req.body
const add=await follo.create({theFollowedUserid})
try {
    res.json(add)
} catch (err) {
    console.log(err);
}
}
module.exports={getFollow,addFriend}