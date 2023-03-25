const { response } = require('express');
const {CityService} = require('../services/index');
const cityService = new CityService();

const create = async(req,res)=>{
    try {
        const city= await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:"Not able to create a City",
            err:error
        })
    }
    
}
// delete -> /city/:id in  request url
const destroy =async (req,res)=>{
    try {
        const response= await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:e=response,
            success:true,
            message:"Successfully destroyed the city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:"Not able to destroy the City",
            err:error
        })
    }

}
const get =async (req,res)=>{
    try {
        const city= await cityService.getCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully fetched the city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:"Not able to fetch the City",
            err:error
        })
    }

}
const update =async (req,res)=>{
    
    
    try {
        const city= await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully updated the city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:"Not able to update the City",
            err:error
        })
    }
}
const getAll= async(req,res)=>{
    try {
        const cities= await cityService.getAllCities();
        return res.status(201).json({
            data:cities,
            success:true,
            message:"Successfully fetched all the cities",
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:"Not able to fetch the Cities",
            err:error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}