const mongoose = require("mongoose")

// const initialMsg ={message:"",stock:0,isMessageEnable:"",mybackgroundColor:"",mytextColor:""}


const StockAlertScehma =  new mongoose.Schema({
    store_id:{type:String,required:[true, "store_id is required"]},
    message:{type:String, required:[true, "message is required"]},
    stock:{type:Number, required:[true, "stock is missing"],},
    isMessageEnable:{type:String, required:[true, "isMessageEnable is required"]},
    mybackgroundColor:{type:String, required:[true, "mybackgroundColor is required"]},
    mytextColor:{type:String, required:[true, "mytextColor is required"]},
},
{timestamps:false, versionKey:false});

const StockAlertConfig = mongoose.model("StockAlertConfig",StockAlertScehma);

module.exports = {StockAlertConfig}
