const express=require("express");
const { default: mongoose } = require("mongoose");
const app=express();
const cors=require("cors");
app.use(cors())
app.use(express.json())
const usermodel=require("./Userschema.js/Users")
const port=3001;
mongoose.connect("url")
.then(()=>
{
    console.log("Succesfully connected")
})
.catch((err)=>
{
console.log(err)
})

app.get("/getusers",(req,res)=>
{
usermodel.find()
.then((users)=>
{
    res.json(users)
})
.catch((err)=>
{
    res.json(err)
})
})
app.post("/create",(req,res)=>
{
    const name=req.body.name;
    const age=req.body.age;
    const Data=new usermodel({name,age})
    Data.save()
    .then(()=>
    {
        res.json("User created successfully")
    })
    .catch((err)=>
    {
        res.json(err)
    })
})
app.listen(port,()=>
{
    console.log(`the server runs at the port ${port}`)
})
