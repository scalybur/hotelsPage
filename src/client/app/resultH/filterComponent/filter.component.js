(function ()
{
    'use strict';

    angular
        .module('filterModule')
        .component('filterComponent',
            {
            controller : filtersController,
            bindings:
                {
                "filters" :'<',
                },
            templateUrl: 'resultH/filterComponent/filterComponent.html'
            });

    function filtersController (){}
})();
