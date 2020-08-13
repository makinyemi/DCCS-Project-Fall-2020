const express = require('express');
const router = express.Router();
let Task = require("../models/task");

router.get('/', (req,res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req,res) => {
    var name = req.body.name;
    var description = req.body.description;
    var date = req.body.date;

    const newTask = new Task({name,description,date});

    newTask.save()
        .then(() => res.json('Task Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req,res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req,res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/update/:id', (req,res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.name = req.body.name;
            task.description = req.body.description;
            task.date = Date.parse(req.body.date);

            task.save()
                .then(() => res.json('Task Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;