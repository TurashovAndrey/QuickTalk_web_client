angular.module('CategoriesResource', [])
.factory("Categories", ['$resource', function($resource) {
		var Categories = $resource("http://fahlo.loc/leasing/getCategories",{}, {
     			getCategories: {
				method: 'GET'
			}
                 });
                 return Categories;
}]);