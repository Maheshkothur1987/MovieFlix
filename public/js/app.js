/**
 * Created by harsh on 6/12/2016.
 */
(function () {
    var app = angular.module('movieflix',['ngRoute','ui.bootstrap','angular-input-stars']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
        when('/',{
            templateUrl:'public/html/fullContent.html',
            controller: 'browseController'
        }).
        when('/movies', {
            templateUrl:'public/html/movies.html',
            controller: 'browseController'
        }).
        when('/tv-shows',{
            templateUrl:'public/html/shows.html',
            controller: 'browseController'
        }).
        when('/admin',{
            templateUrl:'public/html/editTitles.html',
            controller: 'browseController'
        })

            .otherwise({redirectTo: '/'});


    }]);

    app.filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });

})();
