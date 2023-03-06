import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity";
import { User } from "./entities/user.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { Comment } from "./entities/comment.entity";
import { VehicleImages } from "./entities/vehicleImages.entity";
import {initialMigration1678119424698} from "./migrations/1678119424698-initialMigration"
import {generateTables1678119487386} from "./migrations/1678119487386-generateTables"

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
    //entities: ["src/entities/*.ts"],
    migrations: [initialMigration1678119424698, generateTables1678119487386],
    //migrations: ["src/migrations/*.ts"],

})

export default DataSource;