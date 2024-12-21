import { Injectable } from "@nestjs/common";

@Injectable()
export class taskService{
    taskName()
    {
        return "dummy task"
    }
    taskStatus()
    {
        return "pending"
    }
}