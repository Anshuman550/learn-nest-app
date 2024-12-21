import { Injectable } from "@nestjs/common";

@Injectable()
export class user{

    userName()
    {
        return "anshuman"
    }
    userOffice()
    {
        return "Apple"
    }
}