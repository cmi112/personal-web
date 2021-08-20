require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const path=require("path")
const contactSchema = require("./models/contactSchema")
const bodyParser = require('body-parser')
const cors = require("cors")





const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use(express.json());

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true ,useUnifiedTopology: true } ,()=>{
  console.log("Connected to DB");
})

app.get('/', (req, res , next)=>{
  console.log('get request');
  res.send('get request')
})

app.get("/forms",async(req,res, next)=>{
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
app.post("/forms",async(req,res, next)=>{
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
app.use(express.urlencoded({ extended: true }));




if (process.env.NODE_ENV === "production") {
  
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port =process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server Started on Port   ${port}`))