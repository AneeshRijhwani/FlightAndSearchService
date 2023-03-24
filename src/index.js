const express=require("express");
const bodyParser = require("body-parser");

const{Port}=require("./config/ServerConfig");
const CityRepository=require("./repository/city-repository");
const setupAndStartServer=async ()=> {
    const app= express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    
    app.listen(Port, async()=>{
        console.log("Server Started at ",Port);
        const repo = new CityRepository();
        repo.createCity({name:"New delhi"});
    });

}
setupAndStartServer();
