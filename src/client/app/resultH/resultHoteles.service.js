/**
 * Created by Nahuel on 20/4/2017.
 */
( function (){

    'use strict';


    angular
        .module('hotelsResultModule')
        .service('HotelsResultService', HotelService);

    HotelService.$inject = [];


    function HotelService(){
        this.hotels =
            [
                {
                    "_id": {
                        "$oid": "58cb47efe3dcd6c694f67533"
                    },
                    "name": "Hotel Emperador Romano",
                    "descrip": "Solo la habitación",
                    "stars": "4",
                    "price": 4000.5,
                    "images": [
                        "https://media-cdn.tripadvisor.com/media/photo-s/0a/88/7f/f8/exterior-hotel.jpg",
                        "https://a2.cdn-hotels.com/landing/images/2ddeb5d1-8fa5-4d55-b78d-62e5b0d208bf_20130621042935.jpg",
                        "http://www.bellomagazine.com/files/bellomagazine/hotel.jpg"
                    ],
                    "amenities": {
                        "wifi": "wifi",
                        "tel": "telefono",
                        "sp": "Spa"
                    }
                },
                {
                    "_id": {
                        "$oid": "58cb47efe3dcd6c694f67533"
                    },
                    "name": "Hotel Villa 31",
                    "descrip": "Colchon y vino",
                    "stars": "5",
                    "price": 10.0,
                    "images": [
                        "https://media-cdn.tripadvisor.com/media/photo-s/0a/88/7f/f8/exterior-hotel.jpg",
                        "https://a2.cdn-hotels.com/landing/images/2ddeb5d1-8fa5-4d55-b78d-62e5b0d208bf_20130621042935.jpg",
                        "http://www.bellomagazine.com/files/bellomagazine/hotel.jpg"
                    ],
                    "amenities": {
                        "wifi": "wifi",
                        "tel": "telefono",
                        "sp": "Spa"
                    }
                },
                {
                    "_id": {
                        "$oid": "58cb47efe3dcd6c694f67533"
                    },
                    "name": "Hotel New Hamp",
                    "descrip": "Solo la habitación",
                    "stars": "3",
                    "price": 3054.0,
                    "images": [
                        "https://media-cdn.tripadvisor.com/media/photo-s/0a/88/7f/f8/exterior-hotel.jpg",
                        "https://a2.cdn-hotels.com/landing/images/2ddeb5d1-8fa5-4d55-b78d-62e5b0d208bf_20130621042935.jpg",
                        "http://www.bellomagazine.com/files/bellomagazine/hotel.jpg"
                    ],
                    "amenities": {
                        "wifi": "wifi",
                        "tel": "telefono",
                        "sp": "Spa"
                    }
                },
                {
                    "_id": {
                        "$oid": "58cb47efe3dcd6c694f67533"
                    },
                    "name": "Hotel San Bernardo",
                    "descrip": "Solo la habitación",
                    "stars": "4",
                    "price": 2000.5,
                    "images": [
                        "https://media-cdn.tripadvisor.com/media/photo-s/0a/88/7f/f8/exterior-hotel.jpg",
                        "https://a2.cdn-hotels.com/landing/images/2ddeb5d1-8fa5-4d55-b78d-62e5b0d208bf_20130621042935.jpg",
                        "http://www.bellomagazine.com/files/bellomagazine/hotel.jpg"
                    ],
                    "amenities": {
                        "wifi": "wifi",
                        "tel": "telefono",
                        "sp": "Spa"
                    }
                },
                {
                    "_id": {
                        "$oid": "58cb47efe3dcd6c694f67533"
                    },
                    "name": "Hotel HelloWorld",
                    "descrip": "Solo la habitación",
                    "stars": "5",
                    "price": 10000.0,
                    "images": [
                        "https://media-cdn.tripadvisor.com/media/photo-s/0a/88/7f/f8/exterior-hotel.jpg",
                        "https://a2.cdn-hotels.com/landing/images/2ddeb5d1-8fa5-4d55-b78d-62e5b0d208bf_20130621042935.jpg",
                        "http://www.bellomagazine.com/files/bellomagazine/hotel.jpg"
                    ],
                    "amenities": {
                        "wifi": "wifi",
                        "tel": "telefono",
                        "sp": "Spa"
                    }
                },
                {
                    "_id": {
                        "$oid": "58cb47efe3dcd6c694f67533"
                    },
                    "name": "Hotel Javascript",
                    "descrip": "Solo la habitación",
                    "stars": "4",
                    "price": 10000,
                    "images": [
                        "https://media-cdn.tripadvisor.com/media/photo-s/0a/88/7f/f8/exterior-hotel.jpg",
                        "https://a2.cdn-hotels.com/landing/images/2ddeb5d1-8fa5-4d55-b78d-62e5b0d208bf_20130621042935.jpg",
                        "http://www.bellomagazine.com/files/bellomagazine/hotel.jpg"
                    ],
                    "amenities": {
                        "wifi": "wifi",
                        "tel": "telefono",
                        "sp": "Spa"
                    }
                },



            ];

        this.getHotels = function () {
            return this.hotels;
        }
    }
})();
