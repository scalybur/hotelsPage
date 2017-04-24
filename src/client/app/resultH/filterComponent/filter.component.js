/**
 * Created by nahuelcabrera on 24/04/17.
 */
(function ()
{
    angular.module('hotelsResultModule')
        .component('filterComponent',
    {
        bindings
        controller:filterController,
        templateUrl:"./filterComponent.html"

    }).controller('starsController', ['$scope', function($scope) {
        $scope.checkboxModel = {
            value1 : true,
            value2 : 'YES'
        };
    }]);



})();