
const {City} =require('../models/index')

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch(error){
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
    
    async deleteCity(cityid){
        try{
            await City.destroy({
                where: {
                    id:cityid}
                });
                return true;
            } 
        catch(error){
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
    async updateCity(cityid,data){
        try {
            // Below approach will also work but not return updated object
            // if we are using postgrese then "returning:true" can be used , else not 
            // const city = await City.update(data,{
            //     where:{
            //         id:cityid
            //     },
            //     plain :true

            // });

            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityid);
            city.name=data.name;
            await city.save();
            return city;
        }
        catch (error) {
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }


    }
    async getcity(cityid){
        try {
            const city = await City.findByPk(cityid);
            return city;
        }
        catch (error) {
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
}
module.exports=CityRepository;