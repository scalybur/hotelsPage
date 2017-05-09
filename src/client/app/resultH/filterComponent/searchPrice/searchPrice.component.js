(function (){

    'use strict';

    angular
        .module('filterModule')
        .component('searchPriceComponent',{
            controller: filterNightController,
            require: {
                hotelsResultController : 'hotelsResultController'
            },
            bindings:{
                "filters" : '<'
            },
            templateUrl: "resultH/filterComponent/searchPrice/searchPrice.html"
        });

    function filterNightController (){
        let self = this;

        this.filterNight = function (){
            let hotels = self.hotelsResultController.hotels;
            let filters = self.filters;

            self.hotelsResultController.filterOnHotels = hotels.filter(function (hotel){
                if(filters.price.priceMin <= hotel.price && filters.price.priceMax >= hotel.price){
                    return hotel;
                }
            });
        };

        this.slider = {
            value: 150,
            options: {
                minRange: 200,
                noSwitching: true,
                pushRange: true,
                onChange : this.filterNight
            }
        };

    }
})();
