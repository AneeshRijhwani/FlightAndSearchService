const{CityRepository}=require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository=new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }
        catch(error){
            console.log("Somthing went wrong in the service layer");
            throw{error};
        }
    }
    async deleteCity(cityid){
        try{
            const response = await this.cityRepository.deleteCity(cityid);
            return response;
        }
        catch(error){
            console.log("Somthing went wrong in the service layer");
            throw{error};
        }
    }
    async updateCity(cityid,data){
        try{
            const city = await this.cityRepository.updateCity(cityid,data);
            return city;
        }
        catch(error){
            console.log("Somthing went wrong in the service layer");
            throw{error};
        }
    }
    async getCity(cityid){
        try{
            const city = await this.cityRepository.getcity(cityid);
            return city;
        }
        catch(error){
            console.log("Somthing went wrong in the service layer");
            throw{error};
        }
    }
}
module.exports=CityService;
