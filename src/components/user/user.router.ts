import { Router } from "express";
import {
    createUserRoute,
    deleteUserRoute,
    getUserByIdRoute,
    getUsersRoute,
    updateUserRoute,
} from "./user.controller";

const usersRouter = Router();

usersRouter.get("/", getUsersRoute);
usersRouter.get("/:id", getUserByIdRoute);
usersRouter.post("/", createUserRoute);
usersRouter.patch("/:id", updateUserRoute);
usersRouter.delete("/:id", deleteUserRoute);

export default usersRouter;
