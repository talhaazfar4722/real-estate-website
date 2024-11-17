import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';

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
app.use(express.json());

// run server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
})

// user api route
app.use('/api/user',userRouter)
// auth api route
app.use('/api/auth', authRouter);