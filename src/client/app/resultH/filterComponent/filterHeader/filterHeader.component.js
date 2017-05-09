(function (){

    'use strict';

    angular.module('filterModule')
        .component('headerSearchComponent',
            {
            bindings:{},
            require:
                {
                hotelsResultController : 'hotelsResultController'
                },
                controller: filterHeaderController,
                templateUrl:'resultH/filterComponent/filterHeader/filterHeader.html'
            });

    function filterHeaderController() {}

})();