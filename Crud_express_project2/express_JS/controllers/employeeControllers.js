const express = require('express');
const router = express.Router();

let Employee = require('../models/employee');

let ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in getting the Employee ID : '+ JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record found in given id: ' + req.params.id);
    };
    Employee.findById((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in getting the employee ID : '+ JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/', (req, res) => {
    
});

router.post('/', (req, res) => {
    
});

router.delete('/', (req, res) => {
    
});