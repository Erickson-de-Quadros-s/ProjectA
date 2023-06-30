/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsNotEmpty, IsString, IsNumber, MaxLength, MinLength, ArrayMinSize, Min } from "class-validator/";
//import { Type } from "class-transformer";
//import { PermissionDTO } from "./permissions.dto"


export class UserDTO {
    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(2)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly adress: string;

    @IsNumber()
    @Min(1)
    readonly age: number;

    // @IsNotEmpty()
    // @ArrayMinSize(1)
    //@IsNotEmpty({ each: true })
    //@Type(() => PermissionDTO)
    // readonly permission: PermissionDTO;
    //readonly permission: string;

}