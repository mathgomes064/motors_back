import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity";
import { User } from "./entities/user.entity";
import { Vehicle } from "./entities/vehicle.entity";
import {vehicleTable1677118460501} from "./migrations/1677118460501-vehicleTable"
import {userAndAddressTable1677505220162} from "./migrations/1677505220162-userAndAddressTable"
import {booleanChange1677517690238} from "./migrations/1677517690238-booleanChange"
import { addConfirmPassword1677783888164 } from "./migrations/1677783888164-addConfirmPassword";
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
    entities: [Vehicle, User, Address],
    // entities: ["src/entities/*.ts"],
    migrations: [vehicleTable1677118460501,
         userAndAddressTable1677505220162,
          booleanChange1677517690238,
           addConfirmPassword1677783888164,
        ]
    // migrations: ["src/migrations/*.ts"],

})

export default DataSource;