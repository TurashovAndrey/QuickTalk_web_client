angular.module("leasingApp").config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/categories', {
        templateUrl: 'js/templates/categories-list.html',
        controller: 'TestController'
      }).
      when('/categories/:category_id', {
          templateUrl: 'js/templates/types-list.html', 
          controller: 'TypeController'
        }).
      when('/test', {
        templateUrl: 'js/templates/types-list.html',
        controller: 'TypeController'
      });
  }]);
