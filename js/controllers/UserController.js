angular.module("leasingApp")
.controller("UserController", function(UsersService, $scope, $routeParams, $location) {
   $scope.signin = function() {
      data = {
 		"username": $scope.username,
		"password": $scope.password
	     }

      UsersService.login(data).then(function(data) {
         $location.path('/categories')
      }).
      error(function(error) {
         $scope.error = error
      });
   }
})
