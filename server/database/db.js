const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("InstaKilo", "root", "0657firasML", {
  host: "127.0.0.1",
  dialect: "mysql",
});
sequelize
  .query("CREATE DATABASE IF NOT EXISTS InstaKilo ")
  .then(() => {
    console.log("data mawjouda");
  })
  .catch((err) => console.log(err));

module.exports=sequelize