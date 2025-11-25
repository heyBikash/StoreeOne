const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config()

const mongoose = require("mongoose");
const {StockAlertConfig} = require("./schema/stockAlertConfig.scehma");
const {connectToDb} = require("./config/db")
const cors = require("cors")    

app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());


app.get("/healthy",(req,res)=>{
    res.json("api healthy test")
})

app.post("/create",async(req,res)=>{
    try {
        const configMsg = await StockAlertConfig.create({...req.body})
        return res.status(201).json({message:"Configuration created sucessfully.",configMsg})
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error})
    }
})

app.get("/get/:id", async(req,res)=>{
    try {
        const Id = req.params.id;
        const configMsg = await StockAlertConfig.findOne({store_id:Id})
        return res.status(200).json({message:"Config message",configMsg})
    } catch (error) {
        return res.status(500).json({messgae:"Something went wrong.",error})
    }
})



app.listen(PORT,async()=>{
    try {
        await connectToDb()
        console.log("Server started on PORT:",PORT)
    } catch (error) {
        console.log("Failed to start server.")
    }
})
