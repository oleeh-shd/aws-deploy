import express from "express";
import cors from "cors";
import usersRouter from "./components/user/user.router";

export const initializeServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/users", usersRouter);
    return app;
};
