const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

// Define the schema for a task
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ['backlog', 'inProgress', 'done'],
    default: 'backlog',
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  dueDate: Date,
  creationDate: {
    type: Date,
    default: Date.now,
  },
  color: String,
  about: String,
  link: String,
  customTags: [String],
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    required: true,
  },
});

// Define the schema for a user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }],
});

// Hash the password before saving the user to the database
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// Define a method for validating a user's password
userSchema.methods.isValidPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// Define the schema for a kanban board
const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  columns: [{
    name: {
      type: String,
      required: true,
    },
    tasks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    }],
  }],
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});


// Define the models for the schemas
const Task = mongoose.model('Task', taskSchema);
const User = mongoose.model('User', userSchema);
const Board = mongoose.model('Board', boardSchema);

module.exports = {
  Task,
  User,
  Board,
};
