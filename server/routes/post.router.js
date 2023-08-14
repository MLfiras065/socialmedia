const router=require("express").Router()
const {getPost,addPost,getUserPost, updatePost, deletePost,getPosts}=require("../controller/post")
router.get('/get',getPost)
router.get('/get/:userid',getUserPost)
router.post('/addpost/:userid',addPost)
router.post('/get/posts',getPosts)
router.put('/upda/:id',updatePost)
router.delete('/del/:id',deletePost)
module.exports=router