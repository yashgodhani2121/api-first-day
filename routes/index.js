const express = require('express');

const routes= express.Router();
const userctl =require("../controller/usercontroller");
const passport = require('passport');


routes.get ('/',passport.authenticate("jwt",{failureRedirect:"/unauth" }),userctl.insertuser);
routes.get ("/unauth",async (req,res)=>{
    return res.status (400).json({message:"unauth user" });
} )
routes.post ('/adddata', passport.authenticate("jwt",{failureRedirect:"/unauth" }),userctl.adddata);
routes.delete ('/deletedata/:id',passport.authenticate("jwt",{failureRedirect:"/unauth" }),userctl.deletedata);
routes.get('/getdatauser',passport.authenticate("jwt",{failureRedirect:"/unauth" }),userctl.getdatauser);
routes.put('/update',passport.authenticate("jwt",{failureRedirect:"/unauth" }),userctl.update);

routes.use("/auth",require("./auth"))
module.exports= routes;
