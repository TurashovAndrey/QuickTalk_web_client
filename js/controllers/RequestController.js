angular.module("leasingApp")
.controller("RequestController", function(AdvertsService, RequestsService, $scope, $routeParams) {
       AdvertsService.get_advert($routeParams.advert_id).then(function(data) {
          $scope.advert = data;
       });

       RequestsService.get_requests($routeParams.advert_id).then(function(data) {
          $scope.requests= data.requests;
       });
})