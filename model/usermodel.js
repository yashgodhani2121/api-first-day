const mongoose = require ('mongoose');

const userSchma = mongoose.Schema ({

    username :{
        type : String ,
        required: true 
    },
    email:{
        type:String ,
        required:true 
    },
    passwrod:{
        type:String,
        required:true
     }

});

const user = mongoose.model ('user', userSchma);

module.exports= user;