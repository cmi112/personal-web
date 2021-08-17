require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const path=require("path")
const contactSchema = require("./models/contactSchema")
const bodyParser = require('body-parser')
const cors = require("cors")
const router= require("./routes/index.js")




// app.get("/",(req,res)=>{
//   res.send("working")
// })
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use(express.json());
app.use(cors());

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

app.use("/forms", router);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("frontend/build"))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))

  })
}

const port =process.env.PORT || 8000;

app.listen(port,()=>console.log("Server Started on Port " + port))