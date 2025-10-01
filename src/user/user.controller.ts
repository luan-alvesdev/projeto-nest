import { Controller, Post } from "@nestjs/common";
import { create } from "domain";

@Controller('users')
export class UserController(){
    
    @Post()
    async create(){
        return {}
    }
}