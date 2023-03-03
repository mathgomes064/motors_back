import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity";
import { User } from "./entities/user.entity";
import { Vehicle } from "./entities/vehicle.entity";
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
    //entities: [Vehicle, User, Address, Comment],
    entities: ["src/entities/*.ts"],
    //migrations: [vehicleTable1677118460501, userAndAddressTable1677505220162, booleanChange1677517690238],
     migrations: ["src/migrations/*.ts"],

})

export default DataSource;