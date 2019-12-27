const express = require('express');
const bodyparser = require('body-parser');

const mongoose = require('./db');

let employeeController = require('./controller/employeeController');

let app = express();

const port = 3200;

app.use(bodyparser.json());

app.use('/employees', employeeController);

app.listen(port, () => {
    console.log('Server Connection Successfull');
});