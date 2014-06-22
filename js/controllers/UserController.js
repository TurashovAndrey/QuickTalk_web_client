angular.module("leasingApp")
.controller("UserController", function(UsersService, $scope, $routeParams, $location, $dialogs) {
   $scope.signin = function() {
      data = {
 		"username": $scope.username,
		"password": $scope.password
	     }

      UsersService.login(data).success(function(data) {
         $location.path('/categories')
      }).error(function(data) {
         dlg = $dialogs.notify("Error: " + data.error.message);
      });
   }
})
