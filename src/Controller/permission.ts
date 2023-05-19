import { Body, Controller, Delete, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PermissionDTO } from 'src/DTO/permissions.dto';

@Controller('permissions')
export class PermissionController {
    @Get()
    GetAllPermissions(): string {
        return 'Permission test';
    }

    @Post()
    @UsePipes(new ValidationPipe())
    CreateUser(@Body() newPermission: PermissionDTO): PermissionDTO {
        return newPermission;
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
