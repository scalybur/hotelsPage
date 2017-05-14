'use strict';

const HotelResultService = require('./resultHotels-services');

class HotelResultServiceController
{
    static getHotels(req, res)
    {
        res.json(HotelResultService.readHotels());
    }
}

module.exports = HotelResultServiceController;
