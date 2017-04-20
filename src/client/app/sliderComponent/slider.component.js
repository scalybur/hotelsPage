/**
 * Created by Nahuel on 19/4/2017.
 */
(function (){
    'use strict';
    angular
        .module('slider')
        .component('slider', {
            controller:sliderController,
            bindings: {
                items: '<'
            },
            templateUrl: "slider/slider.html"
        });
    function sliderController(){
        this.currentIndex = 0;
        this.prev = function(){
            if(this.currentIndex === 0)
                return this.currentIndex = this.items.length -1;
            this.currentIndex--;
        }
        this.next = function(){
            if(this.currentIndex === this.items.length -1)
                return this.currentIndex = 0;
            this.currentIndex++;
            console.log(this.currentIndex);
        }
    }
})();