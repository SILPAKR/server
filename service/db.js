//import mongoose

const mongoose=require('mongoose')

//connection string to connect

mongoose.connect('mongodb://localhost:27017/bankserver',{useNewUrlParser:true})

//define collection model

const User=mongoose.model('User',{
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transactions:[]
})
//export model
module.exports={
    User
}