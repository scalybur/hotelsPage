(function (){
    'use strict';

    angular
        .module('filterModule')
        .component('searchPriceComponent', {
            controller: filterNightController,
            bindings:{
                "filters": '<'
            },
            templateUrl: "resultH/filterComponent/searchPrice/searchPrice.html"
        });

    function filterNightController(){

        var self = this;


    }
})();
