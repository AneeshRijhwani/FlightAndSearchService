const express=require("express");
const bodyParser = require("body-parser");
const{Port}=require("./config/ServerConfig")
const setupAndStartServer=async ()=> {
    const app= express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    
    app.listen(Port, ()=>{
        console.log("Server Started at ",Port);
        
    });

}
setupAndStartServer();
