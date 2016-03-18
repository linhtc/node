// create the module and name it scotchApp
var frontendApplication = angular.module('frontendApplication', ['ngRoute', 'ngAnimate']);

// configure our routes
frontendApplication.config(function($routeProvider, $locationProvider){
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl : 'frontend/templates/pages/home.html',
        controller  : 'homeController',
        title : 'Home'
    })
    .when('/:kiosk', {
        templateUrl : 'frontend/templates/pages/kiosk.html',
        controller  : 'kioskController',
        title : 'Shop'
    })
    .when('/:kiosk/:action', {
        templateUrl : 'frontend/templates/pages/about.html',
        controller  : 'aboutController',
        title : 'About'
    })
    .otherwise({
        redirectTo: '/'
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

frontendApplication.run(['$rootScope', function($rootScope){
    $rootScope.page = {
        setTitle: function(title){
            this.title = title;
        }
    };

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Default Title');
    });
}]);