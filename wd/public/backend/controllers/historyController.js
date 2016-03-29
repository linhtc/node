/* global backendApplication */

// create the controller and inject Angular's $scope
backendApplication.controller('historyController', function($rootScope, $scope, $http, ngDialog) {
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
    
    $rootScope.pool = {
        pool1:[{
            name:'A1',
            quantity:3,
            price:3
        },{
            name:'A2',
            quantity:5,
            price:10
        },{
            name:'A3',
            quantity:8,
            price:12
        }
    ]};
    
    $scope.grandTotal = function(){
        var pool1 = $rootScope.pool['pool1'];
        return pool1.reduce(function(previousValue, currentValue, currentIndex, array) {
            var totalPrevious = 0;
            if(typeof previousValue === 'object'){
                totalPrevious = previousValue.quantity * previousValue.price;
            } else{
                totalPrevious = previousValue;
            }
            if(typeof currentValue === 'object'){
                totalPrevious += currentValue.quantity * currentValue.price;
            }
            return totalPrevious;
        });
    };
    $scope.applyFunc = function(){
        console.log($rootScope.pool);
    };
    
});