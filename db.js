import mongoose from 'mongoose';
const { Schema } = mongoose;

const logschema=new Schema(
    {
        email:{
            type:String,

        },
        password:{
            type:String 

        }
    }
);  
const data = mongoose.model('Blog',logschema);

export default data;