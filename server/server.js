const express = require("express");
const app = express();
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
dotenv.config({
    path:"./config.env"
})

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Connecto to MongoDB
mongoose.connect(process.env.DB,{useNewUrlParser:true,}).then( ()=> {
    console.log("connected to mongoDB !");
});

// import Router
const adminRouter = require("./router/adminRouter");
// const categoryRouter = require("./router/categoryRouter");

app.use("/api", adminRouter);


// Server
app.listen(process.env.PORT, ()=> (console.log("This server listening to port 3000")));