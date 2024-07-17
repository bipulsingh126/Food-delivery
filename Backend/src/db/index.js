import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const app = express();

const connectDB = async () =>{
    try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}}/${DB_NAME}`);   
    console.log(`\n MonoDB connection successful || DB HOST:${connectionInstance.connection.host}`);

        app.on('error',()=>{
            console.log('Error connecting to database');
            throw error
        })
      


    } catch (error) {
        console.log("error: ", error);
        process.exit();
    }
}




export default connectDB

