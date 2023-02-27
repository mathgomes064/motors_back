import { listUsersController } from './../controllers/user/userList.controller';
import { userCreateController } from './../controllers/user/userCreate.controller';
import { Router } from "express";


const userRoutes = Router();

userRoutes.post("",userCreateController );
userRoutes.get("", listUsersController );

export default userRoutes;