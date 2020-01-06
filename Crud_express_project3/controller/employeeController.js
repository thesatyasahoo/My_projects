const express = require('express');
const router = express.Router();

let objectID = require('mongoose').Types.ObjectId;

let Employee = require('../model/employee');

router.get('/', (req, res)=>{
    Employee.find((err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error to get the employee id: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res)=>{
    if(!objectID.isValid(req.params.id)){
        return res.status(400).send("Employee is not match with your given id" + req.params.id);
    }
    Employee.findById(req.params.id , (err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error to get the employee id: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req, res)=>{
    if(!objectID.isValid(req.params.id)){
        return res.status(400).send("Employee is not match with your given id" + req.params.id);
    }
    Employee.findById(req.params.id , (err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error to get the employee id: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res)=>{
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error to create new employee');
        }
    });
});

module.exports = router;