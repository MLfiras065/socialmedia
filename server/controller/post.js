const User = require('../database/models/User');
const Post=require('../database/models/post')
const getPost=async(req,res)=>{
    
    const comm=await Post.findAll({include:[{
        model:User,
        as:"User",
      
    }]})
    try {
        console.log('test');
        res.json(comm)
    } catch (err) {
        console.log(err);
    }
    }
    const addPost=async(req,res)=>{
        console.log(req.params.userid);
        const added=await Post.create({
            postText:req.body.postText,
            postImage:req.body.postImage,
             userid:req.params.userid
        })
        try {
            console.log(added,"testtttt");
            res.json(added)
        } catch (err) {
            console.log(err);
        }
    }
    const getUserPost=async(req,res)=>{
        const userPost=await Post.findAll({where:{userid:req.params.userid}})
        try {
            res.json(userPost)
        } catch (err) {
            console.log(err);
        }
    }
const updatePost=async(req,res)=>{
    const {postText,postImage}=req.body
const updPost=await Post.update(
   {postText,postImage}
,{where:{id:req.params.id}})
try {
    console.log(updPost);
  res.json(updPost)  
} catch (err) {
    console.log(err);
}
}
const deletePost=async(req,res)=>{
    const delte=await Post.destroy({where:{id:req.params.id}})
    try {
        res.json(delte)
    } catch (err) {
        console.log(err)
    }
}
const getPosts=async(req,res)=>{
    const find=await Post.findAll({})
    try {
        if(id!==userid){
            res.json(find)
        }
    } catch (err) {
        console.log(err);
    }
}
    module.exports={getPost,addPost,getUserPost,updatePost,deletePost,getPosts}