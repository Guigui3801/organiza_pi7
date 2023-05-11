 import express, { Request, Response, NextFunction } from "express";
import winston from "winston";
import expressWinston from "winston-express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

//definindo os tipos de erros
const err_logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({ filename: "errors.log" }),
  ],
});
const con_logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({ filename: "connections.log" }),
  ],
});

//iniciando a aplicação
const app = express();
app.use(express.json());
app.use(cors());

// logando erros na aplicação
app.use(expressWinston.logger({
  winstonInstance: err_logger,
  level: "error", 
  meta: true, 
  msg: "HTTP {{req.method}} {{req.url}}", 
  colorize: true,
}));

//logando requisições
app.use(expressWinston.logger({
  winstonInstance: con_logger,
  meta: true,
  msg: "HTTP {{req.method}} {{req.url}}",
  colorize: true, 
  skip: (req: Request, res: Response) => {
    return res.statusCode < 400;
  },
}));

app.use(router);
//tratamento de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //se for a instancia do tipo error
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Intenal server error",
  });
});
//iniciando a porta do servidor
app.listen(3333, () => console.log("Server Online"));
