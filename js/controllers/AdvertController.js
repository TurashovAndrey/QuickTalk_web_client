angular.module("leasingApp")
.controller("AdvertController", function(AdvertsService, $scope, $routeParams) {

   if ($routeParams.type_id)
   {
	   AdvertsService.get_adverts($routeParams.type_id).then(function(data) {
	      $scope.adverts = data.adverts;
	   });
   }
   else
   {
	   AdvertsService.get_adverts().then(function(data) {
	      $scope.adverts = data.adverts;
	   });
   }

   //CategoriesService.get_types($routeParams.category_id).then(function(data) {
   //   $scope.types = data.types;
   //});
})
