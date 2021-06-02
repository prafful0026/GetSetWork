import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"

dotenv.config();
connectDB()


const app=express();


app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("yo");
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, console.log(`server on ${process.env.NODE_ENV} on ${PORT}`));

