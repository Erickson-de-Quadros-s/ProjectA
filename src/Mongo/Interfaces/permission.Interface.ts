import { Document } from "mongoose";
import * as mongoose from 'mongoose';

export interface Permission extends Document {

    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly typePermission: string
    readonly codePermission: number

}