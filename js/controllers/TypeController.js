angular.module("leasingApp")
.controller("TypeController", function(CategoriesService,RequestsService,AdvertsService,UsersService, Categories, $scope, $routeParams) {
   //Categories.getCategories().$promise.then(function (data) {
   //         $scope.categories = data.categories;  
   //     }).finally(function () {
   //         $scope.isLoading = false;
   //     });


   //UsersService.login().then(function(data) {
   //   $scope.types = data;
   //});


   CategoriesService.get_types($routeParams.category_id).then(function(data) {
      $scope.types = data.types;
   });

   //RequestsService.get_requests("62a9d59a-4498-412f-9595-a5190433b9d4").then(function(data) {
   //   $scope.requests = data;
   //});


   //AdvertsService.get_advert("62a9d59a-4498-412f-9595-a5190433b9d4").success(function(data) {
   //   $scope.advert = data;
   //});

})
.constant('MAX_LENGTH', 100); 