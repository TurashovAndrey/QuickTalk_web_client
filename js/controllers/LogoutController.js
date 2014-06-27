angular.module("leasingApp")
.controller("LogoutController", function(UsersService) {
      UsersService.logout(data).success(function(data) {
         UsersService.is_logged_in = false;
      }).error(function(data) {
         dlg = $dialogs.notify("Error: " + data.error.message);
      });
   }
)
