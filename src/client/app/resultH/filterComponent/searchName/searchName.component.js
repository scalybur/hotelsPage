(function (){
    'use strict';

    angular
        .module('filterModule')
        .component('searchNameComponent', {
            controller: filterHotelController,
            require: {
                hotelsResultController : '^hotelsRoot'
            },
            bindings:{
                "filters" : '<'
            },
            templateUrl: "resultH/filterComponent/searchName/searchName.html"
        });

    function filterHotelController(){
        var self = this;

        this.filterHotel = function () {

            var hotels = this.hotelsResultController.hotels;
            var hotelsFiltred = hotels.filter(function (hotel) {
                return hotel.name.toLowerCase().indexOf(self.filters.targetName) != -1;
            });
            this.hotelsResultController.hotels = hotelsFiltred;
        };
    }
})();
