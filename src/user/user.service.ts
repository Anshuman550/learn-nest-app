import { Injectable } from "@nestjs/common";

@Injectable()
export class user{

    userName()
    {
        return "anshuman"
    }
    userOffice()
    {
        console.log("tesing and testing")
        return "Tata"
        return "Apple"
    }
}