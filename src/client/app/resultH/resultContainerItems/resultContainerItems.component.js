/**
 * Created by Nahuel on 21/4/2017.
 */
(function (){

    'use strict';

    angular
        .module('hotelsResultModule')
        .component('resultContainerItemsComponent', {
            controller: itemListController,
            bindings: {
                hotels: '<',
                filters: '<'
            },
            templateUrl: "resultH/resultContainerItems/itemList.html"
        });
        function itemListController (){
            let self = this;
            let slicehotel = [];
            this.loadMore = function () {}
        }
})();
