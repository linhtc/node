// create the module and name it scotchApp
var backendApplication = angular.module('backendApplication', ['ngRoute', 'ngDialog']);

// configure our routes
backendApplication.config(function($routeProvider, $locationProvider){
    $routeProvider
    // route for the home page
    .when('/', {
        title: 'Home',
        templateUrl : 'backend/templates/pages/home/home.html',
        controller  : 'homeController'
    })
    .when('/about', {
        title: 'About',
        templateUrl : 'backend/templates/pages/about/about.html',
        controller  : 'aboutController'
    })
    .when('/history', {
        title: 'History',
        templateUrl : 'backend/templates/pages/history/history.html',
        controller  : 'historyController'
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