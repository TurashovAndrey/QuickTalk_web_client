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
      when('/create_advert', {
          templateUrl: 'js/templates/create_advert.html', 
          controller: 'CreateAdvertController'
        }).
      when('/adverts/:type_id', {
          templateUrl: 'js/templates/adverts-list.html', 
          controller: 'AdvertController'
        }).
      when('/login', {
        templateUrl: 'js/templates/login.html',
        controller: 'UserController'
      }).
      when('/test', {
        templateUrl: 'js/templates/types-list.html',
        controller: 'TypeController'
      }).
     otherwise({redirectTo: '/categories'});
  }]);
