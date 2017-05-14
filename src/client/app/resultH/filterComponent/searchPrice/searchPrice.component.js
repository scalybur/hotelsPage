(function ()
{

    'use strict';

    angular
        .module('filterModule')
        .component('searchPriceComponent',
            {
            controller: filterNightController,
            require:
                {
                hotelsResultController : '^hotelsResultComponent'
                },
            bindings:
                {
                "filters" : '<'
                },
            templateUrl: "resultH/filterComponent/searchPrice/searchPrice.html"
            }).filter('filterNight',function ()
    {
        return function (hotels,price)
        {
            return hotels.filter(function (hotel)
            {
                return (hotel.price >= price.priceMin && hotel.price <= price.priceMax);
            });
        }
    });

    function filterNightController ()
    {
        let self = this;

        this.slider =
            {
            value: 150,
            options:
                {
                minRange: 200,
                noSwitching: true,
                pushRange: true,
                onChange : this.filterNight
                }
            };
    }
})();
