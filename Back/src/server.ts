import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import cors from "cors";

//Criando o Server
const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal  Server Error",
    });
  }
);

app.listen(4000, () => console.log("Server is running on port 4000"));
