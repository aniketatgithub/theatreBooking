const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://dheerjain000:rEgVPxjQqqs9NfRT@cluster13.pj8k4ku.mongodb.net/Movie-Theater-Booking';

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose