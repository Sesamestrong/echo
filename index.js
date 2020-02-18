const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",(req,res)=>res.json(req.body));
app.get("/",(req,res)=>res.json(req.query));

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>console.log("Listening at",PORT));