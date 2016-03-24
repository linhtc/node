/* global backendApplication */

// create the controller and inject Angular's $scope
backendApplication.controller('historyController', function($scope, $http, ngDialog) {
    // create a message to display in our view
    $scope.message = 'History page!';
    $scope.naCookie = 'abc';
    $scope.historyCookie = function(){
        var option = { command:'history-cookie' };
        $scope.cookies = {};
        $http.post('cookie', option, {}).then(function(response){
            if(typeof response['data'] !== 'undefined'){ $scope.cookies = response.data; }
        },
        function(){
            
        });
    };
    
    $scope.clickToOpen = function (naCookie, cnaCookie) {
        $scope.naCookie = JSON.stringify(naCookie);
        $scope.cnaCookie = JSON.stringify(cnaCookie);
        ngDialog.open({ 
            template: 'backend/templates/pages/history/detail.html', 
            className: 'ngdialog-theme-default',
            scope: $scope
        });
    };
});