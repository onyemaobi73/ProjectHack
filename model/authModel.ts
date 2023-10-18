import mongoose, { Schema } from "mongoose"

interface iAuth {
    userName:string
    email:string
    password:string
    verified:Array<{}>
    token:string
}

interface iAuthData extends iAuth, mongoose.Document{}

const authModel = new mongoose.Schema<iAuthData>(
    {
        userName:{
            type:String
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        verified:[{
            type:mongoose.Types.ObjectId,
        }],
        token:{
            type:String,
        },
    },
    {timestamps:true}
)

export default mongoose.model<iAuthData>("auths", authModel)