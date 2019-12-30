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
    Employee.findById(req.params.id, (err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in getting the employee ID : '+ JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record found in given id: ' + req.params.id);
    };

    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    Employee.findByIdAndUpdate(req.params.id, {$set : emp}, {new : true}, (err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in getting the employee ID : '+ JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record found in given id: ' + req.params.id);
    };

    Employee.findByIdAndDelete(req.params.id, (err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in Deleting the employee ID : '+ JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    let emp = new Employee ({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in creating the Employee ID'+ JSON.stringify(err, undefined, 2));
        }
    });
});
module.exports = router;