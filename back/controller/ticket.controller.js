const { Task, User, Board } = require('../models/index.js');

const ticketController = {};

// CREATE USER
ticketController.createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

// CREATE TASK
ticketController.createTask = async (req, res, next) => {
  try {
    const { title, description, assignedTo, dueDate, board } = req.body;
    const task = new Task({ title, description, assignedTo, dueDate, board });
    await task.save();
    res.status(201).json({ task });
  } catch (error) {
    next(error);
  }
};

// CREATE BOARD
ticketController.createBoard = async (req, res, next) => {
  try {
    const { name, users } = req.body;
    const board = new Board({ name, users });
    await board.save();
    res.status(201).json({ board });
  } catch (error) {
    next(error);
  }
};

// UPDATE USER
ticketController.updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
    await user.save();
    res.json({ user });
  } catch (error) {
    next(error);
  }
};

// UPDATE TASK
ticketController.updateTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const { title, description, assignedTo, dueDate, status } = req.body;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    if (title) task.title = title;
    if (description) task.description = description;
    if (assignedTo) task.assignedTo = assignedTo;
    if (dueDate) task.dueDate = dueDate;
    if (status) task.status = status;
    await task.save();
    res.json({ task });
  } catch (error) {
    next(error);
  }
};

// UPDATE BOARD
ticketController.updateBoard = async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const { name, columns, users } = req.body;
    const board = await Board.findById(boardId);
    if (!board) {
      return res.status(404).json({ error: 'Board not found' });
    }
    if (name) board.name = name;
    if (columns) board.columns = columns;
    if (users) board.users = users;
    await board.save();
    res.json({ board });
  } catch (error) {
    next(error);
  }
};
ticketController.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).send({ message: 'User not found' });
    }

    return res.send({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

// ticketController.deleteTask
ticketController.deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).send({ message: 'Task not found' });
    }

    return res.send({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

// ticketController.deleteBoard
ticketController.deleteBoard = async (req, res) => {
  const { boardId } = req.params;

  try {
    const deletedBoard = await Board.findByIdAndDelete(boardId);
    if (!deletedBoard) {
      return res.status(404).send({ message: 'Board not found' });
    }

    return res.send({ message: 'Board deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

// ticketController.getAllUsers
ticketController.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('tasks');

    return res.send(users);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

// ticketController.getAllTasks
ticketController.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo').populate('board');

    return res.send(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

// ticketController.getAllUserBoards
ticketController.getAllUserBoards = async (req, res) => {
  const { userId } = req.params;

  try {
    const userBoards = await Board.find({ users: userId }).populate('columns.tasks');

    return res.send(userBoards);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

module.exports = ticketController
