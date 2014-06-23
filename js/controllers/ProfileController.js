angular.module("leasingApp")
.controller("ProfileController", function(UsersService, AdvertsService, $scope) {
   UsersService.get_profile().then(function(data) {
      $scope.profile = data.data;

      AdvertsService.get_user_adverts($scope.profile.user_id).then(function(data) {
         $scope.adverts = data.adverts;
      });
   });

   

})
