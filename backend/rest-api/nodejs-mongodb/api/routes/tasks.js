const express = require('express');
const router = express.Router();

dbHandler = require('../../mongodb/mongodbUtils');

router.get('/', (req, res, next) => {
    dbHandler.getTasks()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch( err => { 
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.post('/', (req, res, next) => {
    dbHandler.addTask(req.body.title, req.body.status)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch( err => { 
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.get('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    dbHandler.getTask(id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch( err => { 
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.put('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    dbHandler.updateTask(id, req.body.title, req.body.status)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch( err => { 
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.patch('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    dbHandler.updateTask(id, req.body.title, req.body.status)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch( err => { 
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:taskId', (req, res, next) => {
    const id = req.params.taskId;

    dbHandler.deleteTask(id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch( err => { 
        console.log(err);
        res.status(500).json({error: err});
    });
});

module.exports = router;

