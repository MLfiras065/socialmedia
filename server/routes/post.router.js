const router=require("express").Router()
const {getPost,addPost,getUserPost, updatePost, deletePost}=require("../controller/post")
router.get('/get',getPost)
router.get('/get/:userid',getUserPost)
router.post('/addpost',addPost)
// router.post('/get/:email',getPosts)
router.put('/upda/:id',updatePost)
router.delete('/del/:id',deletePost)
module.exports=router