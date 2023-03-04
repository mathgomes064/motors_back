import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity";
import { User } from "./entities/user.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { Comment } from "./entities/comment.entity";
import { initialMigration1677849800096 } from "./migrations/1677849800096-initialMigration"
import { createTables1677849926548 } from "./migrations/1677849926548-createTables"
require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,

    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database:  process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,
    entities: [Vehicle, User, Address, Comment],
    // entities: ["src/entities/*{.ts}"],
    migrations: [initialMigration1677849800096,
        createTables1677849926548],
    //  migrations: ["src/migrations/*{.ts}"],

})

export default DataSource;