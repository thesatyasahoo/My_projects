const express = require('express');
const bodyparser = require('body-parser');

const mongoose = require('./db');

let employeeController = require('./controllers/employeeControllers');

const port = 3400;

let app = express();

app.use(bodyparser.json());

app.use('/employees', employeeController);

app.listen(port, () => {
    console.log('Server is Connected to port no : ' + port);
});