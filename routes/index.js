const express= require("express")
const mongoose = require("mongoose")
const contactSchema = require("../models/contactSchema")
const router =express.Router()


router.get("/forms",async(req,res)=>{
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
router.post("/forms",async(req,res)=>{
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
module.exports=router