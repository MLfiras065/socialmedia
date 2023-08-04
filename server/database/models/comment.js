const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User=require('../models/User');
const post=require("../models/post")
const comment = sequelize.define("comment", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    }
  });
  post.hasMany(comment,{foreignKey:"commentid",as:"post"})
  comment.belongsTo(post,{foreignKey:"commentid"})
  User.hasMany(comment,{foreignKey:"userid",as:"comment"})
  comment.belongsTo(User,{foreignKey:"userid",as:"User"})
  module.exports=comment