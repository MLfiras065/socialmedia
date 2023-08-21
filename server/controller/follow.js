const Sequelize= require('sequelize')
const Op = Sequelize.Op;
const follo= require('../database/models/follow')
const User = require('../database/models/User');
const getFollow=async(req,res)=>{
    let arr=[parseInt(req.params.theFollowedUserid),parseInt(req.params.thefollowingUserId)]
const follower=await  follo.findAll({

})
try {
    
    res.json(follower)
} catch (err) {
    console.log(err);
}
}
const addFriend=async(req,res)=>{
const {theFollowedUserid,thefollowingUserId}=req.body
const add=await follo.create({theFollowedUserid,thefollowingUserId})
try {
    res.json(add)
} catch (err) {
    console.log(err);
}
}
module.exports={getFollow,addFriend}