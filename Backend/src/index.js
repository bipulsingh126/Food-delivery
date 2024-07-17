import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import foodRouter from "./routes/FoodRoute.js";
import exprees from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config.js';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


app.use(exprees.json())
app.use(cors())

app.get('/', (req ,res)=>{
    res.send('hey riyansh are u good')
})



dotenv.config({
    path: './.env'
})



//api end point
app.use('/api/food', foodRouter);
app.use("/images", exprees.static('uploads'));
app.use('/api/user',  userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);


connectDB().then(()=>{
    app.listen(process.env.PORT || 5000 , ()=>{
        console.log(`Listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED : ", err);
})












// import exprees from "express";
// const app = exprees();

// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on('error', ()=>{
//             console.log('Error connecting to database');
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//         console.log(`Listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("error:", error)
//         throw error
//     }
// })()