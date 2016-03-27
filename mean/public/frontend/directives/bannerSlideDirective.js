/* global frontendApplication */

frontendApplication.directive("bannerSlide", function($timeout) {
    return {
        link: function(scope, element, attrs){
            scope.next = function() { scope.currentIndex < scope.bannerImages.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0; };
            scope.prev = function() { scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.bannerImages.length - 1; };
            scope.$watch('currentIndex', function() {
                scope.bannerImages.forEach(function(image) { image.visible = false; image.class = null; });
                scope.bannerImages[scope.currentIndex].visible = true; // make the current image visible
                scope.bannerImages[scope.currentIndex].class = "cycle-pager-active"; // make the current image visible
            });
            var timer;
            var sliderFunc = function() { timer = $timeout(function() { scope.next(); timer = $timeout(sliderFunc, 5000); }, 5000); };
            scope.$on('$destroy', function() { $timeout.cancel(timer); });
            scope.prevnext = function(index) { scope.currentIndex = index -1; scope.next(); $timeout.cancel(timer); sliderFunc(); };
            sliderFunc();
        },
        templateUrl: 'frontend/templates/pages/slide/slide.html'
    };
});