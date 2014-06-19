angular.module('CategoriesResource', [])
.factory("Categories", ['$resource', '$routeParams', function($resource,$routeParams) {
		var Categories = $resource("http://fahlo.loc/leasing/:custom_url",{}, {
     			getCategories: {
				params: {'custom_url':'getCategories'},
				method: 'GET'
			},
		        getTypes : {
				params: {'custom_url':'getTypes', 'category_id': $routeParams.category_id },
		                method: 'GET'
                        }
                });
                return Categories;
}]);