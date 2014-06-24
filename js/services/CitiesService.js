angular.module('CitiesModule', [])
.factory("CitiesService", function($http, MAX_LENGTH) {
  return { 
          get_cities : function() {
              var promise = $http.get('http://fahlo.loc/leasing/getCities').then(function (response) {
                  return response.data;
              });
              return promise;
          }  
         }
})
