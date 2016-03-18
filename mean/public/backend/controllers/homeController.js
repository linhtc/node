/* global backendApplication */

// create the controller and inject Angular's $scope
backendApplication.controller('homeController', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Home page!';
    $scope.getMenu = function(){
        var commandOption = {
            'command':'get-menu'
        };
        $http.post('menu', commandOption, {}).then(function(response){
            console.log(response);
        },
        function(){
            
        });
    };
});