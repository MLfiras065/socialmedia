const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User=require('../models/User')
const comment=require('../models/comment')
const post = sequelize.define("post", {
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postImage: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  User.hasMany(post,{foreignKey:"userid",as:"post"})
  post.belongsTo(User,{foreignKey:"userid",as:"User"})
  module.exports=post