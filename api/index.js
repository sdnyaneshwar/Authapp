import express from 'express'
import dotenv, { config } from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MONGODB is connected !");
}).catch((error)=>{
    console.log(error);
})


app.listen(3000,()=>{
    console.log("app listenig on port 3000!");
})
