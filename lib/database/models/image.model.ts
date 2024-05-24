import { Schema, model, models } from "mongoose";

export interface Image extends Document{
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?:Object; // Use Record to define a flexible object
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id:string;
        firstName:string;
        LastName:string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema({
    title:{type:String,required:true},
    transformationType:{type:String,required:true},
    publicId:{type:String,required:true},
    SecureUrl:{type:URL,required:true},
    width:{type:Number},
    height:{type:Number},
    Config:{type:Object},
    transformationUrl:{type:URL},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt:{ type:Date, default:Date.now},
    upadatedAt:{type:Date, default:Date.now}
})

const Image = models?.Image || model('Image',ImageSchema)

export default Image;