/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";

import { UserDTO } from "src/DTO/users.dto";
import { User } from "src/Mongo/Interfaces/user.Interface";

import { UserRepository } from "src/Mongo/Repository/user.repository";

@Injectable()
export class UserService {

    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async CreateUser(newUser: UserDTO): Promise<User> {
        console.log("CreateUser called ok2");
        return await this.userRepository.CreateUser(newUser);
    }

    async getAllUsers(): Promise<User[]> {
        console.log("Get all");
        return await this.userRepository.getAllUsers();
    }

    UpdateUser(): string {
        console.log("Update User");
        return "Update users";
    }
    DeleteUser(): string {
        console.log("Delete User");
        return "Delete users";
    }

}