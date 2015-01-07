QuickTalkApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'js/templates/login.html',
        controller: 'UserController'
      }).
      otherwise({redirectTo: '/login'});
  }]);
