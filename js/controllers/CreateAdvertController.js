angular.module("leasingApp")
.controller("CreateAdvertController", function(AdvertsService, $scope, $routeParams, CategoriesService) {

   $scope.create_advert = function() {

      data = {
          title: $scope.title,
          description: $scope.description,
          price: $scope.price,
          type_id: $scope.type.id
      };

      AdvertsService.create_advert(data).then(function(data) {
         $scope.adverts = data;
      });
   }

   CategoriesService.get_categories().success(function(data) {
         $scope.categories = data.categories;
   });

   $scope.$watch('category', function() {
       if ($scope.category) {
           CategoriesService.get_types($scope.category.id).success(function(data) {
                 $scope.types = data.types;
           });
       }
   });

})
