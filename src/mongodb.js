const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Login")
.then(()=>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection