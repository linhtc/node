// create the module and name it scotchApp
var backendApplication = angular.module('backendApplication', ['ngRoute']);

// configure our routes
backendApplication.config(function($routeProvider, $locationProvider){
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl : 'backend/templates/pages/home.html',
        controller  : 'homeController'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'backend/templates/pages/about.html',
        controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'backend/templates/pages/contact.html',
        controller  : 'contactController'
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});