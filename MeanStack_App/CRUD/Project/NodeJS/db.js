const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUD', (err) => {
    if(!err){
        console.log('Database Connection Succeeded');
    }else{
        console.log('Error connection with Database' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;