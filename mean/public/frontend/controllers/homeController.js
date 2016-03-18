/* global frontendApplication */

// create the controller and inject Angular's $scope
frontendApplication.controller('homeController', function($scope, $routeParams, $http) {
    // create a message to display in our view
    $scope.message = $routeParams.kiosk;
    $scope.currentIndex = 1;
    $scope.bannerImages = [{
        src: '/frontend/templates/images/slider/slider0.jpg',
        title: 'Pic 1'
    },{
        src: '/frontend/templates/images/slider/slider0.jpg',
        title: 'Pic 1'
    }];
    $scope.getBannerSlide = function(){
        var commandOption = {
            'command':'get-slide',
            'kiosk_friendly':''
        };
        $http.post('slide', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            if(typeof response.data === 'undefined'){ return false; }
            if(typeof response.data.slide_list === 'object'){ 
                if(response.data.slide_list !== 'null'){
                    $scope.bannerImages = response.data.slide_list;
                    $scope.currentIndex = 0;
                }
            }
        });
    };
    
    //$scope.getBannerSlide();
    
    $scope.getMenu = function(){
        var commandOption = {
            'command':'get-menu'
        };
        $http.post('menu', commandOption, {}).then(function(response){
            console.log(response);
        },
        function(){
            
        });
    };
    $scope.loadAdmin = function(){
        window.location = '/admin';
    };
});