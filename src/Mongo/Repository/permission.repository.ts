/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { PermissionDTO } from "src/DTO/permissions.dto";
import { Permission } from "../Interfaces/permission.Interface";

@Injectable()
export class PermissionRepository {

    constructor(
        @InjectModel('permission')
        private readonly permissionModel: Model<Permission>
    ) { }


    async CreatePermission(newPermission: PermissionDTO): Promise<PermissionDTO> {

        const savedPermission = new this.permissionModel(newPermission);

        return await savedPermission.save();
    }

    async getAllPermission(): Promise<PermissionDTO[]> {

        return await this.permissionModel.find({}, { __v: false }).sort({ name: +1 }).exec();
    }

}