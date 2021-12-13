const express= require('express');
const app=express();
const port= 8998;

app.use(express.json());

const route=require('./router/router');
app.use('/',route)


app.listen(port,function(req,res){
    console.log(`the server running on port ${port}`)
})