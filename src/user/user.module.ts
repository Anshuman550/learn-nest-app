import { Module } from "@nestjs/common";
import { user } from "./user.service";
import { userConstroller } from "./user.controller";
import { taskModule } from "src/task/task.module";

@Module({
    imports : [ taskModule],
    controllers: [userConstroller],
    providers: [user]
})
export class userModule{

}