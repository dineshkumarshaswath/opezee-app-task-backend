// import mongoose from "mongoose";
const mongoose =require('mongoose');

 const  dbConnection= ()=>{
    const params={
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    }

    try {
        mongoose.connect("mongodb+srv://dinesh:dinesh13@cluster0.fugkgn1.mongodb.net/windowsapp",params)
        console.log("db connected successfully");
        
    } catch (error) {
        console.log('error connerctio db',error)
    }
}
  
module.exports = dbConnection;

