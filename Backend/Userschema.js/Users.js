const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    age:
    {
        type:String,
        required:true
    }
})

const Information=mongoose.model("Info",userschema);
module.exports=Information