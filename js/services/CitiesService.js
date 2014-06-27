angular.module('CitiesModule', [])
.factory("CitiesService", function($http, ServerURL) {
  return { 
          get_cities : function() {
              var method = '/getCities';
              var promise = $http.get(ServerURL + method).then(function (response) {
                  return response.data;
              });
              return promise;
          }  
         }
})
