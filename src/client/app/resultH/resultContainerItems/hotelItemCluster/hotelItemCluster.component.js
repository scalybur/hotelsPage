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
                sp:   "class amt-spa",
                tel:  "class amt-phone"
            }
            return icons[key];
        }
    }

})();
