angular.module('usersModule', [])
.factory("UsersService", function($http, ServerURL) {
  return { 
          login : function(data) {
              var method = '/login';
              var promise = $http.post(ServerURL + method, data);
              return promise;
          },
          get_profile : function(data) {
              var method = '/getProfile';
              var promise = $http.get(ServerURL + method, data);
              return promise;
          },
          signup : function(data) {
              var method = '/signup';
              var promise = $http.post(ServerURL + method, data);
              return promise;
          },
          logout : function() {
              var method = '/logout';
              var promise = $http.post(ServerURL + method, data);
              return promise;
          }
  }
})
