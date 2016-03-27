/* global frontendApplication */

// create the controller and inject Angular's $scope
frontendApplication.controller('kioskController', function($rootScope, $scope, $routeParams, $http, AUTH_EVENTS, USER_ROLES, AuthService) {
    // authentication
    $scope.currentUser = 'null';
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;
    
    $scope.setCurrentUser = function (user){ $scope.currentUser = user; };
    
    $scope.currentIndex = 1;
    $scope.bannerImages = [{ src: '/frontend/templates/assets/images/slide-1.jpg' }, 
        { src: 'frontend/templates/assets/images/slide-2.jpg'}, 
        { src: 'frontend/templates/assets/images/slide-3.jpg'}
    ];
    $scope.quickViewVisable = false;
    var productList4 = [];
    var productList102 = [];
    var productList1041 = [];
    var productList1042 = [];
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
            var kioskSlogan = responseData.kiosk_slogan;
            $rootScope.kioskSlogan = kioskSlogan;
            var kioskPhone = '<i class="fa fa-phone"></i>' +responseData.kiosk_phone;
            $rootScope.kioskPhone = kioskPhone;
            var kioskEmail = '<i class="fa fa-envelope"></i> '+responseData.kiosk_email;
            $rootScope.kioskEmail = kioskEmail;
            
            $rootScope.page.setTitle(kioskName);
            $rootScope.page.setKioskName(kioskName);
            $rootScope.page.setKioskSlogan(kioskSlogan);
            $rootScope.page.setKioskPhone(kioskPhone);
            $rootScope.page.setKioskEmail(kioskEmail);
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
            for(var i=0; i<responseData.length; i++){
                if(i < 4){
                    productList4.push(responseData[i]);
                } else if(i < 6){
                    productList102.push(responseData[i]);
                }  else if(i < 10){
                    productList1041.push(responseData[i]);
                } else{
                    productList1042.push(responseData[i]);
                }
            }
            $scope.productList4 = productList4;
            $scope.productList102 = productList102;
            $scope.productList1041 = productList1041;
            $scope.productList1042 = productList1042;
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
                    //$scope.bannerImages = response.data.slide_list;
                    $scope.currentIndex = 0;
                }
            }
        });
    };
    
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            //console.log(user);
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };
    
    //$scope.login();
    $scope.getKioskInformation();
    $scope.getProductList();
});