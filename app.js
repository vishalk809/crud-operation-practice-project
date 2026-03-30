const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req, res) =>{
res.send("hey");
})

app.get('/create',async (req,res) => {
    
  let createduser = await userModel.create({
        name: "vikash kumar",
        email: "vikashkum95082@gmail.com",
        username: "vikash kum"
    
    });

res.send(createduser);
});

app.get('/update',async (req,res) => {

  let updateduser = await userModel.findOneAndUpdate({username: "vishalkumar"},{name: "rahulkumaryadav"},{new: true})

  res.send(updateduser);
});

app.get("/read",async (req,res) =>{
    let users = await userModel.find({username: vikashkum});

    res.send(users);
});

app.get("/delete",async (req,res) =>{
    let users = await userModel.findOneAndDelete({username: "vikash kum"});

    res.send(users);
});

 app.listen(3000, () => {
    console.log("server is running on port 3000")
});
