const express = require("express");
const sequelize=require("./database/db")

const  cors = require('cors')

const commen=require('./routes/comment.router')
const prod=require('./routes/product.router')
const pos=require('./routes/post.router')
const mes=require('./routes/message.router')
const like=require('./routes/likes.router')
const user=require('./routes/User.router')
const foll=require('./routes/follow.route')
const rev=require('./routes/reviews.route')
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use('/api/comm',commen)
app.use('/api/prod',prod)
app.use('/api/post',pos)
app.use('/api/message',mes)
app.use('/api/like',like)
app.use('/api/user',user)
app.use('/api/foll',foll)
app.use('/api/rev',rev)

const initApp = async () => {
    console.log("Testing the database connection..");

    try {
        await sequelize.sync()
        console.log("Connection has been established successfully.");

        app.listen(PORT, () => {
            console.log(`Server is up and running at: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log( error);
    }
};

initApp()



