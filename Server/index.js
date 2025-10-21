const express= require("express")
const app = express()
const mongoose= require("mongoose")
const cors= require("cors")
const userRouters=require("./userRouters")
const path = require("path");

app.use(cors())
app.use(express.json())
app.use("/",userRouters)
mongoose.connect("mongodb://localhost:27017/MERNDemo").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
})
app.listen(3000,()=>{console.log("Server is running on port 3000");
})