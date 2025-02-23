const express= require('express');

const port = 8000;

const app= express();
const path = require('path');
const db= require("./config/db")
const passport = require("passport");

const jwtstegy = require ("./config/passport-jwt-Strategy");
const session = require("express-session");

app.use(session({
    name:"Jwtsession",
    secret: "jwtjj",
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: 1000*60*60
    }
}))
app.use("/upload",express.static(path.join(__dirname,"upload")));

app.use (passport.initialize());
app.use (passport.session());

app.use(express.urlencoded());

app.use("/", require("./routes"))
app.listen (port, (err) => {

    if(err) {
        console.log(err);
        }  
    console.log( "server is running on port", port);
})