(function (){
    'use strict';

    angular
        .module('hotelsResultModule')
        .component('itemComponent', {
            controller:HotelItemController,
            bindings: {
                item: '<'
            },
            templateUrl: "resultH/resultContainerItems/hotelItemCluster/hotelItemCluster.html"
        });

    function HotelItemController(){

        this.stars = function(){
            return Array(parseInt(this.item.stars));
        }

        this.getIcon = function(key){

            var icons = {
                wifi: "class amt-internet",
                sp: "class amt-spa",
                tel: "class amt-phone",
                par: "class amt-parking",
                pool: "class amt-pool",
                pay: "class amt-payment-methods",
                cof: "class amt-coffee-shop",
                children: "class amt-children-club",
                condition: "class amt-air-condition",
                resto: "class amt-restaurant",
                pets: "class amt-pets",
                water: "class amt-waterparkaccess",
                bar: "class amt-bar",
                laundry: "amt-laundry-facilities",
                fit: "class amt-fitness-center"
            }
            return icons[key];
        }
    }

})();
