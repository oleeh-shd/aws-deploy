import { Request, Response } from "express";
import dotenv from "dotenv";
import { initializeServer } from "./app";
import { myDataSource } from "./app-data-source";

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

dotenv.config();

const port = process.env.PORT;

const app = initializeServer();
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});
