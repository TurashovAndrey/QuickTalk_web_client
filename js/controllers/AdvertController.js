angular.module("leasingApp")
.controller("AdvertController", function(AdvertsService, $scope, $routeParams) {

   AdvertsService.get_adverts($routeParams.type_id).then(function(data) {
      $scope.adverts = data.adverts;
   });


   //CategoriesService.get_types($routeParams.category_id).then(function(data) {
   //   $scope.types = data.types;
   //});
})
