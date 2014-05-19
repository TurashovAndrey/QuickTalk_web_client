var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('http://fahlo.loc/leasing/getAdvert').success(function(data) {
    $scope.phones = data;
  });
 
  $scope.orderProp = 'age';
});