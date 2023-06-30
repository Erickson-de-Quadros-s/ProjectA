import { Document } from "mongoose";
import * as mongoose from 'mongoose';

export interface User extends Document {

    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly email: string,
    readonly password: string,
    readonly name: string,
    readonly adress: string,
    readonly age: number,
    readonly permission: string //: object

}