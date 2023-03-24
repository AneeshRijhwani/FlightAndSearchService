const{CityRepository}=require("../repository/index")

class CityService{
    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.CityRepository.create(data);
            return city;
        }
        catch(error){
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
    async deleteCity(cityid){
        try{
            const response = await this.CityRepository.deleteCity(cityid);
            return response;
        }
        catch(error){
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
    async updateCity(cityid,data){
        try{
            const city = await this.CityRepository.updateCity(cityid,data);
            return city;
        }
        catch(error){
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
    async getCity(cityid){
        try{
            const city = await this.CityRepository.getcity(cityid);
            return city;
        }
        catch(error){
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
}
module.exports=CityService;
