angular.module('CategoriesModule', [])
.factory("CategoriesService", function($http, ServerURL) {
  return {

          get_categories : function() {
              var method = '/getCategories'
              var promise = $http.get(ServerURL+method);
              return promise;
          },

          get_types : function(category_id) {
              var method = '/getTypes?category_id='+category_id
              var promise = $http.get(ServerURL + method);
              return promise;
          },

          get_current_category: function() {
	           return this.current_category
	      },

          set_current_category: function(value) {
	           this.current_category = value
	      }

  }
})
