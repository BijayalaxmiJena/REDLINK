const data_store= require('mysql');
const connection=data_store.createConnection({
    host:'localhost',
    user:'root',
    database:'blog',
    password:''

});
connection.connect((error)=>{
    if(!error){
        console.log("database conncted");
        
    }
    else{
        console.log(`not connected because of ${error}`);
    }
});
module.exports=connection;