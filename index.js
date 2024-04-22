/*const student = require("./student");
student.display();
student.getDetails();
*/
const http=require("http");
const dotenv=require("dotenv");
const express=require("express");
const mongoose=require("mongoose");
const { connect }=require("http2")
const taskController=require("./controller/taskController");
dotenv.config();
const app=express();
app.use(express.json())
app.post("/tasks",taskController.createTask)
app.get("/tasks",taskController.getTasks);
app.get("/tasks/:id",taskController.getTaskById);
app.patch("/tasks/:id",taskController.updateTask);
app.get("/:id",(req,res)=>{
    res.status(200).json({
        message:"hello",
        id: req.params.id,
    });
});
app.post("/",(req,res)=>{
    res.status(200).json(req.body);
});
mongoose.connect("mongodb+srv://jeswin1234:PP3Ctg36g1DoxLxv@cluster0.zunstnd.mongodb.net/").then(()=>{
    console.log("Db connect");
}).catch((err)=>{      
    console.log(err);
})
app.listen(process.env.PORT,()=>{
    console.log("Server is running on",process.env.PORT);
});