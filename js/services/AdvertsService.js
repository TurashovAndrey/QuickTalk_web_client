angular.module('advertsModule', [])
.factory("AdvertsService", function($http, ServerURL) {
  return { 

          get_advert : function(advert_id) {
              var method = '/getAdvert?advert_id='+advert_id;
              var promise = $http.get(ServerURL+method).then(function (response) {
                  return response.data;
              });
              return promise;
          },

          create_advert: function(data) {
              var method = '/createAdvert';
                  var promise = $http.post(ServerURL+method, data).then(function (response) {
                      return response.data;
                  });
                  return promise;
              },

          get_advert_comments: function(advert_id) {
              var method = '/getAdvertComments?advert_id='+advert_id;
                  var promise = $http.get(ServerURL+method).then(function (response) {
                      return response.data;
                  });
                  return promise;
          },

          create_advert_commment: function(data) {
              var data = {
                           "advert_id": "62a9d59a-4498-412f-9595-a5190433b9d4",
                           "from_user_id": "6e12f572-ed56-43b8-9aaf-a7f08f4ff1af",
                           "description": "1"
                         }
              var method = '/createAdvertComment';
                  var promise = $http.post(ServerURL+method, data).then(function (response) {
                      return response.data;
                  });
                  return promise;
              },

          get_adverts : function(type_id) {
              if (type_id)
                 var method = '/getAdverts?type_id='+type_id
	          else
                 var method = '/getAdverts';

              var promise = $http.get(ServerURL+method);
              return promise;
          },

          get_adverts_by_city : function(city_id) {
              if (city_id)
                 var method = '/getAdverts?city_id='+city_id

              var promise = $http.get(ServerURL+method);
              return promise;
          },

          get_user_adverts : function(user_id) {
              var method = '/getAdverts?user_id='+user_id
              var promise = $http.get(ServerURL+method).then(function (response) {
                  return response.data;
              });
              return promise;
          },
  }
})
