import express from "express";
import cors from "cors";
import usersRouter from "./components/user/user.router";
import imagesRouter from "./components/images/images.router";

export const initializeServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/users", usersRouter);
    app.use("/images", imagesRouter);
    return app;
};
