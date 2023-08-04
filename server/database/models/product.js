const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User=require('../models/User')
const product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,  
    },
    price: {
      type: DataTypes.INTEGER,
    },
    images: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    }, 
    bought:{
type:DataTypes.BOOLEAN,
defaultValue:false
    }
  });
  
  User.hasMany(product,{foreignKey:"userid",as:"product"})
 product.belongsTo(User,{foreignKey:"userid",as:"User"})
  module.exports=product