import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity";
import { User } from "./entities/user.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { Comment } from "./entities/comment.entity";
import { VehicleImages } from "./entities/vehicleImages.entity";
import { initialMigration1696947101758 } from "./migrations/1696947101758-initialMigration"
import { generateTables1696947131228 } from "./migrations/1696947131228-generateTables"

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
    migrations: [
        initialMigration1696947101758,
        generateTables1696947131228
    ],
    // migrations: ["src/migrations/*.ts"],
})

export default DataSource;