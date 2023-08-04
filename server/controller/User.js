const User=require("../database/models/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const getUser=async(req,res)=>{
  try {
      const user=await User.findAll({})
      res.json(user)
      console.log("test");
    } catch (err) {
        console.log(err);
    }
}
const register=(req,res)=>{
  bcrypt.hash(req.body.Password,10)
  .then((hashedPass)=>{
const user=new User({
   image:req.body.image,
   coverimage:req.body.coverimage,
   FirstName:req.body.FirstName,
   LastName:req.body.LastName,
   username:req.body.username,
   email:req.body.email,
   Password:hashedPass,
   DateOfBirth:req.body.DateOfBirth,
   gender:req.body.gender,
   bio:req.body.bio
})
user.save().then((result)=>{
    res.json(result)
}).catch((err)=>console.log(err))
  })
} 
const login=(req,res)=>{
    User.findOne({ where: { email: req.body.email } }).then((user) => {
        bcrypt
          .compare(req.body.Password,user.Password)
          .then((passCheck) => {
            if (!passCheck) {
              return res.status(400).json({ message: "Password wrong" });
            }
            const token = jwt.sign(
              {
                id: user.id,
                email: user.email,
              },
              "RandomToken",
            //   { expireIn: "24h" }
            );
            
            res.status(200).json({ email: user.email,token:token });
          })
          .catch((err) => {
            console.log(err);
          });
      });
}
const updateUser=async(req,res)=>{
  const  updeted=await User.update({image:req.body.image,
    coverimage:req.body.coverimage,
    FirstName:req.body.FirstName,
    LastName:req.body.LastName,
    username:req.body.username,
    email:req.body.email,
    Password:hashedPass,
    DateOfBirth:req.body.DateOfBirth,
    gender:req.body.gender,
    bio:req.body.bio})
    try {
     res.json(updeted)
    } catch (err) {
      console.log(err);
    }
}
module.exports={getUser,register,login,updateUser}