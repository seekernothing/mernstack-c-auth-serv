// import express, { NextFunction } from "express";
import logger from "./logger";
import { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to auth service");
});

// global error handler.(This is a global Middleware  )

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: "",
                location: "",
            },
        ],
    });
});

export default app;
