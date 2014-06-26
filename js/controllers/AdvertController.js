angular.module("leasingApp")
.controller("AdvertController", function(AdvertsService, UsersService, $scope, $routeParams, $location) {

   if ($routeParams.type_id)
   {
	   AdvertsService.get_adverts($routeParams.type_id).then(function(data) {
	      $scope.adverts = data.adverts;
	   });
   }
   else
   {
           if ($location.url() == '/my_adverts/') {
		   AdvertsService.get_user_adverts(UsersService.user_id).then(function(data) {
		      $scope.adverts = data.adverts;
		   });
	   }
           else {
		   AdvertsService.get_adverts().then(function(data) {
		      $scope.adverts = data.adverts;
		   });
           }
   }
})
