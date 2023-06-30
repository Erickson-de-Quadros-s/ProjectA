/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { PermissionDTO } from 'src/DTO/permissions.dto';
import { PermissionService } from 'src/services/permission.service';

@Controller('permission')
export class PermissionController {

    constructor(private readonly permissionService: PermissionService) { }

    @Get()
    async GetAllPermissions(): Promise<PermissionDTO[]> {

        return this.permissionService.GetAllPermissions();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async CreatePermission(@Body() newPermission: PermissionDTO): Promise<PermissionDTO> {
        return await this.permissionService.CreatePermission(newPermission);
    }

    @Patch()
    UpdatePermission(): string {
        return 'Permission Update';
    }

    @Delete()
    DeletePermission(): string {
        return 'Permission Delete';
    }
}