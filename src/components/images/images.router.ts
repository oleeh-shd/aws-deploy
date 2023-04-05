import { Router } from "express";
import {
    getAllImages,
    getImage,
    uploadImage,
    deleteImage,
} from "./images.controller";
import multer from "multer";

const imagesRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

imagesRouter.get("/", getAllImages);
imagesRouter.get("/:id", getImage);
imagesRouter.post("/upload", upload.single("image"), uploadImage);
imagesRouter.delete("/:id", deleteImage);

export default imagesRouter;
