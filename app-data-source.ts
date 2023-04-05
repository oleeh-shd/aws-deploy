import { DataSource } from "typeorm";
import { User } from "./src/entity/user.entity";
import { Image } from "./src/entity/image.entity";

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "aws-deploy",
    // use this for dev mode
    // entities: [User, Image],
    // use this for prod mode
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: true,
});
