angular.module('requestsModule', [])
.factory("RequestsService", function($http, ServerURL) {
  return { 
          get_requests : function(advert_id) {
              var method = '/getRequests?advert_id='+advert_id;
              var promise = $http.get(ServerURL + method).then(function (response) {
                  return response.data;
              });
              return promise;
          },
          create_request : function(data) {
              var data = {
                           "request_user_id": "6e12f572-ed56-43b8-9aaf-a7f08f4ff1af",
                           "advert_id": "b4650009-6a5f-4bab-89fb-39f5a93ee489",
                         }

              var method = '/createRequest';
              var promise = $http.post(ServerURL + method, data).then(function (response) {
                  return response.data;
              });

              return promise;
          }
  }
})
