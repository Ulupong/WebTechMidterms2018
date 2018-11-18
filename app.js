var app = angular.module('evee', ['ngRoute']);

app.config(['$routeProvider', 
    function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'pages/carouselView.html'
            })
            .when('/browse', {
                templateUrl: 'pages/browse.html'
            })

            .otherwise({
                redirectTo: '/'
            })
    }
])