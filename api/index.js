import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config();

// mongo db connection
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDb');
})
.catch((err)=>{
    console.log(err);
})

const app = express();

// run server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
})

// user api route
app.use('/api/user',userRouter)