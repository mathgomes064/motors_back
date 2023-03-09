import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity";
import { User } from "./entities/user.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { Comment } from "./entities/comment.entity";
import { VehicleImages } from "./entities/vehicleImages.entity";
import {initialMigration1678295748203} from "./migrations/1678295748203-initialMigration"
import {generateTables1678295798546} from "./migrations/1678295798546-generateTables"

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
    migrations: [initialMigration1678295748203, generateTables1678295798546],
    //migrations: ["src/migrations/*.ts"],

})

export default DataSource;