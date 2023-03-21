const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

// logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.path}`);
  next();
});

// routes
const ticketRoutes = require('./routes/ticket.routes.js');
app.use('/', ticketRoutes);

// handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error(err));

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
