const follo= require('../database/models/follow')
const getFollow=async(req,res)=>{
const follower=await  follo.findAll({})
try {
    res.json(follower)
} catch (err) {
    console.log(err);
}
}
module.exports={getFollow}