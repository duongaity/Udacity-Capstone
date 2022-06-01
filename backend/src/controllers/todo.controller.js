const express = require('express');
const router = express.Router();
const todoService = require('../services/todo.service');

// routes

router.get('/', getAll);
router.get('/id/:id', getById);

module.exports = router;

// route functions

function getAll(req, res, next) {
    todoService.getAll()
        .then(data => res.json(data))
        .catch(next);
}

function getById(req, res, next) {
    todoService.getById(req.params.id)
        .then(data => res.json(data))
        .catch(next);
}
