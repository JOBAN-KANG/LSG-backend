const express = require('express');
const app= express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb= require('mongodb');
const MongoClient= require('mongodb').MongoClient;
app.use(cors());
app.use(bodyParser.json());

const connectionString="mongodb+srv://lsgstudio:lsgstudio@cluster0.tqwyrbe.mongodb.net/test";
var  userlogin ,login,  signup;
MongoClient.connect(connectionString,function(err,succ){
    if (err) throw err;
    console.log("DB connected");
    var db= succ.db('music')
    login=db.collection('login')
    signup=db.collection('signup')
    userlogin=db.collection('userlogin')
})


app.post('/signup' , (req,res)=>{
    console.log(req.body);
      signup.insertOne(req.body).then((succ) =>{
            res.send(succ);
         }).catch((err)=> {
            res.send(err);
         })
   
    })
   
    app.get('/fetch' , (req,res) => {
        // res.send('hello world');
        login.find({
        }).toArray().then((succ) => {
           res.send(succ);
        }).catch((err)=> {
           res.send(err);
        })
     
      })
      
    
    app.post('/checklogin' , (req,res)=>{
      // res.send('world');
      console.log(req.body);
    signup.findOne({
      Name:req.body.Name,
      Password:req.body.Password,
    }).then((succ) =>{
            res.send(succ);
         }).catch((err)=> {
            res.send(err);
         })
   
    })
app.listen(100,(req,res)=>{
    console.log('server started');
 })
