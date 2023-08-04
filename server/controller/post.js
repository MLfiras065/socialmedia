const Post=require('../database/models/post')
const getPost=async(req,res)=>{
    const comm=await Post.findAll({})
    try {
        console.log('test');
        res.json(comm)
    } catch (err) {
        console.log(err);
    }
    }
    const addPost=async(req,res)=>{
        const added=ax=await Post.create({
            postText:req.body.postText,
            postImage:req.body.postImage
        })
    }
    module.exports={getPost,addPost}