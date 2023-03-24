const express = require('express');
const router = express.Router();
const ticketController = require('../controller/ticket.controller.js');

router.post('/users', ticketController.createUser);
router.post('/tasks', ticketController.createTask);
router.post('/boards', ticketController.createBoard);
router.put('/users/:userId', ticketController.updateUser);
router.put('/tasks/:taskId', ticketController.updateTask);
router.put('/boards/:boardId', ticketController.updateBoard);
router.delete('/users/:userId', ticketController.deleteUser);
router.delete('/tasks/:taskId', ticketController.deleteTask);
router.delete('/boards/:boardId', ticketController.deleteBoard);
router.get('/users', ticketController.getAllUsers);
router.get('/tasks', ticketController.getAllTasks);

module.exports = router;