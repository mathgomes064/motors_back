import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity";
import { User } from "./entities/user.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { Comment } from "./entities/comment.entity";
import { VehicleImages } from "./entities/vehicleImages.entity";
import {initialMigration1678389775885} from "./migrations/1678389775885-initialMigration"
import {generateTables1678389843772} from "./migrations/1678389843772-generateTables"
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
    entities: [Vehicle, User, Address, Comment, VehicleImages],
    // entities: ["src/entities/*.ts"],
    migrations: [initialMigration1678389775885, generateTables1678389843772],
    // migrations: ["src/migrations/*.ts"],
})

export default DataSource;