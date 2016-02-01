angular.module('leasingApp', ['ngRoute'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      //when('/categories', {
      //  templateUrl: 'js/templates/categories-list.html',
      //  controller: 'MainController'
      //}).
      //when('/categories/:category_id', {
      //    templateUrl: 'js/templates/types-list.html',
      //    controller: 'TypeController'
      //  }).
      //when('/create_advert', {
      //    templateUrl: 'js/templates/create_advert.html',
      //    controller: 'CreateAdvertController'
      //  }).
      //when('/adverts/:type_id', {
      //    templateUrl: 'js/templates/adverts-list.html',
      //    controller: 'AdvertController'
      //  }).
      //when('/advert/:advert_id', {
      //    templateUrl: 'js/templates/advert-details.html',
      //    controller: 'RequestController'
      //  }).
      //when('/adverts/', {
      //    templateUrl: 'js/templates/adverts-list.html',
      //    controller: 'AdvertController'
      //  }).
      //when('/search_adverts/:keyword', {
      //    templateUrl: 'js/templates/adverts-list.html',
      //    controller: 'AdvertController'
      //  }).
      //when('/my_adverts/', {
      //    templateUrl: 'js/templates/adverts-list.html',
      //    controller: 'AdvertController'
      //  }).
      when('/login', {
        templateUrl: 'js/templates/login.html',
        controller: 'AuthController'
      }).
      when('/signup', {
        templateUrl: 'js/templates/signup.html',
        controller: 'AuthController'
      }).
      when('/logout', {
        templateUrl: 'js/templates/logout.html',
        controller: 'AuthController'
      }).
      when('/profile', {
        controller: 'ProfileController',
        templateUrl: 'js/templates/profile.html'
      }).
     // when('/test', {
     //   templateUrl: 'js/templates/types-list.html',
     //   controller: 'TypeController'
     // }).
     otherwise({redirectTo: '/login'});
  }]);
