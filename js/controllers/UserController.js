angular.module("leasingApp")
.controller("UserController", function(UsersService, $scope, $routeParams, $location, $dialogs) {
   $scope.signin = function() {
      data = {
 		"email": $scope.username,
		"password": $scope.password
	     }

      UsersService.login(data).success(function(data) {
         UsersService.user_id = data.token;
	 UsersService.username = data.username;
         UsersService.is_logged_in = true;
         $location.path('/categories')
      }).error(function(data) {
         dlg = $dialogs.notify("Error: " + data.error.message);
      });
   }

   $scope.is_logged_in = function() {
      if (UsersService.is_logged_in == undefined || !UsersService.is_logged_in)
	return false;
      else	
	return true;
   }

   $scope.get_username = function() {
	return UsersService.username;
   }	

   $scope.$watch(UsersService.username, function() {
	$scope.username = UsersService.username;	
   });

   $scope.signup = function() {
      data = {
 		"email": $scope.username,
		"password": $scope.password
	     }

      UsersService.signup(data).success(function(data) {
         dlg = $dialogs.notify("Please check clarification letter");
         UsersService.user_id = data.token;
         UsersService.is_logged_in = true;
         $location.path('/categories')
      }).error(function(data) {
         dlg = $dialogs.notify("Error: " + data.error.message);
      });
   }

})
