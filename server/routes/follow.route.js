const route=require("express").Router()
const {getFollow,addFriend}=require('../controller/follow')
route.get('/:theFollowedUserid/',getFollow)
route.post('/add',addFriend)
module.exports=route