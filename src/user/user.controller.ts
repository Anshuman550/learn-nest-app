import { Controller, Get } from "@nestjs/common";
import { user } from "./user.service";

@Controller("user")
export class userConstroller
{
    constructor( public userService: user ){}
    @Get("name")
    name()
    {
        return this.userService.userName()
    }
    @Get("address")
    address()
    {
        
        return this.userService.userOffice()
    }
}