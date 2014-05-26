var leasingApp = angular.module('leasingApp', ['ngRoute', 'ngResource', 'CategoriesService']);

leasingApp.controller('CategoriesCtrl', ['$scope', 'CategoriesService', function ($scope, CategoriesService) {
	    $scope.categories = CategoriesService.categories();
	    $scope.orderProp = 'name';
}]);