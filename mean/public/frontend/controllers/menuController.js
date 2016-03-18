/* global frontendApplication */

frontendApplication.controller("menuController", function($scope, $http){
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