angular.module("leasingApp")
.controller("AdvertController", function(AdvertsService, UsersService, CitiesService, $scope, $routeParams, $location) {

   if ($routeParams.type_id)
   {
	   AdvertsService.get_adverts($routeParams.type_id).then(function(data) {
	      $scope.adverts = data.adverts;
	   });
   }
   else
   {
       if ($location.url() == '/my_adverts/') {
           AdvertsService.get_user_adverts(UsersService.user_id).success(function(data) {
              $scope.adverts = data.adverts;
           });
       }
       else {
           AdvertsService.get_adverts().success(function(data) {
              $scope.adverts = data.adverts;
           });
       }
   }

   CitiesService.get_cities().success(function(data) {
      $scope.cities = data.cities;
   });

   $scope.$watch('city', function() {
       if ($scope.city) {
           AdvertsService.get_adverts_by_city($scope.city.city_id).success(function(data) {
                 $scope.adverts = data.adverts;
           });
       }
   });


})
