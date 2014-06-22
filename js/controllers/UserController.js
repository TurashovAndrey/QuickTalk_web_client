angular.module("leasingApp")
.controller("UserController", function(UsersService, $scope, $routeParams, $location) {
   $scope.signin = function() {
      data = {
 		"username": $scope.username,
		"password": $scope.password
	     }

      UsersService.login(data).success(function(data) {
         $location.path('/categories')
      }).error(function(data) {
         $scope.error = data;
      });
   }
})
