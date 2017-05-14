(function () {
    'use strict';

    angular
        .module('hotelsResultModule')
        .component('hotelsResultComponent', {
            bindings: {},
            controller: hotelsResultController,
            templateUrl: "resultH/resultHoteles.html"
        });

    hotelsResultController.$inject = ['hotelsService'];

    function hotelsResultController(hotelsService) {
        const self = this;

        self.filterOnHotels = [];
        self.loading = true;
        this.$onInit = function ()
        {

            hotelsService.getHotels().then(function (hotels)
            {
                self.hotels = hotels;
                self.filterOnHotels = hotels;
                self.loading = false;
            });
            this.filters = {
                "name" : "",
                "targetName" : "",
                "price":{
                    "priceMin" : 0,
                    "priceMax": 17352,
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
