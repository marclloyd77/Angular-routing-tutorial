var myApp = angular.module('myApp', []);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
                templateUrl: 'templates/home.html',
            }).
            when('/articles', {
                templateUrl: 'templates/articles.html',
            }).
            otherwise({
                redirectTo: '/'
            });
}]);