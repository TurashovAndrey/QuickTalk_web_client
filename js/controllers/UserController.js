angular.module("leasingApp")
.controller("UserController", function(UsersService, $scope, $routeParams, $location, $dialogs) {
   $scope.signin = function() {
      data = {
 		"email": $scope.username,
		"password": $scope.password
	     }

      UsersService.login(data).success(function(data) {
         UsersService.user_id = data.token;
         $location.path('/categories')
      }).error(function(data) {
         dlg = $dialogs.notify("Error: " + data.error.message);
      });
   }
})
