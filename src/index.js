const express=require("express");
const{Port}=require("./config/ServerConfig")
const setupAndStartServer=async ()=> {
    const app= express();
    
    app.listen(Port, ()=>{
        console.log("Server Started at ",Port);
        
    });

}
setupAndStartServer();
