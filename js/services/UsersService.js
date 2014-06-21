angular.module('usersModule', [])
.factory("UsersService", function($http, MAX_LENGTH) {
  return { 
          login : function(data) {
              data = {
                           "email": "turashov1@gmail.com",
                           "password": "12345678",
                     }
              var promise = $http.post('http://fahlo.loc/leasing/login', data).then(function (response) {
                  return response.data;
              });
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