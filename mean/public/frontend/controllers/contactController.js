/* global backendApplication */

// create the controller and inject Angular's $scope
frontendApplication.controller('contactController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Contact page!';
});