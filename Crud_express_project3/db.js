const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CrudDB", (err)=>{
    if(!err){
        console.log('Database is connected successfully');
    }else{
        console.log("Database connection failed");
    }
});

module.exports = mongoose;