const router=require('express').Router()
const {getComment,addcomm}=require('../controller/comment')
router.get('/:postid',getComment)
router.post('/add/:userid/:postid',addcomm)
module.exports=router