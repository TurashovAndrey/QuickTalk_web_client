angular.module("leasingApp")
.controller("AdvertController", function(AdvertsService, UsersService, CitiesService, $scope, $routeParams, $location, Pagination) {
   $scope.pagination = Pagination.getNew(2);


   if ($routeParams.keyword) {
	   AdvertsService.get_adverts_by_keyword($routeParams.keyword).then(function(data) {
	      $scope.adverts = data.data.adverts;
	   });
   }
   else {
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
   }

   $scope.$watch('adverts', function(data) {
      $scope.pagination.numPages = Math.ceil($scope.adverts.length/$scope.pagination.perPage);
   });


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
