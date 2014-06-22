angular.module("leasingApp")
.controller("UserController", function(UsersService, $scope, $routeParams) {
   $scope.signin = function() {
      data = {
 		"username": $scope.username,
		"password": $scope.password
	     }

      UsersService.login(data).then(function(data) {
         $scope.success = data;
      });
   }
})
