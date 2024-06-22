// require('dotenv').config({path:"./env"});
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js";
dotenv.config({
    path:"./env"
});

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000  , () => {
        console.log(` Server is runnning at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(" Mongo DB connectino faild ", err);
})







// database connect 1st approch 

/* 
import express from "express";

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect(`${porcess.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error" , (error ) => {
            console.log(" ERROR " , error );
            throw error;
        })

        app.listen(process.env.PORT , () => {
          console.log(` App is listening on port ${process.env.PORT}`);
        })
       } catch (error) {
        console.log("ERROR : " , error);
        throw error
       }
}
connectDB(); */