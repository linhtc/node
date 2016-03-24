/* global backendApplication */

// create the controller and inject Angular's $scope
backendApplication.controller('homeController', function($scope, $http, ngDialog) {
    // create a message to display in our view
    $scope.message = 'Home page!';
    $scope.errorMessage = '';
    $scope.resetForm = function(){
        $scope.na = '';
        $scope.cna = '';
    };
    $scope.saveCookie = function(){
        var na = $scope.na;
        var cna = $scope.cna;
        if(na === undefined || cna === undefined){
            $scope.errorMessage = 'Please input two cookies!';
            ngDialog.open({
                template: 'backend/templates/pages/dialog/error.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
            return false;
        }
        try{
            na = JSON.parse(na);
            cna = JSON.parse(cna);
        } catch(exx){
            $scope.errorMessage = exx.message;
            ngDialog.open({
                template: 'backend/templates/pages/dialog/error.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
            return false;
        }
        var option = { command:'save-cookie', na: na, cna:cna };
        $http.post('cookie', option, {}).then(function(response){
            console.log(response);
            if(response.data === 'OK'){ $scope.na = ''; $scope.cna = ''; }
        },
        function(){
            
        });
    };
});