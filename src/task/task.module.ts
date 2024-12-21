import { Module } from "@nestjs/common";
import { taskControler } from "./task.cotroller";
import { taskService } from "./task.service";

@Module({
    imports: [],
    controllers: [taskControler],
    providers: [taskService]
})
export class taskModule{
    
}