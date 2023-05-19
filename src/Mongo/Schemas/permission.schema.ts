import { Schema} from 'mongoose';

export const PermissionSchema = new Schema(
{

    typePermission: String,
    codePermission: Number

});