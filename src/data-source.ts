import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity";
import { User } from "./entities/user.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { Comment } from "./entities/comment.entity";
import { VehicleImages } from "./entities/vehicleImages.entity";
// import {initialMigration1678133128838} from "./migrations/1678133128838-initialMigration"
// import {generateTables1678133164243} from "./migrations/1678133164243-generateTables"
// import {addOwnerInVehicle1678149318258} from "./migrations/1678149318258-addOwnerInVehicle"

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
    //entities: [Vehicle, User, Address, Comment, VehicleImages],
    entities: ["src/entities/*.ts"],
    //migrations: [initialMigration1678133128838, generateTables1678133164243, addOwnerInVehicle1678149318258],
    migrations: ["src/migrations/*.ts"],

})

export default DataSource;