import { Body, Controller, Delete, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDTO } from 'src/DTO/users.dto';

@Controller('user')
export class UserController {
    @Get()
    GetAllUsers(): string {
        return 'users test';
    }

    @Post()
    @UsePipes(new ValidationPipe())
    CreateUser(@Body() newUser: UserDTO): UserDTO {
        return newUser;
    }

    @Patch()
    UpdateUser(): string {
        return 'users Update';
    }

    @Delete()
    DeleteUser(): string {
        return 'users Delete';
    }
}
