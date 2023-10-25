import express from 'express';

const app = express();
import bp from 'body-parser';
import mongoose, { Mongoose } from 'mongoose';
import data from "./db.js"
app.use(bp.urlencoded({extended:true}));
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



// *****************************  mongoconnect*********************************



 
                                                                                                                                    
const url = "mongodb+srv://sricharan7382:sridhar7382@trails.5ugsm3v.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>{
    console.log("db conn successful");
}).catch((err)=>{
    console.log(err.message);
}
)

 

// *****************************  mongoconnect*********************************

app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("running successfully on port 3000")
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
    
    const emai=req.body.email;
    const password = req.body.password;

   
        data.findOne({email:emai}).then((content)=>{
            if(content!=null){
                if(content.password==password){
                    res.send(alert("hello"));
                }
                else{
                    console.log("get lost");
                }
            }
            else{
                console.log("user not found");
            }
        });
       
       
    
   

});




app.post("/register",(req,res)=>{
    const log={
        email:req.body.email,
        password:req.body.password
    }
    const dat=data.create(log);
   

});

