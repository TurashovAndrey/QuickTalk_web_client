angular.module("leasingApp")
.controller("LogoutController", function(UsersService, $dialogs, $location) {

      UsersService.logout().success(function(data) {
             UsersService.is_logged_in = false;
             UsersService.username = null;
             dlg = $dialogs.notify("You are lgout successfully");
             $location.path('/adverts')
      }).error(function(data) {
             dlg = $dialogs.notify("Error: " + data.error.message);
      });
   }
)
