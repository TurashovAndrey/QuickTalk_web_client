var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('http://fahlo.loc/leasing/getCategories').success(function(data) {
    $scope.categories = data.categories;
  });
 
  $scope.orderProp = 'name';
});