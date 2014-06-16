angular.module("leasingApp",["ngRoute","ngResource", "categoriesModule", "requestsModule", "advertsModule", "usersModule", "CategoriesResource"])
.controller("TestController", function(CategoriesService,RequestsService,AdvertsService,UsersService, Categories, $scope) {
   //CategoriesService.get_categories().then(function(data) {
   //   $scope.categories = data.categories;
   //});
   
   $scope.testName = function() {
     return $scope.name;
   };

   Categories.getCategories().$promise.then(function (data) {
            $scope.categories = data.categories;  
        }).finally(function () {
            $scope.isLoading = false;
        });


   //UsersService.login().then(function(data) {
   //   $scope.types = data;
   //});


   //CategoriesService.get_types(1).then(function(data) {
   //   $scope.types = data;
   //});

   //RequestsService.get_requests("62a9d59a-4498-412f-9595-a5190433b9d4").then(function(data) {
   //   $scope.requests = data;
   //});


   //AdvertsService.get_advert("62a9d59a-4498-412f-9595-a5190433b9d4").success(function(data) {
   //   $scope.advert = data;
   //});

})
.constant('MAX_LENGTH', 100);


//var TestController = function($scope) {
//   $scope.name = "Very test name";
   
//   $scope.testName = function() {
//     return $scope.name;
//   };
//};


var WorldController = function($scope) {
  $scope.countries = [
     {name: "France", population: "62.1"},
     {name: "UK", population: "65.8"},
  ];
};


var TextAreaWithLimitCtrl = function($scope) {
   $scope.MAX_LENGTH = 100;
   $scope.WARN_THRESHOLD = 20;
   $scope.message = "";
   $scope.remaining = function() {
      return $scope.MAX_LENGTH - $scope.message.length;
   };

   $scope.hasValidLength = function() {
     return $scope.remaining() < $scope.WARN_THRESHOLD;
   };
   
   $scope.shouldWarn = function() {
     return $scope.remaining() < $scope.WARN_THRESHOLD;
   };

   $scope.clear = function() {
     $scope.message = ""; 
   };
};
 