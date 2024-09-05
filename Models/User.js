const { required } = require('joi');
const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const userSchma=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});


const UserModel=mongoose.model('users',userSchma);
module.exports=UserModel;