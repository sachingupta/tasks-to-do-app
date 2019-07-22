const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling Get requests to /tasks"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requests to /tasks"
    });
});

router.get('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    res.status(200).json({
        message: "Handling get requests to /tasks",
        id: id
    });
});

router.patch('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    res.status(200).json({
        message: "Handling update requests to /tasks",
        id: id
    });
});

router.delete('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    res.status(200).json({
        message: "Handling delete requests to /tasks",
        id: id
    });
});

module.exports = router;

