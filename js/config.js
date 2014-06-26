angular.module("leasingApp").config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/categories', {
        templateUrl: 'js/templates/categories-list.html',
        controller: 'MainController'
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
      when('/adverts/', {
          templateUrl: 'js/templates/adverts-list.html', 
          controller: 'AdvertController'
        }).
      when('/my_adverts/', {
          templateUrl: 'js/templates/adverts-list.html', 
          controller: 'AdvertController'
        }).
      when('/login', {
        templateUrl: 'js/templates/login.html',
        controller: 'UserController'
      }).
      when('/profile', {
        templateUrl: 'js/templates/profile.html',
        controller: 'ProfileController'
      }).
      when('/test', {
        templateUrl: 'js/templates/types-list.html',
        controller: 'TypeController'
      }).
     otherwise({redirectTo: '/categories'});
  }]);
