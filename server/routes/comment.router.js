const router=require('express').Router()
const {getComment,addcomm}=require('../controller/comment')
router.get('/',getComment)
router.post('/add/:userid',addcomm)
module.exports=router