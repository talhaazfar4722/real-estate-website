import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';

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
app.use(cookieParser());

// run server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
})

// user api route
app.use('/api/user',userRouter)
// auth api route
app.use('/api/auth', authRouter);
// listing api route
app.use('/api/listing', listingRouter);

// middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });