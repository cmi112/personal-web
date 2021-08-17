require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const contactSchema = require("./models/contactSchema")
const bodyParser = require('body-parser')
const cors = require("cors")
const port=8000;



// app.get("/",(req,res)=>{
//   res.send("working")
// })
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use(express.json());
const path = require("path");
app.use(cors());

app.get("/forms",async(req,res)=>{
  // res.json({success:true,data:GrocerySeed})
  // res.send("alxmdulilaah")
  try{
    const forms = await contactSchema.find()
    res.json(forms)
  }catch(err){
    res.json({message:err})
  }
})

// // Post Form
app.post("/forms",async(req,res)=>{
  console.log(req.body);
  const form =await new contactSchema({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    message:req.body.message
  })
  form.save()
  res.status(201).json({
    status:"success",
    data:{
      form
    }
  })

})
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true ,useUnifiedTopology: true } ,()=>{
  console.log("Connected to DB");
})

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', "*");

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});





app.listen(port,()=>console.log("Server Started on Port " + port))