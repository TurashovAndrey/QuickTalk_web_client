angular.module('usersModule', [])
.factory("UsersService", function($http, MAX_LENGTH) {
  return { 
          login : function(data) {
              var promise = $http.post('http://fahlo.loc/leasing/login', data);
              return promise;
          },
          get_profile : function(data) {
              var promise = $http.get('http://fahlo.loc/leasing/getProfile', data);
              return promise;
          },
          sign_up : function(data) {
              data = {
                           "email": "test@test.com",
                           "password": "12345678",
                     }

              var promise = $http.post('http://fahlo.loc/leasing/signup', data).then(function (response) {
                  return response.data;
              });

              return promise;
          },
          logout : function() {
              data = "";
              var promise = $http.post('http://fahlo.loc/leasing/logout', data).then(function (response) {
                  return response.data;
              });
          }
  }
})
