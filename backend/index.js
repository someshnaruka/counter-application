//jshint esversion:6
require("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");


app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods: "*",
    credentials: true,
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const PORT= process.env.Port || 8080;

main().catch(err=>console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGODB_URL);
}

const counterSchema=new mongoose.Schema({
    counter:Number
});

const Count=mongoose.model("Count",counterSchema);



app.get("/",(req,res)=>{
    res.send("Server running");
});

app.get("/counter",(req,res)=>{
    Count.find({}).then((data)=>{
        res.send({alert:true,result:data});
    })
})

app.patch("/increment",(req,res)=>{
    Count.findOneAndUpdate({_id:req.body._id},{$inc:{"counter":1}},{new:true}).then(()=>{
        res.send({alert:true});
    })
})
app.patch("/decrement",(req,res)=>{
    Count.findOneAndUpdate({_id:req.body._id},{$inc:{"counter":-1}},{new:true}).then(()=>{
        res.send({alert:true});
    })
})

app.post("/add",(req,res)=>{
    console.log(req.body,"data");
    const newCount=new Count({
        counter:req.body.counter
    });

    newCount.save().then((data)=>{
        res.send({message:"Counter added", result:data,alert:true});
    }).catch((err)=>{
        console.log(err);
    })
});
app.delete("/delete",(req,res)=>{
    console.log(req.body);
    Count.findByIdAndDelete(req.body._id).then(()=>{
        res.send({alert:true})
    }).catch((err)=>{
        console.log(err);
    })
})


app.listen(PORT,()=>{
 console.log("Server running on port "+PORT);
})
