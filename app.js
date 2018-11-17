var evee = angular.module('evee', ['ngRoute']);

evee.config(($routeProvider) => {
  $routeProvider
  
  .when('/', {
    templateUrl : 'pages/carouselView.html',
    controller : 'homeController'
  })
  
  .when('/browse', {
    templateUrl : 'pages/browse.html',
    controller : 'browseController'
  })
})

evee.controller('homeController', ($scope) => {
  $scope.info = ''
})

evee.controller('browseController', ($scope) => {
  $scope.info = ''
})