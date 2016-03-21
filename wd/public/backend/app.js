// create the module and name it scotchApp
var backendApplication = angular.module('backendApplication', ['ngRoute']);

// configure our routes
backendApplication.config(function($routeProvider, $locationProvider){
    $routeProvider
    // route for the home page
    .when('/', {
        title: 'Home',
        templateUrl : 'backend/templates/pages/home.html',
        controller  : 'homeController'
    })
    .when('/about', {
        title: 'About',
        templateUrl : 'backend/templates/pages/about.html',
        controller  : 'aboutController'
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

backendApplication.run(['$rootScope', function($rootScope) {
    $rootScope.page = {
        setTitle: function(title) {
            this.title = title + ' | Salesforce Cookie Management';
        }
    };

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Default Title');
    });
}]);