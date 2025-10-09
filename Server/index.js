const express= require("express")
const app = express()
const mongoose= require("mongoose")

app.get("/",(req,res)=>{
    const today = new Date("2004-12-05");
    
    const minDate = new Date();
        res.send(`${ new Date(minDate-today) } `);



})
mongoose.connect("mongodb://localhost:27017/MERNDemo").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
})
app.listen(3000,()=>{console.log("Server is running on port 3000");
})