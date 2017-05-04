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

        this.$onInit = function () {
            hotelsResultService.getHotels().then(function (hotels) {
                self.hotels = hotels;
            });
            this.filters = {
                "name" : "",
                "targetName" : "",
                "price":{
                    "priceMin" : 200,
                    "priceMax": 2500,
                },
                "stars":{
                    "five": true,
                    "four": false,
                    "three" : false,
                    "two" : false,
                    "one" : false
                },
            }
        };

        this.getHotels = function () {
            return self.hotels;
        };

        this.resetFilters = function (){
            hotelsResultService.getHotels().then(function (hotels) {
                self.hotels = hotels;
            });
        }
    }

})();
