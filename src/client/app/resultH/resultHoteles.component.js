(function () {
    'use strict';

    angular
        .module('hotelsResultModule')
        .component('hotelsResultComponent', {
            bindings: {},
            controller: hotelsResultController,
            templateUrl: "resultH/resultHoteles.html"
        });

    hotelsResultController.$inject = ['hotelsResultService'];

    function hotelsResultController(hotelsResultService) {
        const self = this;

        self.filterOnHotels = [];

        this.$onInit = function () {
            hotelsService.getHotels().then(function (hotels) {
                self.hotels = hotels;
                self.filterOnHotels = hotels;
            });
            this.filters = {
                "name" : "",
                "targetName" : "",
                "price":{
                    "priceMin" : 0,
                    "priceMax": 5000,
                },
                "stars":{
                    "all": true,
                    "five": false,
                    "four": false,
                    "three" : false,
                    "two" : false,
                    "one" : false
                },
            }
        };

        this.getHotels = function () {
            return self.filterOnHotels;
        };
    }

})();
