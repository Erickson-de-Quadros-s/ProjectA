/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { UserDTO } from 'src/DTO/users.dto';
import { User } from 'src/Mongo/Interfaces/user.Interface';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }
    @Get()
    async GetAllUsers(): Promise<User[]> {

        return this.userService.getAllUsers();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createUser(@Body() newUser: UserDTO): Promise<User> {
        return await this.userService.CreateUser(newUser)
    }

    @Patch()
    updateUser(): string {
        return 'users Update';
    }

    @Delete()
    deleteUser(): string {
        return 'users Delete';
    }
}
