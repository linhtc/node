/* global backendApplication */

// create the controller and inject Angular's $scope
backendApplication.controller('homeController', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Home page!';
    $scope.saveCookie = function(){
        $scope.submitCookie();
    };
    $scope.resetForm = function(){
        $scope.na = '';
        $scope.cna = '';
    };
    $scope.submitCookie = function(){
        var na = $scope.na;
        na = JSON.parse(na);
        var cna = $scope.cna;
        cna = JSON.parse(cna);
        var option = { command:'save-cookie', na: na, cna:cna };
        $http.post('cookie', option, {}).then(function(response){
            console.log(response);
            if(response.data === 'OK'){ $scope.na = ''; $scope.cna = ''; }
        },
        function(){
            
        });
    };
});