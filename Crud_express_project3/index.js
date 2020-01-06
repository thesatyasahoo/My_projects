const express = require('express');
const bodyparser = require('body-parser');

let port = 3000;

let employeeController = require('./controller/employeeController');

const mongoose = require('./db');

let app = express();

app.use(bodyparser.json());

app.use('/employees', employeeController);

app.listen(port, ()=>{
    console.log('Database connected Successfully');
});