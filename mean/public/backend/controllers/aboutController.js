/* global backendApplication */

// create the controller and inject Angular's $scope
backendApplication.controller('aboutController', function($scope) {
    // create a message to display in our view
    $scope.message = 'About page!';
});