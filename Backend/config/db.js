const mongoose = require("mongoose");

const connectToDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    }catch(err){
        console.log("Failed to connect MongoDB",err)
    }
}

module.exports = {connectToDb}