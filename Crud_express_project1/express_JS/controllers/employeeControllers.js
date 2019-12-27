const express = require('express');
const router = express.Router();

let Employee = require('../models/employee');

let ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error to Retriving the Employee Detials' + JSON.stringify(err, undefined, 2));
        }
    })
});

router.get('/:id', (req, res) => {
   if(!ObjectId.isValid(req.params.id)){
       return res.status(400).send('No Id found with your id: '+ req.params.id)
   }
   Employee.findById(req.params.id, (err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error to getting the id: ' + JSON.stringify(err, undefined, 2));
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
            console.log('Error in creating the Employee' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No Id found with your id: '+ req.params.id)
    }

    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    Employee.findByIdAndUpdate(req.params.id,{$set: emp}, {new: true}, (err, doc) => {
         if(!err){
             res.send(doc);
         }else{
             console.log('Error to getting the id: ' + JSON.stringify(err, undefined, 2));
         }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No Id found with your id: '+ req.params.id)
    }
    
    Employee.findByIdAndDelete(req.params.id, (err, doc) => {
         if(!err){
             res.send(doc);
         }else{
             console.log('Error to delete the employee' + JSON.stringify(err, undefined, 2));
         }
    });
});

module.exports = router;