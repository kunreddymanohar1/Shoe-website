const express = require('express');
 const mongoose = require('mongoose');
 const UserSchema  = require('./model');
 const cors  = require('cors');
 const app = express();

app.use(express.json());

app.use(cors({
   origin:'http://localhost:3000',
   methods:'POST',
   credentials:true
}));

  
  mongoose.connect("mongodb+srv://Manohar123:Manohar123@cluster0.rcyz87n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").
  then(()=> console.log('DB connected..')).catch
  (err => console.log(err));

 app.post('/Signup',async(req,res)=>{
   const{name,email,username,password} = req.body;
   
   try{
      const newData = new UserSchema({name,email,username,password});
      await newData.save();
      return res.send(await UserSchema.find())
   }
   catch(err){
      console.log(err);
   }
    
   
 })
 app.post('/Login',async(req,res)=>{
   const{username,password} = req.body;
   
   
       UserSchema.findOne({username :username}).
       then(user =>{
         if(user){
            if(user.password === password ){
               res.json("Success")
            } else{
               res.json("the password is incorrect")
            }
         }
       })
     
   
    
   
 })


//  app.get('/Register',async(req,res)=>{
//    try{
//     const allData = await UserSchema.find();
//     return res.json(allData);
//    }
//    catch(err){
//       console.log(err.message);
//    }

//  })

 



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server running on port ${PORT}...`));