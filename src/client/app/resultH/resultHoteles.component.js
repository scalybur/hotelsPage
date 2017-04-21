/**
 * Created by nahuelcabrera on 10/04/17.
 */
(function (){
    'use strict';

    angular
        .module('hotelsResultModule')
        .component('hotelsResultComponent', {
            controller: hotelsResultController,
            templateUrl: "hotel-result/hotels-root.html"
        });


    hotelsResultController.$inject = ['HotelService'];


    function hotelsResultController(HotelService) {
        var _self = this;
        this.getho = function (){
            return HotelService.getHotels();
        };
    }

})();
