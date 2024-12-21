import { Controller, Get } from "@nestjs/common";
import { taskService } from "./task.service";

@Controller("task")
export class taskControler
{
    constructor( private taskService : taskService ){}
    @Get("name")
    taskName()
    {
        return this.taskService.taskName()
    }
    @Get("status")
    taskStatus()
    {
        return this.taskStatus()
    }
}