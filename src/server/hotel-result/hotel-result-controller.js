'use strict';

const HotelResultService = require('./hotel-result-services');

class HotelResultServiceController{
    static getHotels(req, res){
        res.json(HotelResultService.readHotels());
    }
}

module.exports = HotelResultServiceController;
