angular.module('usersModule', [])
.factory("UsersService", function($http, ServerURL) {
  return { 
          login : function(data) {
              var promise = $http.post('http://fahlo.loc/leasing/login', data);
              return promise;
          },
          get_profile : function(data) {
              var promise = $http.get('http://fahlo.loc/leasing/getProfile', data);
              return promise;
          },
          signup : function(data) {
              var promise = $http.post('http://fahlo.loc/leasing/signup', data);
              return promise;
          },
          logout : function() {
              data = "";
              var promise = $http.post('http://fahlo.loc/leasing/logout', data);
              return promise;
          }
  }
})
