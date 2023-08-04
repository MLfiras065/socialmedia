const router=require("express").Router()
const {getPost,addPost}=require("../controller/post")
router.get('/get',getPost)
router.post('/post',addPost)
module.exports=router