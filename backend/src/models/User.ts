import mongoose, { Schema, type Document } from "mongoose";

export interface IUser extends Document{
    clerkId: string,
    name: string,
    email:string,
    username:string,
    avatar?: string,
    createdAt: Date,
    updtedAt: Date
}

const UserSchema = new Schema<IUser>({
    clerkId:{
        type:String,
        required: true,
        unique:true,

    },
    name:{
        type:String,
        required: true,
        trum: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    avatar:{
        type:String,
        default:""
    }
},{
    timestamps:true
})



export const User = mongoose.model("User", UserSchema) 
