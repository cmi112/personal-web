const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({
  firstname:{  type:String,
  required:true
  } ,
  lastname:{  type:String,
    required:true
    }, 
    email:{  type:String,
      required:true
      }
    ,
    message:{  type:String,
      required:true
      }
});

module.exports= ContactForm = mongoose.model('ContactForm', contactSchema);
