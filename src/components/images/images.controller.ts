import { Request, Response } from "express";
import {
    findImageById,
    upload,
    findAll,
    removeImageById,
} from "./images.service";

export const uploadImage = (req: Request, res: Response) => {
    upload(req.file!.buffer, res);
};

export const getImage = (req: Request, res: Response) => {
    findImageById(req.params.id, res);
};

export const getAllImages = async (req: Request, res: Response) => {
    const images = await findAll();
    return res.send(images);
};

export const deleteImage = async (req: Request, res: Response) => {
    const { id } = req.params;

    await removeImageById(id);

    res.send("deleted");
};
