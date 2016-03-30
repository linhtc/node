// create the module and name it scotchApp
var frontendApplication = angular.module('frontendApplication', ['ngRoute', 'ngAnimate', 'ngDialog']);

// trust html binding
frontendApplication.filter('trusted_html', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

// configure our routes
frontendApplication.config(function($routeProvider, $locationProvider, USER_ROLES){
    var mainTitle = 'Chợ Việts';
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl : '/frontend/templates/pages/home/home.html',
        controller  : 'homeController',
        title : mainTitle,
        data: {
            authorizedRoles: [USER_ROLES.all]
        }
    })
    .when('/:kiosk', {
        templateUrl : '/frontend/templates/pages/kiosk/kiosk.html',
        controller  : 'kioskController',
        title : mainTitle,
        data: {
            authorizedRoles: [USER_ROLES.all]
        }
    })
    .when('/:kiosk/gio-hang', {
        templateUrl : '/frontend/templates/pages/product/product.cart.html',
        controller  : 'kioskController',
        title : mainTitle,
        data: {
            authorizedRoles: [USER_ROLES.all]
        }
    })
    .when('/:kiosk/mua-hang', {
        templateUrl : '/frontend/templates/pages/product/product.checkout.html',
        controller  : 'kioskController',
        title : mainTitle,
        data: {
            authorizedRoles: [USER_ROLES.all]
        }
    })
    .when('/:kiosk/san-pham/:product', {
        templateUrl : '/frontend/templates/pages/product/product.detail.html',
        controller  : 'kioskController',
        title : mainTitle,
        data: {
            authorizedRoles: [USER_ROLES.all]
        }
    })
    .otherwise({
        redirectTo: '/'
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

// constant
frontendApplication.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});

frontendApplication.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
});

frontendApplication.factory('AuthService', function ($http, Session) {
    var authService = {};
    authService.login = function (credentials) {
        return $http.post('/login', credentials)
        .then(function (res) {
            Session.create(res.data.id, res.data._id, res.data.role);
            return res.data;
        });
    };
 
    authService.isAuthenticated = function () {
        return !!Session.userId;
    };
 
    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
    };
 
    return authService;
});

frontendApplication.service('Session', function () {
    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };
});

frontendApplication.run(function($rootScope, AUTH_EVENTS, AuthService){
    $rootScope.page = {
        setTitle: function(title){
            this.title = title;
        },
        setKioskName: function(kioskName){
            this.kioskName = kioskName;
        },
        setKioskSlogan: function(kioskSlogan){
            this.kioskSlogan = kioskSlogan;
        },
        setKioskPhone: function(kioskPhone){
            this.kioskPhone = kioskPhone;
        },
        setKioskEmail: function(kioskEmail){
            this.kioskEmail = kioskEmail;
        },
        setKioskManufacturer: function(kioskManufacturer){
            this.kioskManufacturer = kioskManufacturer;
        }
    };
    $rootScope.removeShoppingCart = function(kioskFriendly, index){
        $rootScope.shoppingCart[kioskFriendly].splice(index, 1);   
        localStorage.setItem('shoppingCart', JSON.stringify($rootScope.shoppingCart));
    };
    

    $rootScope.$on('$routeChangeStart', function(event, current) {
        /*
        var authorizedRoles = current.data.authorizedRoles;
        if (!AuthService.isAuthorized(authorizedRoles)) {
            event.preventDefault();
            if (AuthService.isAuthenticated()) {
                // user is not allowed
                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            } else {
                // user is not logged in
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
        }
        */
    });
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Default Title');
        $rootScope.page.setKioskName(current.$$route.kioskName || 'Chợ Việt<span>s</span>');
        $rootScope.page.setKioskSlogan(current.$$route.kioskSlogan || 'Nơi mua sắm tuyệt vời của tôi');
        $rootScope.page.setKioskPhone(current.$$route.kioskPhone || '<i class="fa fa-phone"></i> 01237.603.564');
        $rootScope.page.setKioskEmail(current.$$route.kioskEmail || '<i class="fa fa-envelope"></i> tplus.tcl@gmail.com');
    });
});