// require('dotenv').config({path:"./env"});
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:"./env"
});

connectDB();







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