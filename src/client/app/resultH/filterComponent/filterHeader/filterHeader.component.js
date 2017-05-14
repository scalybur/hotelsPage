(function (){

    'use strict';

    angular.module('filterModule')
        .component('headerSearchComponent',
            {
            bindings:{
                "filters":'<'
            },
                require:
                    {
                        hotelsResultController : "^hotelsResultComponent"
                    },
                controller: filterHeaderController,
                templateUrl:'resultH/filterComponent/filterHeader/filterHeader.html'
            });

    function filterHeaderController() {
        var self = this;
        this.$onInit = function () {}
    }

})();