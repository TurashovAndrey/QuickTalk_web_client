angular.module("leasingApp")
.controller("TypeController", function(CategoriesService, $scope, $routeParams) {

   //CategoriesService.set_current_category($routeParams.category_id)
   //Categories.getTypes().$promise.then(function (data) {
// 	     $scope.types = data.types;
//   }).finally(function () {
//             $scope.isLoading = false;
//        });

   CategoriesService.get_types($routeParams.category_id).then(function(data) {
      $scope.types = data.types;
   });
})
