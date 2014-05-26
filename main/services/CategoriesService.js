angular.module('leasingApp').factory('CategoriesService', ['$resource', function($resource) {
	var CategoriesService = $resource("http://fahlo.loc/leasing/getCategories", {}, {
		categories: {
			method: 'GET'
		}
	});
}]);