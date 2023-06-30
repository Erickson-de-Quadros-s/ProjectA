/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { UserDTO } from "src/DTO/users.dto";
import { User } from "../Interfaces/user.Interface";

@Injectable()
export class UserRepository {

    constructor(
        @InjectModel('user')
        private readonly userModel: Model<User>
    ) { }


    async CreateUser(newUser: UserDTO): Promise<User> {

        const savedUser = new this.userModel(newUser);

        return await savedUser.save()
    }

    async getAllUsers(): Promise<User[]> {

        return await this.userModel.find({}, { __v: false }).sort({ name: +1 }).exec();
    }

}