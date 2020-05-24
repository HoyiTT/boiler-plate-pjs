const mongoose= require('mongoose');

const userSchema =mongoose.Schema({
    name:{
        type:String,
        maxLength:50
    },
    email:{
        type: String,
        trim:true,
        // pjs 9177@nave.com -> pjs9177@naver.com(공백을 없애주는 역활)
        unique:1
    },
    password:{
        type: String,
        minLength:5
    },
    lastname:{
        type: String,
        masLength:50
    },
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type: String
    },
    tokenExp:{
        type: Number
    }
})

const User =mongoose.model('User',userSchema)

module.exports={User}
