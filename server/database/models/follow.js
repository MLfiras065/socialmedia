const { DataTypes } = require('sequelize');

const sequelize = require('../db');
const follow=sequelize.define('follow',{
    theFollowedUserid:{
        type:DataTypes.INTEGER
    },
    thefollowingUserId:{
        type:DataTypes.INTEGER
    }

})


module.exports=follow