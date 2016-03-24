/* global frontendApplication */

// create the controller and inject Angular's $scope
frontendApplication.controller('kioskController', function($rootScope, $scope, $routeParams, $http) {
    $scope.currentIndex = 1;
    $scope.bannerImages = [{ src: '/frontend/templates/images/slider/slider3.jpg' }, { src: '/frontend/templates/images/slider/slider2.jpg'}];
    $scope.quickViewVisable = false;
    $scope.quickViewProduct = {};
    $scope.getKioskInformation = function(){
        var commandOption = {
            'command':'get-information',
            'kiosk_friendly':$routeParams.kiosk
        };
        $http.post('kiosk', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            var responseData = response.data;
            // console.log(responseData);
            var kioskSlide = responseData.kiosk_slide;
            // console.log(kioskSlide);
            $scope.bannerImages = kioskSlide;
            $scope.currentIndex = 0;
            
            var kioskLogo = responseData.kiosk_logo;
            $rootScope.kioskLogo = kioskLogo; // /frontend/templates/images/logo.png
            var kioskName = responseData.kiosk_name;
            $rootScope.kioskName = kioskName;
        });
    };
    $scope.getProductList = function(){
        var commandOption = {
            'command':'get-list',
            'kiosk_friendly':$routeParams.kiosk
        };
        $http.post('product', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            var responseData = response.data;
            console.log(responseData);
            $scope.productList = responseData;
        });
    };
    $scope.quickView = function(product){
        console.log(product);
    };
    $scope.getBannerSlide = function(){
        var commandOption = {
            'command':'get-slide',
            'kiosk_friendly':$routeParams.kiosk
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
    
    $scope.getKioskInformation();
    $scope.getProductList();
});