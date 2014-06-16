angular.module("leasingApp").config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/categories', {
        templateUrl: 'templates/categories-list.html',
        controller: 'TestController'
      }).
      otherwise({
        redirectTo: '/categories'
      });
  }]);
1