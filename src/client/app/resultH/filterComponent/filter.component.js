(function () {
    'use strict';

    angular
        .module('hotelsResultModule')
        .component('filterRootComponent', {
            controller : filtersController,
            bindings: {
                "filters" :'<',
            },
            templateUrl: 'resultH/filterComponent/filterComponent.html'
        });

    function filtersController (){}
})();
