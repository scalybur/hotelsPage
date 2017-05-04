(function () {
    'use strict';

    angular
        .module('filterModule')
        .component('filterRootComponent', {
            controller : filtersController,
            bindings: {
                "filters" :'<',
            },
            templateUrl: 'resultH/filterComponent/filterComponent.html'
        });

    function filtersController (){}
})();
