import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
// const User=require("./models/userModel");
import reservationRouter from "./routes/reservationRoute.js";
import cors from "cors";
const app=express();
dotenv.config({path:"./config/config.env"} );
// app.use(cors());

// app.use(cors(
// {
//   origin:[process.env.FRONTEND_URL],
//   methods:["POST"],
//   credentials:true }));

app.use(cors({
  origin: 'https://bharti12.netlify.app',
   methods:["POST"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.options('/api/v1/reservation/send', cors());
app.use(`/api/v1/reservation`,reservationRouter);
app.get("/", (req, res, next)=>{
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })});
  
dbConnection();

app.use(errorMiddleware);
export default app;
