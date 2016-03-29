/* global backendApplication */

// create the controller and inject Angular's $scope
backendApplication.controller('historyController', function($scope, $http, ngDialog) {
    // create a message to display in our view
    $scope.cookieList = [];
    $scope.totalRecords = 0;
    $scope.historyCookie = function(){
        var option = { command:'history-cookie' };
        $scope.cookies = {};
        $http.post('cookie', option, {}).then(function(response){
            if(typeof response['data'] !== 'undefined'){ $scope.cookies = response.data; $scope.totalRecords = response.data.length; }
        },
        function(){
            
        });
    };
    
    $scope.clickToOpen = function (naCookie, cnaCookie) {
        $scope.cookieList = [{name:'NA12', list:naCookie}, {name:'C.NA12', list:cnaCookie}];
        ngDialog.open({ 
            template: 'backend/templates/pages/history/detail.html',
            className: 'ngdialog-theme-plain custom-width',
            scope: $scope
        });
    };
});