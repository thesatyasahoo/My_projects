const express = require('express');
const router = express.Router();

const Employee = require('../model/employee');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retriving the employee' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No Id found with given id: ${req.params.id}`);
    };
    Employee.findById(req.params.id, (err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retriving employee' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if(!err){
            res.send(doc);
        }else{
            console.log('Error on save Employee' + JSON.stringify(err, undefined, 2));
        }
    })
});
module.exports = router;