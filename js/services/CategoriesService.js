angular.module('categoriesModule', [])
.factory("CategoriesService", function($http, MAX_LENGTH) {
  return { 
          get_categories : function() {
              var promise = $http.get('http://fahlo.loc/leasing/getCategories').then(function (response) {
                  return response.data;
              });
              return promise;
          },
          get_types : function(category_id) {
              var promise = $http.get('http://fahlo.loc/leasing/getTypes?category_id='+category_id).then(function (response) {
                  return response.data;
              });
              return promise;
          },
  }
})
