import { Request, Response } from "express";
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
} from "./user.service";

export const createUserRoute = async (req: Request, res: Response) => {
    const result = await createUser(req.body.name);
    res.send(result);
};

export const getUsersRoute = async (req: Request, res: Response) => {
    const result = await getUsers();
    res.send(result);
};

export const getUserByIdRoute = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await getUserById(id);
    res.send(result);
};

export const updateUserRoute = async (req: Request, res: Response) => {
    const { id } = req.params;
    await updateUser(id, req.body.name);

    res.send("updated");
};

export const deleteUserRoute = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteUser(id);

    res.send("deleted");
};
