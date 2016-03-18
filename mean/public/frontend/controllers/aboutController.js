/* global frontendApplication */

// create the controller and inject Angular's $scope
frontendApplication.controller('aboutController', function($scope, $routeParams) {;
    // create a message to display in our view
    $scope.message = $routeParams.kiosk;
    $scope.action = $routeParams.action;
});