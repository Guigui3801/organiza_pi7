// Require the modules
import express from "express";
import winston from "winston";
import expressWinston from "express-winston";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

// Create an express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);



// Create a logger
const loggerError = winston.createLogger({
  level:"error",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/errors.log' }),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
});

const loggerWarning = winston.createLogger({
  level:"warning",
  transports: [
    new winston.transports.File({ filename: 'logs/warning.log' }),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
});


// Use express-winston middleware to log requests and responses
app.use(expressWinston.logger({ winstonInstance: loggerError }));
app.use(expressWinston.logger({ winstonInstance: loggerWarning }));

// Define a route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Listen on port 3000
app.listen(3333, () => console.log("Server Online"));
