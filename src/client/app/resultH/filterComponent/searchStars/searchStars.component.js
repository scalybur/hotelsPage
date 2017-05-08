(function (){
    'use strict';

    angular
        .module('filterModule')
        .component('searchStarsComponent',{
            controller: filterStarController,
            require: {
                hotelsResultController : 'hotelsResultController'
            },
            bindings:{
                "filters" : '<'
            },
            templateUrl: "resultH/filterComponent/searchStars/searchStars.html"
        });

    function filterStarController (){


        var self = this;

        this.filterStar = function (){

            var five =  document.getElementById('allstars').value;
            var four =  document.getElementById('4stars').value;
            var three = document.getElementById('3stars').value;
            var two =   document.getElementById('2stars').value;
            var one =   document.getElementById('1stars').value;

            let hotels = this.hotelsResultController.hotels;

            for(var i = 1; i<=hotels.length ; i++){
                if(five && self.filters.stars.five){
                    return hotels.stars == 5;
                }
                else if(four && self.filters.stars.four){
                    return hotels.stars == 4;
                }
                else if(three && self.filters.stars.three){
                    return hotels.stars == 3;
                }
                else if(two && self.filters.stars.two){
                    return hotels.star == 2;
                }
                else if(one && self.filters.stars.one){
                    return hotels.star = 1
                }
            }
        }
    }
})();
