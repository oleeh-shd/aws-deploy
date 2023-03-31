import { DataSource } from "typeorm";
import { User } from "./src/entity/user.entity";

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "aws-deploy",
    entities: [User],
    synchronize: true,
});
