const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    if(!err){
        console.log('Connection succeeded to MongoDB');
    }else{
        console.log('Error to connecting to MongoDB' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;