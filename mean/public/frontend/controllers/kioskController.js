/* global frontendApplication */

// create the controller and inject Angular's $scope
frontendApplication.controller('kioskController', function($rootScope, $scope, $routeParams, $http, AUTH_EVENTS, USER_ROLES, AuthService) {
    // authentication
    $scope.currentUser = 'null';
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;
    
    $scope.setCurrentUser = function (user){ $scope.currentUser = user; };
    
    $scope.currentIndex = 1;
    $scope.kioskFriendly = '';
    $scope.bannerImages = [{ src: '/frontend/templates/assets/images/slide-1.jpg' }, 
        { src: '/frontend/templates/assets/images/slide-2.jpg'}, 
        { src: '/frontend/templates/assets/images/slide-3.jpg'}
    ];
    $scope.quickViewVisable = false;
    $scope.tabShow = {description:1, reviews:0, video:0};
    $scope.tabShowProductSlide = {};
    var kioskFriendly = $routeParams.kiosk;
    var productFriendly = $routeParams.product;
    var productList4 = [];
    var productList102 = [];
    var productList1041 = [];
    var productList1042 = [];
    $scope.quickViewProduct = {};
    $scope.getKioskInformation = function(){
        var commandOption = {
            'command':'get-information',
            'kiosk_friendly':kioskFriendly
        };
        $http.post('kiosk', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            var responseData = response.data;
            // console.log(responseData);
            var kioskSlide = responseData.kiosk_slide;
            // console.log(kioskSlide);
            $scope.bannerImages = kioskSlide;
            $scope.currentIndex = 0;
            
            $scope.kioskFriendly = responseData.kiosk_friendly;
            $rootScope.kioskFriendly = kioskFriendly;
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
            'kiosk_friendly':kioskFriendly
        };
        $http.post('product', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            var responseData = response.data;
            //console.log(responseData);
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
    $scope.getProductDetail = function(){
        var commandOption = {
            command:'get-detail',
            kiosk_friendly:kioskFriendly,
            product_friendly:productFriendly
        };
        $http.post('product', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            var responseData = response.data;
            //console.log(responseData);
            $scope.productDetail = responseData;
            $rootScope.page.setTitle(responseData.product_name);
            $scope.productCategoryDetail = responseData.product_category;
            var tabShowProductSlide = {};
            var productSlide = responseData.product_slide;
            for(var itemSlide in productSlide){
                itemSlide = parseInt(itemSlide);
                var itemSlideValue = itemSlide === 0 ? 1 : 0;
                tabShowProductSlide[itemSlide] = itemSlideValue;
            }
            $scope.tabShowProductSlide = tabShowProductSlide;
        });
    };
    $scope.getProductRelated = function(){
        var commandOption = {
            command:'get-related',
            kiosk_friendly:kioskFriendly,
            product_friendly:productFriendly
        };
        $http.post('product', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            var responseData = response.data;
            //console.log(responseData);
            $scope.productListRelated = responseData;
        });
    };
    $scope.quickView = function(product){
        console.log(product);
    };
    $scope.tabShowSubmit = function(index){
        var tabShow = $scope.tabShow;
        for(var key in tabShow){
            if(tabShow.hasOwnProperty(key)){
                if(key === index){
                    tabShow[key] = 1;
                } else{
                    tabShow[key] = 0;
                }
            }
        }
        $scope.tabShow = tabShow;
    };
    $scope.tabShowProductSlideSubmit = function(index){
        var tabShowProductSlide = $scope.tabShowProductSlide;
        for(var key in tabShowProductSlide){
            if(tabShowProductSlide.hasOwnProperty(key)){
                key = parseInt(key);
                if(key === index){
                    tabShowProductSlide[key] = 1;
                } else{
                    tabShowProductSlide[key] = 0;
                }
            }
        }
        $scope.tabShowProductSlide = tabShowProductSlide;
    };
    $scope.getBannerSlide = function(){
        var commandOption = {
            'command':'get-slide',
            'kiosk_friendly':kioskFriendly
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
    $scope.getKioskManufacturer = function(){
        var commandOption = {
            command:'get-list',
            kiosk_friendly:kioskFriendly
        };
        $http.post('manufacturer', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            var responseData = response.data;
            //console.log(responseData);
            $rootScope.page.setKioskManufacturer(responseData);
        });
    };
    
    $scope.getKioskInformation();
    $scope.getKioskManufacturer();
    if(productFriendly !== undefined){
        $scope.getProductDetail();
        $scope.getProductRelated();
    } else{
        $scope.getProductList();
    }
    
});