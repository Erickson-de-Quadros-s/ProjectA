/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from "@nestjs/common";

import { PermissionDTO } from "src/DTO/permissions.dto";
import { PermissionRepository } from "src/Mongo/Repository/permission.repository";

@Injectable()
export class PermissionService {
    constructor(
        private readonly permissionRepository: PermissionRepository
    ) { }

    async CreatePermission(newPermission: PermissionDTO): Promise<PermissionDTO> {
        console.log("Permission called");
        return await this.permissionRepository.CreatePermission(newPermission);
    }
    async GetAllPermissions(): Promise<PermissionDTO[]> {
        console.log("Get all Permissions called");
        const allPermissions = await this.permissionRepository.getAllPermission();
        if (allPermissions.length)
            throw new BadRequestException('There are no permissions registred yet');

        return allPermissions;
    }
}