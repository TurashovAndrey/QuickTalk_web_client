angular.module("leasingApp")
.controller("CreateAdvertController", function(AdvertsService, $scope, $routeParams) {

   $scope.create_advert = function() {

      AdvertsService.create_advert(data).then(function(data) {
         $scope.adverts = data;
      });
   }
})
