import { Schema} from 'mongoose';
import { PermissionSchema } from './permission.schema';


export const UserSchema = new Schema(
{

    email: String,
    password: String,
    name:  String,
    adress: String,
    age: String,
    permission: [PermissionSchema],


});