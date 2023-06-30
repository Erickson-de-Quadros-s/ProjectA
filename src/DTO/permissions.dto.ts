// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsNotEmpty, IsString, IsNumber, } from "class-validator";

export class PermissionDTO {
    @IsNotEmpty()
    @IsString()
    readonly typePermission: string;

    @IsNotEmpty()
    @IsNumber()
    readonly codePermission: number;

}