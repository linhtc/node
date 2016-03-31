/* global frontendApplication */

// create the controller and inject Angular's $scope
frontendApplication.controller('kioskController', function($rootScope, $scope, $routeParams, $location, $http, AUTH_EVENTS, USER_ROLES, AuthService, ngDialog) {
    // authentication
    $scope.currentUser = 'null';
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;
    $scope.setCurrentUser = function (user){ $scope.currentUser = user; };
    
    var pathUrl = $location.$$path;
    $scope.currentIndex = 1;
    $scope.kioskFriendly = '';
    $scope.bannerImages = [{ src: '/frontend/templates/assets/images/slide-1.jpg' }, { src: '/frontend/templates/assets/images/slide-2.jpg'}, { src: '/frontend/templates/assets/images/slide-3.jpg'} ];
    $scope.quickViewVisable = false;
    $scope.tabShow = {description:1, reviews:0, video:0};
    $scope.tabShowProductSlide = {};
    $scope.tabShowQuickViewSlide = {};
    $scope.quantityType = {'quickview':1, 'detail':1};
    var kioskFriendly = $routeParams.kiosk;
    var productFriendly = $routeParams.product;
    var productList4 = [];
    var productList102 = [];
    var productList1041 = [];
    var productList1042 = [];
    $scope.quickViewProduct = {};
    $scope.attributeCart = {};
    var shoppingCart = {};
    shoppingCart[kioskFriendly] = [];
    
    $scope.shoppingFee = 10000;
    $scope.shoppingCode = null;
    $scope.checkoutState = [ 'Thông tin của tôi', 'Vận chuyển', 'Thanh toán', 'Hoàn thành' ];
    var checkoutStateIndex = localStorage.getItem('checkoutStateIndex');
    if(checkoutStateIndex !== null){ $scope.checkoutStateIndex = parseInt(checkoutStateIndex); } else{ $scope.checkoutStateIndex = 0; }
    $scope.nextCheckout = function(){
        $scope.checkoutStateIndex += 1;
        $scope.storageCheckoutInformation();
    };
    $scope.prevCheckout = function(){
        $scope.checkoutStateIndex -= 1;
        //$scope.storageCheckoutInformation();
    };
    $scope.storageCheckoutInformation = function(){
        localStorage.setItem('checkoutStateIndex', $scope.checkoutStateIndex);
        var checkoutInformation = {
            checkoutName:$scope.checkoutName,
            checkoutAddress:$scope.checkoutAddress,
            checkoutPhone:$scope.checkoutPhone,
            checkoutEmail:$scope.checkoutEmail,
            checkoutAddition:$scope.checkoutAddition,
            checkoutShipName:$scope.checkoutShipName,
            checkoutShipAddress:$scope.checkoutShipAddress,
            checkoutShipPhone:$scope.checkoutShipPhone,
            checkoutShipEmail:$scope.checkoutShipEmail,
            checkoutShippingOption:$scope.checkoutShippingOption,
            checkoutShippingMethod:$scope.checkoutShippingMethod,
            checkoutPaymentMethod:$scope.checkoutPaymentMethod
        };
        localStorage.setItem('checkoutInformation', JSON.stringify(checkoutInformation));
        localStorage.setItem('checkoutSameShipping', $scope.checkoutSameShipping);
    };
    $scope.submitCheckout = function(){
        var shoppingCart = localStorage.getItem('shoppingCart');
        var checkoutInformation = localStorage.getItem('checkoutInformation');
        shoppingCart = JSON.parse(shoppingCart);
        checkoutInformation = JSON.parse(checkoutInformation);
        var commandOption = {
            command:'checkout',
            kiosk_friendly:kioskFriendly,
            shopping_cart:shoppingCart,
            checkout_information:checkoutInformation
        };
        $http.post('product', commandOption, {responseType: "text"}).then(function(response){
            if(response.data === null){ console.log('null'); return false; }
            var responseData = response.data;
            console.log(responseData);
            $scope.shoppingCode = responseData.shopping_code;
            localStorage.setItem('shoppingCode', responseData.shopping_code);
            
            $rootScope.shoppingCart[kioskFriendly] = [];
            localStorage.removeItem('shoppingCart');
            localStorage.removeItem('checkoutInformation');
            localStorage.removeItem('checkoutStateIndex');
        });
    };
    
    var shoppingCode = localStorage.getItem('shoppingCode');
    if(shoppingCode !== null){ 
        $scope.shoppingCode = shoppingCode;
    }
    var checkoutInformation = localStorage.getItem('checkoutInformation');
    if(checkoutInformation !== null){ 
        checkoutInformation = JSON.parse(checkoutInformation);
        for(var key in checkoutInformation){
            if(checkoutInformation.hasOwnProperty(key)){
                $scope[key] = checkoutInformation[key];
            }
        }
    }
    
    
    $scope.checkoutShippingMethodName = {free:'Miễn phí', pay:'Dịch vụ giao nhanh', postbank:'Bưu điện', choviets:'Chợ Việts'};
    $scope.checkoutPaymentMethodName = {payWhenDelivery:'Tôi sẽ trả khi nhận hàng', payPal:'PayPal', creditCard:'Credit Card'};
    $scope.messageShippingMethod = {
        free:'Tôi không phải mất phí vận chuyển nhưng nhận hàng lâu', 
        pay:'Dùng dịch vụ Giao nhanh, tôi chỉ mất 20,000 nhưng nhận hàng rất nhanh chóng', 
        postbank:'Dịch vụ của bưu điện có những ưu đãi riêng', 
        choviets:'Chợ Việts là dịch vụ mới nhưng tốt nhất hiện nay'
    };
    
    //if(typeof $scope.checkoutSameShipping === 'undefined'){ $scope.checkoutSameShipping = true; }
    var checkoutSameShipping = localStorage.getItem('checkoutSameShipping');
    if(checkoutSameShipping !== null){
        $scope.checkoutSameShipping = checkoutSameShipping.indexOf('false') >= 0 ? false : true; 
    } else{
        $scope.checkoutSameShipping = true;
    }
    if(typeof $scope.checkoutShippingOption === 'undefined'){ $scope.checkoutShippingOption = 'place'; }
    if(typeof $scope.checkoutShippingMethod === 'undefined'){ $scope.checkoutShippingMethod = 'free'; }
    if(typeof $scope.checkoutPaymentMethod === 'undefined'){ $scope.checkoutPaymentMethod = 'payWhenDelivery'; }
    
    
    var checkShoppingCart = localStorage.getItem('shoppingCart');
    if(checkShoppingCart !== null){ $rootScope.shoppingCart = JSON.parse(checkShoppingCart); }
    $rootScope.shoppingDiscount = 10;
    $scope.getTotalCart = function(){
        if(typeof $rootScope.shoppingCart === 'undefined'){ return 0; }
        var pool1 = $rootScope.shoppingCart[kioskFriendly];
        var shoppingTotal = 0;
        if(pool1.length === 1){
            shoppingTotal = pool1[0].quantity * pool1[0].price;
        } else if(pool1.length > 1){
            shoppingTotal = pool1.reduce(function(previousValue, currentValue, currentIndex, array) {
                var totalPrevious = 0;
                if(typeof previousValue === 'object'){
                    totalPrevious = previousValue.quantity * previousValue.price;
                } else{
                    totalPrevious = previousValue;
                }
                if(typeof currentValue === 'object'){
                    totalPrevious += currentValue.quantity * currentValue.price;
                }
                return totalPrevious;
            });
        }
        $scope.shoppingTotal = shoppingTotal;
        if(shoppingTotal > 0){
            localStorage.setItem('shoppingCart', JSON.stringify($rootScope.shoppingCart));
        }
        return shoppingTotal;
    };
    $scope.removeShoppingCart = function(index){
        $rootScope.shoppingCart[kioskFriendly].splice(index, 1);   
    };
    $scope.addShoppingCart = function(product){
        // remove shopping code
        localStorage.removeItem('shoppingCode');
        $scope.shoppingCode = null;
        $scope.checkoutStateIndex = 0;
        
        //console.log(product);
        //console.log($scope.quantityType.detail);
        var quantity = $scope.quantityType.detail;
        var attributeCartSelect = $scope.attributeCart;
        var attCartString = '';
        for(var attr in attributeCartSelect){
            if(attributeCartSelect.hasOwnProperty(attr)){
                attCartString += (attCartString === '' ? '' : ', ')+attributeCartSelect[attr];
            }
        }
        var shoppingCartTmp = [];
        if(typeof $rootScope.shoppingCart !== 'undefined'){ shoppingCartTmp = $rootScope.shoppingCart[kioskFriendly]; }
        //console.log(attCartString);
        var existedCart = false;
        shoppingCartTmp.forEach(function(item){
            console.log(item);
            if(item.friendly === product.product_friendly && item.attributes === attCartString){
                item.quantity += quantity;
                existedCart = true;
            }
        });
        if(!existedCart){
            var cartItem = {
                name:product.product_name, 
                friendly:product.product_friendly,
                src: product.product_image,
                quantity:quantity,
                price:product.product_price,
                attributes:attCartString
            };
            shoppingCartTmp.push(cartItem);
            shoppingCart[kioskFriendly] = shoppingCartTmp;
            $rootScope.shoppingCart = shoppingCart;
        }
        //console.log($rootScope.shoppingCart[kioskFriendly]);
        localStorage.setItem('shoppingCart', JSON.stringify($rootScope.shoppingCart));
        $location.path(kioskFriendly+'/gio-hang');
    };
    $scope.newShoppingCart = function(){
        $rootScope.shoppingCart[kioskFriendly] = [];
        localStorage.setItem('shoppingCart', JSON.stringify($rootScope.shoppingCart));
        $location.path(kioskFriendly);
    }
    
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
            if(pathUrl.indexOf('gio-hang') >= 0){
                $rootScope.page.setTitle('Giỏ hàng');
            } else if(pathUrl.indexOf('dat-hang') >= 0){
                $rootScope.page.setTitle('Đặt hàng');
            } else{
                $rootScope.page.setTitle(kioskName);
            }
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
    $scope.tabShowQuickViewSlideSubmit = function(index){
        var tabShowQuickViewSlide = $scope.tabShowQuickViewSlide;
        for(var key in tabShowQuickViewSlide){
            if(tabShowQuickViewSlide.hasOwnProperty(key)){
                key = parseInt(key);
                if(key === index){
                    tabShowQuickViewSlide[key] = 1;
                } else{
                    tabShowQuickViewSlide[key] = 0;
                }
            }
        }
        $scope.tabShowQuickViewSlide = tabShowQuickViewSlide;
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
    $scope.changeQuantity = function(quantityType, expression){
        var quantity = $scope.quantityType[quantityType];
        if(expression === 'plus'){
            if(quantity < 10){ quantity++; }
        } else if(expression === 'minus'){
            if(quantity > 1){ quantity--; }
        } else if(quantity > 10){
            quantity = 10;
        } else if(quantity < 1){
            quantity = 1;
        }
        $scope.quantityType[quantityType] = quantity;
    };
    
    $scope.openQuickView = function (quickViewDetail) {
        var tabShowQuickViewSlide = {};
        var productSlide = quickViewDetail.product_slide;
        for(var itemSlide in productSlide){
            itemSlide = parseInt(itemSlide);
            var itemSlideValue = itemSlide === 0 ? 1 : 0;
            tabShowQuickViewSlide[itemSlide] = itemSlideValue;
        }
        $scope.tabShowQuickViewSlide = tabShowQuickViewSlide;
        $scope.quickViewDetail = quickViewDetail;
        ngDialog.open({
            template: '/frontend/templates/pages/product/product.quickview.html',
            className: 'custom-width',
            scope: $scope
        });
    };
    $scope.openComment = function (productComment) {
        $scope.popupReview = 1;
        $scope.productComment = productComment;
        ngDialog.open({
            template: '/frontend/templates/pages/product/product.comment.html',
            className: 'custom-width',
            scope: $scope
        });
    };
    $scope.closeQuickView = function(){
        ngDialog.closeAll();
    };
    
    $scope.getKioskInformation();
    $scope.getKioskManufacturer();
    if(productFriendly !== undefined){
        $scope.getProductDetail();
        $scope.getProductRelated();
    } else if(pathUrl.indexOf('gio-hang') < 0){
        $scope.getProductList();
    }  else if(pathUrl.indexOf('dat-hang') < 0){
        $scope.getProductList();
    } else{
        
    }
});