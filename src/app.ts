// import express, { NextFunction } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import authRouter from "./routes/auth";
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to auth service");
});

app.use("/auth", authRouter);

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
