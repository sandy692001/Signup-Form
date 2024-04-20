const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const templatepath=path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatepath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.post("/signup",async(req,res)=>{

const data={
    fname:req.body.fname,
    lname:req.body.lname,
    username:req.body.username,
    number:req.body.number,
    date:req.body.date,
    gender:req.body.gender,
    password:req.body.password
}

await collection.insertMany([data])

res.render("home")



})

app.post("/login",async(req,res)=>{

   
    try{
        const check=await collection.findOne({username:req.body.username})

        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("wrong password")
        }

        res.render("home")

    }
    catch{

        res.send("wrong details")
    }
    
    
    
    
    })



app.listen(4000,() =>{
    console.log("port connected 4000");
})