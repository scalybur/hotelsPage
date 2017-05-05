/**
 * Created by Nahuel on 21/4/2017.
 */
(function (){

    'use strict';

    angular
        .module('hotelsResultModule')
        .component('resultContainerItemsComponent', {
            bindings: {
                hotels: '<'
            },
            templateUrl: "resultH/resultContainerItems/itemList.html"
        });
})();
