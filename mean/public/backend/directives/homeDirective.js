/* global manApplication */

manApplication.directive("homeDirective", function() {
    return {
        restrict : "AE",
        template : "<h1>Made by a directive!</h1>"
    };
});