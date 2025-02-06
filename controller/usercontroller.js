const user = require ("../model/usermodel")
module.exports.insertuser= async (req, res) => {
try {

        // console.log("home is loading")
        const userdata= await user.find();
        if (userdata){
           return res.status(200).json({message:"home page data", data:userdata})
        }
        else{
           return res.status(404).json({message:"no data found"})
        }
}
catch (err){
        return res.status(500).json({message: "server error"})
}
}
module.exports.adddata = async (req,res)=>{
 try {
     console.log(req.body);
     let userdata= await user.create(req.body);
   //   console.log(userdata);
     

     if( userdata ){
        return res.status(201).json({message: "user created successfully"})
    }
    else{
        return res.status(400).json({message: "user not created"})
    }
 }
 catch(err){
      return res.status(400).json({message: "server error",error:err})
 }
}

module.exports.deletedata = async (req,res)=>{
   try{
      //  const id = req.params.id;
      const userdata =await user.findByIdAndDelete(req.params.id);
       if (userdata){
         return res.status(200).json({message: "user deleted successfully"})
       }
       else{
         return res.status(404).json({message: "user not found"})
       }
   }
   catch(err){
      return res.status(400).json({message: "server error",error:err})
   }
}

module.exports.getdatauser= async (req,res)=>{
   try{
      console.log(req.query.dataId)
      const userdata = await user.findById(req.query.dataId);
      if (userdata){
         return res.status(200).json({data:userdata})
         }
         else{
            return res.status(404).json({message: "user not found"})
            }
   }
   catch (err){
      return res.status(400).json({message: "server error",error:err})
   }
}
module.exports.update = async (req,res)=>{
   try{
      // console.log(req.body);
      
      let checkdata = await user.findById(req.body.userid)
      // console.log(checkdata)
      if(checkdata){
         const userdata = await user.findByIdAndUpdate(checkdata._id,req.body);
         if (userdata){
            const updateddata= await user.findById(checkdata._id);
            return res.status(200).json({message: "user updated successfully", data:updateddata})
        }
        else{
         return res.status(404).json({message: "user not update" })
         }
      }
      else{
         return res.status(404).json({message: "user not found"})
         }
         }
         catch(err){
            return res.status(400).json({message: "server error",error:err})
         }
      }

